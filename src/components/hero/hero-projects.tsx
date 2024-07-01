// hero-projects.tsx

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
  
  export const projects: Project[] = [
    { 
      id: 1, 
      title: 'E-Commerce Dashboard', 
      description: 'A comprehensive dashboard for managing online store operations, including inventory, orders, and customer data.',
      languages: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      image: '/images/myEbaiDashboard.png',
      gallery: [
        '/images/ecommerce-dashboard-1.png',
        '/images/ecommerce-dashboard-2.png',
        '/images/ecommerce-dashboard-3.png'
      ],
      demoLink: 'https://demo-ecommerce-dashboard.example.com',
      githubLink: 'https://github.com/yourusername/ecommerce-dashboard'
    },
    { 
      id: 2, 
      title: 'Weather Forecast App', 
      description: 'A mobile-friendly weather application providing real-time forecasts, radar maps, and severe weather alerts.',
      languages: ['Vue.js', 'JavaScript', 'Express', 'OpenWeatherMap API'],
      image: '/images/myEbaiDashboard.png',
      gallery: [
        '/images/weather-app-1.png',
        '/images/weather-app-2.png',
        '/images/weather-app-3.png'
      ],
      demoLink: 'https://weather-forecast-demo.example.com'
    },
    { 
      id: 3, 
      title: 'Task Management System', 
      description: 'A collaborative project management tool with features like task assignment, progress tracking, and team communication.',
      languages: ['Angular', 'TypeScript', 'Python', 'Django', 'PostgreSQL'],
      image: '/images/myEbaiDashboard.png',
      gallery: [
        '/images/task-management-1.png',
        '/images/task-management-2.png',
        '/images/task-management-3.png'
      ],
      demoLink: 'https://task-management-demo.example.com',
      githubLink: 'https://github.com/yourusername/task-management-system'
    },
    { 
      id: 4, 
      title: 'Fitness Tracking Mobile App', 
      description: 'A cross-platform mobile application for tracking workouts, nutrition, and health metrics with social sharing features.',
      languages: ['React Native', 'JavaScript', 'Firebase', 'Redux'],
      image: '/images/myEbaiDashboard.png',
      gallery: [
        '/images/fitness-app-1.png',
        '/images/fitness-app-2.png',
        '/images/fitness-app-3.png'
      ],
      demoLink: 'https://fitness-tracker-demo.example.com'
    },
    // Add more projects as needed
  ];