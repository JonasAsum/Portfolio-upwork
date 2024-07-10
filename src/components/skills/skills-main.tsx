import React, { useRef, useState, useEffect } from 'react';
import SvgPath from '../trail/svg-path';
import skillCategories, { SkillCategory , Skill } from './skills-categories';


interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  id:string;
  index: number ;
}


const SkillCategoryComponent: React.FC<SkillCategoryProps> = ({ title, skills ,index }) => (
  <div id={`skills-individual-${index}`} className="bg-purple-800 bg-opacity-50 p-6  pb-12 rounded-3xl">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index}>{skill.name}</li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  return (
    <div>
      <div className="relative z-10 p-8 pt-32">
        <h2 id="skills-title" className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-24">
          {skillCategories.map((category: SkillCategory, index: number) => (
            <SkillCategoryComponent key={index} title={category.title} id={`skills-individual-${index}`} index={index} skills={category.skills} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;