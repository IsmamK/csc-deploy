import React, { useState ,useEffect} from 'react';

const CoursesEditor = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    id: Date.now(),
    degree_type: '',
    name: '',
    slug: '',
    title_1: '',
    description_1: '',
    image_1: null,
    title_2: '',
    description_2: '',
    career_opportunities: [''],
    study_mode: '',
    credits: '',
    duration: '',
    recognized_by: '',
    awarded_by: '',
    language_proficiency: '',
    banner_image: null,
    course_modules: [{ year: 1, modules: [''] }],
  });


  const apiUrl = import.meta.env.VITE_API_URL;
 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleCareerOpportunityChange = (e, index) => {
    const { value } = e.target;
    const updatedOpportunities = [...course.career_opportunities];
    updatedOpportunities[index] = value;
    setCourse({ ...course, career_opportunities: updatedOpportunities });
  };

  const addCareerOpportunity = () => {
    setCourse({
      ...course,
      career_opportunities: [...course.career_opportunities, ''],
    });
  };

  const removeCareerOpportunity = (index) => {
    const updatedOpportunities = course.career_opportunities.filter((_, i) => i !== index);
    setCourse({ ...course, career_opportunities: updatedOpportunities });
  };

  const handleModulesChange = (e, year, index) => {
    const { value } = e.target;
    const updatedModules = course.course_modules.map((module) =>
      module.year === year
        ? { ...module, modules: module.modules.map((mod, i) => (i === index ? value : mod)) }
        : module
    );
    setCourse({ ...course, course_modules: updatedModules });
  };

  const addModuleYear = () => {
    setCourse({
      ...course,
      course_modules: [...course.course_modules, { year: course.course_modules.length + 1, modules: [''] }],
    });
  };

  const addModule = (year) => {
    const updatedModules = course.course_modules.map((module) =>
      module.year === year ? { ...module, modules: [...module.modules, ''] } : module
    );
    setCourse({ ...course, course_modules: updatedModules });
  };

  const removeModule = (year, index) => {
    const updatedModules = course.course_modules.map((module) =>
      module.year === year
        ? { ...module, modules: module.modules.filter((_, i) => i !== index) }
        : module
    );
    setCourse({ ...course, course_modules: updatedModules });
  };

  useEffect(() => {
    // Fetch courses on component mount
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${apiUrl}/courses/`);
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [apiUrl]);

  const handleDeleteCourse = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/courses/${id}/`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete course');
      }

      // Remove the course from the state
      setCourses(courses.filter((course) => course.id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleAddCourse = async () => {
    try {
      // POST the course data to the API
      const response = await fetch(`${import.meta.env.VITE_API_URL}/courses/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
      });

      if (!response.ok) {
        throw new Error('Failed to add course');
      }

      const result = await response.json();
      console.log('Course added:', result);

      // Add the new course to local state
      setCourses([...courses, { ...course, id: Date.now() }]);

      // Reset the form
      setCourse({
        degree_type: '',
        name: '',
        slug: '',
        title_1: '',
        description_1: '',
        image_1: null,
        title_2: '',
        description_2: '',
        career_opportunities: [''],
        study_mode: '',
        credits: '',
        duration: '',
        recognized_by: '',
        awarded_by: '',
        language_proficiency: '',
        banner_image: null,
        course_modules: [{ year: 1, modules: [''] }],
      });

    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold text-center">Courses Editor</h2>

       {/* Display Courses */}
       <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Existing Courses</h3>
        <ul className="space-y-4">
          {courses.map((course) => (
            <li
              key={course.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <div>
                <p className="text-lg font-semibold">{course.name}</p>
                <p className="text-gray-600">{course.degree_type}</p>
              </div>
              <button
                onClick={() => handleDeleteCourse(course.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Degree Info */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Degree Information</h3>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700">Degree Type</label>
            <input
              type="text"
              name="degree_type"
              value={course.degree_type}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., Bachelor's in Business"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Course Name</label>
            <input
              type="text"
              name="name"
              value={course.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., Business Management"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Course Slug</label>
            <input
              type="text"
              name="slug"
              value={course.slug}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., business-management"
            />
          </div>
        </div>
      </div>

      {/* Title 1 & Description 1 */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Title 1 & Description</h3>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700">Title 1</label>
            <input
              type="text"
              name="title_1"
              value={course.title_1}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Title 1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Description 1</label>
            <textarea
              name="description_1"
              value={course.description_1}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Description 1"
            />
          </div>
       
        </div>
      </div>

      {/* Title 2 & Description 2 */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Title 2 & Description</h3>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700">Title 2</label>
            <input
              type="text"
              name="title_2"
              value={course.title_2}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Title 2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Description 2</label>
            <textarea
              name="description_2"
              value={course.description_2}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Description 2"
            />
          </div>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Career Opportunities</h3>
        {course.career_opportunities.map((opportunity, index) => (
          <div key={index} className="flex items-center space-x-4 mb-2">
            <input
              type="text"
              value={opportunity}
              onChange={(e) => handleCareerOpportunityChange(e, index)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., International Business Manager"
            />
            <button onClick={() => removeCareerOpportunity(index)} className="text-red-500">Remove</button>
          </div>
        ))}
        <button onClick={addCareerOpportunity} className="text-blue-500 mt-4">Add Career Opportunity</button>
      </div>

      {/* Other Fields */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 font">Other Information</h3>
        <div className="space-y-4 grid grid-cols-2 items-center gap-10 font-semibold">
          <div className="flex flex-col">
            <label className="text-gray-700">Study Mode</label>
            <input
              type="text"
              name="study_mode"
              value={course.study_mode}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., Full-time"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Credits</label>
            <input
              type="text"
              name="credits"
              value={course.credits}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., 120"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Duration</label>
            <input
              type="text"
              name="duration"
              value={course.duration}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., 3 years"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Recognized By</label>
            <input
              type="text"
              name="recognized_by"
              value={course.recognized_by}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., University Grants Commission"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Awarded By</label>
            <input
              type="text"
              name="awarded_by"
              value={course.awarded_by}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., University of XYZ"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Language Proficiency</label>
            <input
              type="text"
              name="language_proficiency"
              value={course.language_proficiency}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., English Proficiency"
            />
          </div>
          
        </div>
      </div>

      {/* Course Modules */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Course Modules</h3>
        {course.course_modules.map((module, yearIndex) => (
          <div key={yearIndex} className="space-y-4">
            <h4 className="text-md font-semibold text-gray-700">Year {module.year}</h4>
            {module.modules.map((mod, index) => (
              <div key={index} className="flex items-center space-x-4">
                <input
                  type="text"
                  value={mod}
                  onChange={(e) => handleModulesChange(e, module.year, index)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Module Name"
                />
                <button
                  onClick={() => removeModule(module.year, index)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <button onClick={() => addModule(module.year)} className="text-blue-500 mt-4">
              Add Module
            </button>
          </div>
        ))}
        <button onClick={addModuleYear} className="text-blue-500 mt-4">Add Year</button>
      </div>

      <button
        onClick={handleAddCourse}
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
      >
        Add Course
      </button>
    </div>
  );
};

export default CoursesEditor;
