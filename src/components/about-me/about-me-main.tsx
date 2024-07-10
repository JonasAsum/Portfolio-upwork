import React from 'react';

const AboutMeSection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-64">
      <div>
        <h2 id="about-me-title" className="text-4xl font-bold mb-12">About Me</h2>
      </div>
      <div className="flex justify-end mb-16">
        <div id="about-me-content" className="bg-opacity-50 p-6 max-w-md ml-8 sm:ml-0 rounded-3xl">
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