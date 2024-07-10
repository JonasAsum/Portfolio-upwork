import React, { useRef } from 'react';
import Navbar from '../components/navbar'; // Make sure this path is correct
import HeroSection from '../components/hero/hero-main';
import AboutMeSection from '@/components/about-me/about-me-main';
import SkillsSection from '@/components/skills/skills-main';
import SvgPath from '../components/trail/svg-path';
import ProjectsSection from '../components/projects/projects-main';
import ContactSection from '@/components/contact/contact-main';
import { useTrailLogic } from '../components/trail/trailFollow/use-trail-logic';

const MemoizedSvgPath = React.memo(SvgPath);

function App() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { dotElements, renderedPaths, scrollPercentage, updatePositions } = useTrailLogic(sectionRef, containerRef);

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <div 
        className='relative min-h-screen' // Added pt-16 for navbar spacing
        id='container' 
        ref={containerRef}
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor:'#1100FF',
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/images/1080x2560_upscaled.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            mixBlendMode: 'normal',
            opacity: 0.8,
          }}
        ></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div ref={sectionRef} className='max-w-screen-xl mx-auto relative px-4 sm:px-6 lg:px-8 text-white'>
            <section id="about" className="min-h-screen"><AboutMeSection /></section>
            <section id="skills" className="min-h-screen"><SkillsSection /></section>
            <section id="projects" className="min-h-screen"><ProjectsSection /></section>
            <section id="contact" className="min-h-screen"><ContactSection scrollPercentage={scrollPercentage} /></section>
          </div>
          
          {renderedPaths.map((pathProps) => (
            <MemoizedSvgPath 
              key={pathProps.id} 
              {...pathProps} 
              containerRef={containerRef} 
            />
          ))}

          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {dotElements}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;