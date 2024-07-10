export interface Skill {
    name: string;
  }
  
  export interface SkillCategory {
    title: string;
    skills: Skill[];
  }
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "React" },
        { name: "TailwindCSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Next.js" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "Python (Django/Flask)" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git" },
        { name: "Azure & Cloud" },
        { name: "Postman" },
        { name: "SEO Best Practices" },
        { name: "Performance Optimization" },
      ]
    }
  ];
  
  export default skillCategories;