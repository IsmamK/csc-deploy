import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CourseDetail = () => {
    const [courseData, setCourseData] = useState({
        id: null,
        degree_type: null,
        name: null,
        slug: null,
        title_1: null,
        description_1: null,
        image_1: null,
        title_2: null,
        description_2: null,
        image_2: null,
        career_opportunities: [],
        study_mode: null,
        credits: null,
        duration: null,
        recognized_by: null,
        awarded_by: null,
        language_proficiency: null,
        banner_image: null,
        course_modules: [
           
        ]
    });

    const [loading, setLoading] = useState(false);
    const [courseModules,setCourseModules] = useState([
        {
            year: 'Year 1',
            courses: []
        },
        {
            year: 'Year 2',
            courses: []
        },
        {
            year: 'Year 3',
            courses: []
        }
    ])
     // Access the passed course object
    const { id } = useParams();
    const API_URL = import.meta.env.VITE_API_URL;
    
    useEffect(() => {
    
            fetch(`${API_URL}/courses/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setCourseData(data);
                    console.log(courseData)
                    setCourseModules(data.course_modules.course_modules);

                    });
                    
    }, [ ]);

    
    console.log(courseModules)
    
    return (
        <div className="bg-gray-50 font-sans">
            {/* Banner Section */}
            <div
                className="relative w-full h-72 sm:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${courseData.banner_image})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-white text-center pt-20 px-6 sm:px-12">
                    <h1 className="text-3xl sm:text-4xl font-semibold mt-4">{courseData.name}</h1>
                    <p className="text-lg sm:text-xl mt-2">{courseData.awarded_by}</p>
                </div>
            </div>

            {/* Course Info Section */}
            <div className="max-w-7xl mx-auto p-8 sm:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold mb-4">Study Mode</h2>
                        <p className="text-lg">{courseData.study_mode}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold mb-4">Credits</h2>
                        <p className="text-lg">{courseData.credits}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold mb-4">Course Duration</h2>
                        <p className="text-lg">{courseData.duration}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold mb-4">Recognised by</h2>
                        <p className="text-lg">{courseData.recognized_by}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold mb-4">Degree Awarded</h2>
                        <p className="text-lg">{courseData.name}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold mb-4">Language Proficiency</h2>
                        <p className="text-lg">{courseData.language_proficiency}</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6"> {courseData.title_1}</h2>
                    <p className="text-lg sm:text-xl leading-relaxed mb-4">
                        {courseData.description_1}
                    </p>
                </div>

                {/* Course Overview Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6">{courseData.title_2}</h2>
                    <p className="text-lg sm:text-xl leading-relaxed mb-4">
                        {courseData.description_2}
                    </p>
                </div>

                {/* Course Modules Section */}
                <div className="mt-12">
    <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Course Modules</h2>
    {courseModules && courseModules.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                >
                    <h3 className="text-xl font-semibold mb-4">{module.year}</h3>
                    <ul className="list-disc pl-6 text-lg space-y-2">
                        {module.courses.map((course, i) => (
                            <li key={i}>{course}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    ) : (
        <p>No course modules available.</p>
    )}
</div>



            </div>
        </div>
    );
};

export default CourseDetail;
