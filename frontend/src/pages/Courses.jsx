import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL; // Get API URL from environment variables

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_URL}/courses/`);
        const data = await response.json();

        // Check if data is an array
        if (Array.isArray(data)) {
          // Organize courses by degree_type
          const groupedCourses = data.reduce((acc, course) => {
            const degreeType = course.degree_type || "Others";
            if (!acc[degreeType]) {
              acc[degreeType] = [];
            }
            acc[degreeType].push(course);
            return acc;
          }, {});

          setCourses(groupedCourses);
        } else {
          console.error("Invalid data format:", data);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchCourses();
  }, [API_URL]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-6">
          <h2 className="text-6xl font-bold text-gray-900 leading-tight">Courses We Offer</h2>
          <p className="text-lg font-normal text-gray-500">We provide a variety of programs tailored to your career goals.</p>
        </div>

        {Object.keys(courses).map((degreeType) => (
          <div key={degreeType} className="mb-16 p-10">
            <h3 className="text-5xl font-semibold mb-8 text-gray-800 capitalize">{degreeType}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses[degreeType].map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  state={{ course }} 
                  className="group relative w-56 h-56 bg-[#cd993f] text-black rounded-2xl border border-gray-200 p-5 transition-all duration-500"
                >
                  <div className="bg-white group-hover:bg-white rounded-full flex justify-center items-center mb-5 w-10 h-10">
                    <span className="text-xl font-bold text-#cd993f">🎓</span>
                  </div>
                  <h4 className="text-md font-semibold mb-3 capitalize transition-all duration-500 group-hover:text-white">
                    {course.name}
                  </h4>
                  <p className="text-lg font-normal transition-all duration-500 leading-5 group-hover:text-white">{course.specialization}</p>
                  {/* <p className="text-sm font-normal transition-all duration-500 leading-5 group-hover:text-white mt-6">
                    Offered by: <br className=""></br> <span className="font-bold text-xl my-2">{course.awarded_by}</span>
                  </p> */}
                  <p className="text-sm font-normal transition-all duration-500 leading-5 group-hover:text-white mt-2">
                    Duration: <span className="font-bold text-sm">{course.duration}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
