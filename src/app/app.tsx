import React, { useRef, useState, useEffect } from 'react';
import HeroSection from '../components/hero/hero-main';
import AboutMeSection from '@/components/about-me/about-me-main';
import SkillsSection from '@/components/skills/skills-main';
import SvgPath from '../components/trail/svg-path';
import { trails } from '../components/trail/trail-config';

// Define the Point interface locally
interface Point {
  x: number;
  y: number;
}

function App() {
  const [sectionSize, setSectionSize] = useState({ width: 0, height: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

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

  console.log(sectionSize);

  return (
    <div className="w-full">
      <HeroSection />
      <div className='relative bg-blue-900'>
        <div ref={sectionRef} className='max-w-screen-xl mx-auto relative h-screen'>
          {/* <AboutMeSection /> */}
          {/* <SkillsSection  /> */}
          
          {/* Example usage of SvgPath */}
          <SvgPath
            width={sectionSize.width}
            height={sectionSize.height}
            {...trails.trail1}
          />
        </div>
      </div>
    </div>
  );
}

export default App;