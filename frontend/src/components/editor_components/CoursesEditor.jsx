import React, { useState } from 'react';
import CoursesModal from './editor_modals/courses_modals/CoursesModal'; // Correct import path for the modal
import Courses from '../../pages/Courses';

const CoursesEditor = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex gap-20 items-center justify-between p-20">
      <div className="flex flex-col gap-10">
        {/* Button to trigger Modal */}
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Courses</button>

        {/* Courses Modal */}
        <CoursesModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>

      {/* Mockup Browser Section */}
      <div className="mockup-browser bg-white border-8 border-black p-2 h-[700px] overflow-y-scroll">
        <div className="">
          <div className="mockup-browser-toolbar m-10">
            <div className="input">https://sample-website.com</div>
          </div>
          <div className="overflow-scroll">
            {/* Display the Courses component */}
            <Courses />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesEditor;
