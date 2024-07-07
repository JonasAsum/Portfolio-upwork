import React, { useRef, useState } from 'react';
import HeroSection from '../components/hero/hero-main';
import AboutMeSection from '@/components/about-me/about-me-main';
import { TrailRenderer } from 'trail-renderer-library';

// Define the Point interface locally
interface Point {
  x: number;
  y: number;
}

function App() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textBoxRef = useRef<HTMLDivElement>(null);
  
  const [startPoint, setStartPoint] = useState<Point>({ x: 0.1, y: 0.1 });
  const [endPoint, setEndPoint] = useState<Point>({ x: 0.9, y: 0.9 });

  return (
    <div className="w-full">
      <HeroSection />
      <div className='relative h-screen bg-blue-900'>
        <div className='max-w-screen-xl mx-auto relative h-screen bg-red-500 '>


        <TrailRenderer
          startPoint={startPoint}
          endPoint={endPoint}
          width={2}
          color="orange"
        />
        
        <AboutMeSection titleRef={titleRef} textBoxRef={textBoxRef} />
        </div>
      </div>
    </div>
  );
}

export default App;