import React from 'react';
import ProjectSlider from './hero-project-slider';
import StarryMouseTrail from './StarryMouseTrail';

const HeroSection: React.FC = () => {
  return (
    <header className="relative bg-[#040040] text-white py-12">
                <StarryMouseTrail excludeSelector=".project-slider" />
      <div className="max-w-7xl mx-auto px-4 relative">

        <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative z-10">
          <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Jonas Asum</h2>
            <h3 className="text-2xl md:text-3xl mb-4">Fullstack Developer</h3>
            <p className="mb-6 max-w-md">
              I am Jonas,<br />
              a Software Developer that<br />
              specializes on User Experience
            </p>
            <div className="space-x-4">
              <button className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300">Contact Me</button>
              <button className="bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#040040] transition-colors duration-300">Links</button>
            </div>
          </div>
          <div className="w-64 h-64 bg-yellow-400 rounded-full overflow-hidden md:w-1/3">
            {/* Replace with actual image */}
            <div className="w-full h-full bg-gray-300"></div>
          </div>
        </div>
        
        {/* Project Slider Section */}
        <div className="project-slider relative z-10">
          <ProjectSlider />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;