import React from 'react';
import ProjectSlider from './hero-project-slider';

const HeroSection: React.FC = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <header className="relative bg-[#040040] text-white pb-24 pt-36 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 relative w-full">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 relative z-10">
          <div className="text-center md:text-left mb-12 md:mb-0 md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Jonas Asum</h2>
            <h3 className="text-3xl md:text-4xl mb-6">Fullstack Developer</h3>
            <p className="mb-8 text-xl">
              I am Jonas,<br />
              a Software Developer that<br />
              specializes on User Experience
            </p>
            <div className="space-x-6">
              <button 
                onClick={scrollToBottom}
                className="bg-purple-600 px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 text-lg"
              >
                Contact Me
              </button>
              <a 
                href="https://www.upwork.com/freelancers/~01f6af47125470933b?mp_source=share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-transparent border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-[#040040] transition-colors duration-300 text-lg"
              >
                My Upwork
              </a>
            </div>
          </div>
          <div className="w-80 h-80 bg-yellow-400 rounded-full overflow-hidden md:w-2/5">
            <img
              src="/images/MeMyself.png"
              alt="Jonas Asum"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        {/* Project Slider Section */}
        <div className="project-slider relative z-10 mt-16">
          <ProjectSlider />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;