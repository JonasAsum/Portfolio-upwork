import React, { useRef, useState, useEffect } from 'react';
import SvgPath from '../trail/svg-path';

interface Point {
  x: number;
  y: number;
}

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  trailStart: Point;
  trailEnd: Point;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index}>{skill.name}</li>
      ))}
    </ul>
  </div>
);

const SkillsSection: React.FC<SkillsSectionProps> = ({ trailStart, trailEnd }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionSize, setSectionSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (sectionRef.current) {
        const { width, height } = sectionRef.current.getBoundingClientRect();
        setSectionSize({ width, height });
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

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

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-dark-blue text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
      {/* <SvgPath
          width={sectionSize.width}
          height={sectionSize.height}
          dot1={{ x: 120, y: 85 }}
          dot2={{ x: sectionSize.width - 480, y: sectionSize.height - 650 }}
          pathColor="blue"
          pathWidth={2}
          trailColor="orange"
          pathType='curve'
        /> */}
      </div>
      <div className="relative z-10 p-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;