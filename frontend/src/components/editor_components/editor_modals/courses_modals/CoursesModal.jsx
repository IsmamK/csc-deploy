import React, { useState, useEffect } from 'react';

const CoursesModal = ({ isOpen, onClose, courseId, onSave }) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    degree_type: '',
    name: '',
    slug: '',
    title_1: '',
    description_1: '',
    image_1: null,
    title_2: '',
    description_2: '',
    image_2: null,
    career_opportunities: [],
    study_mode: '',
    credits: 0,
    duration: '',
    recognized_by: '',
    awarded_by: '',
    language_proficiency: '',
    banner_image: null,
    course_modules: [],
  });

  // Fetch course data if courseId is provided
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/courses/${courseId}/`);
        if (!response.ok) {
          throw new Error('Course data not found');
        }
        const data = await response.json();
        setCourse(data);
        setFormData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourse();
    } else {
      setLoading(false);
    }
  }, [courseId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.split(','),
    }));
  };

  const handleSave = async () => {
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      let response;
      if (courseId) {
        // Update existing course
        response = await fetch(`${import.meta.env.VITE_API_URL}/courses/${courseId}/`, {
          method: 'PUT',
          body: formDataToSend,
        });
      } else {
        // Create new course
        response = await fetch(`${import.meta.env.VITE_API_URL}/courses/`, {
          method: 'POST',
          body: formDataToSend,
        });
      }

      if (response.ok) {
        const updatedCourse = await response.json();
        onSave(updatedCourse);
        onClose();
      } else {
        throw new Error('Failed to save course data');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAddCourse = () => {
    setCourse(null);
    setFormData({
      degree_type: '',
      name: '',
      slug: '',
      title_1: '',
      description_1: '',
      image_1: null,
      title_2: '',
      description_2: '',
      image_2: null,
      career_opportunities: [],
      study_mode: '',
      credits: 0,
      duration: '',
      recognized_by: '',
      awarded_by: '',
      language_proficiency: '',
      banner_image: null,
      course_modules: [],
    });
  };

  const handleRemoveCourse = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/courses/${courseId}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onClose();
      } else {
        throw new Error('Failed to remove course');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>{course ? `Edit ${course.name}` : 'Add New Course'}</h2>
      <form>
        {/* Degree Type */}
        <input
          type="text"
          name="degree_type"
          value={formData.degree_type}
          onChange={handleInputChange}
          placeholder="Degree Type"
        />
        {/* Other form fields as required */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Course Name"
        />
        {/* Repeat for all other fields... */}
      </form>

      <div className="modal-footer">
        <button onClick={handleSave}>Save</button>
        {course && <button onClick={handleRemoveCourse}>Remove Course</button>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CoursesModal;
