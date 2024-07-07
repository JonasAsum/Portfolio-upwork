// TrailCalculator.tsx
import React, { useEffect } from 'react';

interface Breakpoint {
  scrollPosition: number;
  pathPercentage: number;
}

interface TrailCalculatorProps {
  containerRef: React.RefObject<HTMLDivElement>;
  breakpoints: Breakpoint[];
  onFillPercentageChange: (percentage: number) => void;
}

const TrailCalculator: React.FC<TrailCalculatorProps> = ({
  containerRef,
  breakpoints,
  onFillPercentageChange,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;
      const windowHeight = window.innerHeight;

      let scrollPercentage = 0;
      if (containerTop < windowHeight && containerBottom > 0) {
        scrollPercentage = Math.min(
          ((windowHeight - containerTop) / (windowHeight + containerRect.height)) * 100,
          100
        );
      } else if (containerBottom <= 0) {
        scrollPercentage = 100;
      }

      let startBreakpoint = breakpoints[0];
      let endBreakpoint = breakpoints[breakpoints.length - 1];

      for (let i = 0; i < breakpoints.length - 1; i++) {
        if (scrollPercentage >= breakpoints[i].scrollPosition && scrollPercentage < breakpoints[i + 1].scrollPosition) {
          startBreakpoint = breakpoints[i];
          endBreakpoint = breakpoints[i + 1];
          break;
        }
      }

      const t = (scrollPercentage - startBreakpoint.scrollPosition) / (endBreakpoint.scrollPosition - startBreakpoint.scrollPosition);
      let interpolatedPercentage = startBreakpoint.pathPercentage + t * (endBreakpoint.pathPercentage - startBreakpoint.pathPercentage);

      interpolatedPercentage = Math.max(0, Math.min(100, interpolatedPercentage));

      onFillPercentageChange(interpolatedPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [breakpoints, containerRef, onFillPercentageChange]);

  return null; // This component doesn't render anything
};

export default TrailCalculator;