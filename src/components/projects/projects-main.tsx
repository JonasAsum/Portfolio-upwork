  import React, { useState } from 'react';
  import { Project, projects } from './projects-list';
  import ProjectModal from '@/components/projects/projectsModal/projects-modal';
  
  const ProjectsSection: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
    const openProjectModal = (project: Project) => {
      console.log('Opening project modal for:', project.title);
      setSelectedProject(project);
      setModalOpen(true);
    };
  
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 p-4 mt-30">
          {projects.slice(0, 3).map((project, index) => (
            <div 
              key={project.id} 
              id={`projects-individual-${index}`}
              className={`border border-blue-200 p-4 rounded-3xl transition-all duration-300 mt-32 cursor-pointer
                hover:shadow-lg hover:scale-105 transform
                ${index === 0 ? 'md:col-start-1 md:row-start-1' :
                  index === 1 ? 'md:col-start-3 md:row-start-2' :
                  'md:col-start-1 md:row-start-3'}
                ${index === 1 ? 'mt-8 md:mt-0' : ''}
              `}
              onClick={() => openProjectModal(project)}
            >
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm">{project.shortDescription}</p>
              {project.image && (
                <img src={project.image} alt={project.title} className="mt-2 w-full rounded-xl h-auto" />
              )}
            </div>
          ))}
        </div>
        {selectedProject && (
          <ProjectModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            project={selectedProject}
          />
        )}
      </>
    );
  };
  
  export default ProjectsSection;