export interface Project {
    id: number;
    title: string;
    description: string;
    languages: string[];
    image: string;
    gallery: string[];
    demoLink?: string;
    githubLink?: string;
  }


export  interface Dot {
    x: number;
    y: number;
  }
  