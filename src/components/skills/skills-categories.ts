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
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "MongoDB" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git" },
        { name: "Docker" },
        { name: "VS Code" },
      ]
    }
  ];
  
  export default skillCategories;