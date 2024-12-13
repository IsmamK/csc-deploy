import React, { useEffect, useState } from 'react';
import Projects from '../../pages/Projects'; // Adjust the import according to your folder structure
import B2B from '../../pages/B2B';
import B2BModal from './editor_modals/b2b_modals/B2BModal';

// Mock data for projects 
const mockProjects = [
  {
  },
];

const B2BEditor = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setProjects(mockProjects);  // Call the API here
  }, []);

  return (
    <div className='flex gap-20 items-center justify-between p-20'>
      
      <div className='flex flex-col gap-10'>
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>B2B</button>
        {/* Projects Modal */}
       
        <B2BModal
          isOpen={isModalOpen} 
          onClose={() => setModalOpen(false)} 
   
          setProjects={setProjects} 
        />


       

        
      </div>

      

      {/* Mockup Browser Section */}
      <div className="mockup-browser bg-white border-8 border-black p-2 h-[700px] overflow-y-scroll">
        <div className=''>
          <div className="mockup-browser-toolbar m-10">
            <div className="input">https://sample-website.com</div>
          </div>
          <div className='overflow-scroll'>
            {/* Pass the projects data to the Projects component */}
            <B2B />
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2BEditor;
