// AboutMeSection.tsx
import React from 'react';

interface AboutMeSectionProps {
  titleRef: React.RefObject<HTMLHeadingElement>;
  textBoxRef: React.RefObject<HTMLDivElement>;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ titleRef, textBoxRef }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-8 text-white z-20">
      <div>
        <h2 ref={titleRef} className="text-4xl font-bold mb-12 ml-8 mt-8">About Me</h2>
      </div>
      <div className="flex justify-end mb-16">
        <div ref={textBoxRef} className="bg-purple-800 bg-opacity-50 p-6 rounded-lg max-w-md ml-8">
          <p className="mb-4">Hi, I'm Jonas, a Front-End Developer specializing in React and TailwindCSS.</p>
          <p className="mb-4">I've worked on many projects, including an AI Automation Tool for eBay. User experience is my top priority.</p>
          <p className="mb-4">I have a strong focus on creating intuitive and high-performing web applications.</p>
          <p>Though I'm a full-stack developer, my strength lies in frontend development. I'm eager to bring my skills to a team that values innovation and user-centered design.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;