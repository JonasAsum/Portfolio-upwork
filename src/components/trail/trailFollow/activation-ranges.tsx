import { PathObject } from '../../types';

export interface ActivationRange {
  start: number;
  end: number;
}

export interface ActivationRangeConfig {
  [key: string]: ActivationRange;
}

// Define your activation ranges here
export const activationRanges: ActivationRangeConfig = {
    pathEntry: { start: 0.0, end: 0.15 },
    aboutMeTitle: { start: 0.17, end: 0.23 },
    aboutMeContent: { start: 0.25, end: 0.28},
    skillsEntry: { start: 0.3, end: 0.38 },
    skillsContent: { start: 0.4, end: 0.42 },
    skillsIndividual: { start: 0.44, end: 0.48 },
    skillsExit: { start: 0.5, end: 0.55 },
    projectsConnect1: { start: 0.55, end: 0.65 },
    projectsConnect2: { start: 0.65, end: 0.74 },
    projectsConnect3: { start: 0.74, end: 0.88 },
    pathContact : { start: 0.88, end: 1.0 }
  };

// Function to get the activation range for a specific path
export const getActivationRange = (path: PathObject): ActivationRange => {
  if (path.id === 'path-about-me-content-1') {
    return activationRanges.aboutMeTitle;
  } else if (path.id.startsWith('path-about-me-content-') && path.id !== 'path-about-me-content-1') {
    return activationRanges.aboutMeContent;
  } else if (path.id === 'path-skills-entry-1' || path.id === 'path-skills-connect-1') {
    return activationRanges.skillsEntry;
  } else if (path.id.startsWith('path-skills-content')) {
    return activationRanges.skillsContent;
  } else if (path.id.startsWith('path-skills-individual')) {
    return activationRanges.skillsIndividual;
  } else if (path.id.startsWith('path-skills-exit')) {
    return activationRanges.skillsExit;
  } else if (path.id.startsWith('path-projects-connect-1')) {
    return activationRanges.projectsConnect1;
  } else if (path.id.startsWith('path-projects-connect-2')) {
    return activationRanges.projectsConnect2;
  } else if (path.id.startsWith('path-projects-connect-3')) {
    return activationRanges.projectsConnect3;
  } else if (path.id.startsWith('path-contact-')) {
    return activationRanges.pathContact;
  } else if (path.id === 'path-entry-container') {
    return activationRanges.pathEntry;
  }
  return { start: 0, end: 1 }; // Default range 
};

// Function to add a new activation range 
export const addActivationRange = (key: string, range: ActivationRange) => {
  activationRanges[key] = range;
};

// Function to update an existing activation range
export const updateActivationRange = (key: string, range: Partial<ActivationRange>) => {
  if (activationRanges[key]) {
    activationRanges[key] = { ...activationRanges[key], ...range };
  }
};

// Function to remove an activation range
export const removeActivationRange = (key: string) => {
  delete activationRanges[key];
};