import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects, Project } from './hero-projects';
import ProjectModal from '@/components/projects-modal/projects-modal';

const ProjectSlider: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <div className="w-full py-8">
      <h2 className="text-2xl font-bold mb-6 text-white">My Projects</h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {projects.map((project: Project) => (
            <CarouselItem key={project.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div 
                className="p-1 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                  <div className="aspect-w-16 aspect-h-9">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                  </div>
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    {project.languages.slice(0, 3).map((lang, i) => (
                      <span
                        key={i}
                        className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-lg truncate">{project.title}</h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {selectedProject && (
        <ProjectModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default ProjectSlider;