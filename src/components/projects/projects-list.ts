// hero-projects.tsx

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string; // New field for brief overview
  languages: string[];
  image: string;
  gallery: string[];
  demoLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  { 
    id: 1, 
    title: 'Automated Inventory Management System', 
    shortDescription: 'Developed an automated inventory system for a major retail client, using React, TypeScript, and Node.js.',
    description: 'At Blackbook AI, I contributed to developing an automated inventory management system for a major retail client. This system streamlined inventory tracking, reducing manual effort and minimizing errors. I created the user interface using React with TypeScript and Material-UI for a clean, type-safe, and responsive design. I ensured smooth data integration and real-time updates with Node.js and Express, leveraging TypeScript for enhanced code reliability.',
    languages: ['React', 'TypeScript',  'Express', 'Material-UI', 'Node.js', 'RESTful APIs'],
    image: '/images/inventory-management.png',
    gallery: [
      '/images/inventory-1.png',
    ],
  },
  { 
    id: 2, 
    title: 'myEbai - Automated eBay Listing Tool', 
    shortDescription: 'Built an automated eBay listing tool with React, TypeScript, and Azure, integrating AI for image analysis and description generation.',
    description: 'I developed myEbai, an automated listing tool for eBay sellers, handling everything from planning to full stack development. I created a user-friendly interface with React and TypeScript, styled with Tailwind CSS for rapid development. The server-side logic was implemented using Node.js and Express with TypeScript, integrating eBay\'s API. Hosted on Azure, the tool uses trained AI models for tasks like image analysis, description generation, and title structuring, all built with type-safe code.',
    languages: ['React', 'Azure', 'AI/ML', 'TypeScript',  'Tailwind CSS', 'Node.js', 'Express', 'eBay API'],
    image: '/images/myEbai/myEbaiDashboard.png',
    gallery: [
      '/images/myEbai/myEbaiDashboard.png',
      '/images/myEbai/listingsection.png',
      '/images/myEbai/modalsection.png',
      '/images/myEbai/ebay-discribtion.png',
      '/images/myEbai/ebay-pics.png',
    ],
    demoLink: 'https://www.myebai.com',
  },
  { 
    id: 3, 
    title: 'Personal Portfolio Website', 
    shortDescription: 'Designed and developed a personal portfolio website using React, TypeScript, and Tailwind CSS, featuring responsive design and smooth animations.',
    description: 'I designed and developed my personal portfolio website, showcasing my projects and skills. The site features a responsive design, smooth animations, and a unique SVG path that adapts to different screen sizes. I implemented the frontend using React with TypeScript for type safety and Tailwind CSS for styling. The Node.js backend, also written in TypeScript, handles contact form submissions and project data management, ensuring a fully type-safe application from front to back.',
    languages: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'SVG', 'Responsive Design'],
    image: '/images/portfolio-preview.png',
    gallery: [
      '/images/portfolio-1.png',
      '/images/portfolio-2.png',
      '/images/portfolio-3.png'
    ],
    githubLink: 'https://github.com/JonasAsum/Portfolio-upwork.git'
  }
];