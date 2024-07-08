import React, { useRef, useState, useEffect } from 'react';
import SvgPath from '../trail/svg-path';



const AboutMeSection = () => {



  return (
    <div className="relative min-h-screen bg-dark-blue text-white overflow-hidden">
      {/* SVG Path in the background */}
      {/* <div className="absolute inset-0 z-0">
        <SvgPath
          width={sectionSize.width}
          height={sectionSize.height}
          dot1={{ x: 120, y: 85 }}
          dot2={{ x: 800, y: 350}}
          pathColor="blue"
          pathWidth={2}
          trailColor="orange"
          pathType='curve'
        />
      </div> */}
      
      {/* Content in the foreground */}
      <div className="relative z-10 flex flex-col justify-between p-8">
        <div>
          <h2 className="text-4xl font-bold mb-12 ml-8 mt-8">About Me</h2>
        </div>
        <div className="flex justify-end mb-16">
          <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg max-w-md ml-8">
            <p className="mb-4">Hi, I'm Jonas, a Front-End Developer specializing in React and TailwindCSS.</p>
            <p className="mb-4">I've worked on many projects, including an AI Automation Tool for eBay. User experience is my top priority.</p>
            <p className="mb-4">I have a strong focus on creating intuitive and high-performing web applications.</p>
            <p>Though I'm a full-stack developer, my strength lies in frontend development. I'm eager to bring my skills to a team that values innovation and user-centered design.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;



