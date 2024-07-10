// src/components/ProjectModal.tsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from '../../types';
import ProjectCarousel from './projects-modal-carousel';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] bg-gray-900 text-gray-100 border-purple-500">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 space-y-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-purple-300">{project.title}</DialogTitle>
              <DialogDescription className="text-gray-300">
                {project.description}
              </DialogDescription>
            </DialogHeader>
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang, index) => (
                  <span key={index} className="bg-purple-900 text-purple-100 text-xs font-medium px-2.5 py-1 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  View Demo
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <ProjectCarousel images={project.gallery} title={project.title} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;