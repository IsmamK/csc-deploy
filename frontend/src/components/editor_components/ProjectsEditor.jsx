import React, { useEffect, useState } from 'react';
import Projects from '../../pages/Projects'; // Adjust the import according to your folder structure
import ProjectsModal from './editor_modals/projects_modals.jsx/ProjectsModal';
import PartnerCarouselModal from './editor_modals/projects_modals.jsx/PartnerCarouselModal';

// Mock data for projects 
const mockProjects = [
  {
  },
];

const ProjectsEditor = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPartnerCarouselOpen, setPartnerCarouselOpen] = useState(false);

  useEffect(() => {
    setProjects(mockProjects);  // Call the API here
  }, []);

  return (
    <div className='flex gap-20 items-center justify-between p-20'>
      
      <div className='flex flex-col gap-10'>
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Projects</button>
        {/* Projects Modal */}
       
        <ProjectsModal
          isOpen={isModalOpen} 
          onClose={() => setModalOpen(false)} 
          projects={projects} 
          setProjects={setProjects} 
        />

<button className="btn btn-primary w-20 m-2" onClick={() => setPartnerCarouselOpen(true)}>Partner Carousel</button>
{/* Projects Modal */}
       
<PartnerCarouselModal isOpen={isPartnerCarouselOpen} onClose={() => setPartnerCarouselOpen(false)} />

        
      </div>

      

      {/* Mockup Browser Section */}
      <div className="mockup-browser bg-white border-8 border-black p-2 h-[700px] overflow-y-scroll">
        <div className=''>
          <div className="mockup-browser-toolbar m-10">
            <div className="input">https://sample-website.com</div>
          </div>
          <div className='overflow-scroll'>
            {/* Pass the projects data to the Projects component */}
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsEditor;
