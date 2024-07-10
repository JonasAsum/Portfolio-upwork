import React, { useEffect, useRef, useState } from 'react';
import { getPathD } from './utils/trail-utils';
import { SvgPathProps, Project, Dot } from '../types';

interface FlexibleSvgPathProps extends SvgPathProps {
  activationStart: number;
  activationEnd: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const SvgPath: React.FC<FlexibleSvgPathProps> = ({
  width,
  height,
  dot1,
  dot2,
  pathType,
  corner,
  activationStart,
  activationEnd,
  id,
  containerRef,
}) => {
  const pathColor = 'invisible';
  const followPathColor = 'orange';
  const pathWidth = 2;
  const [followLength, setFollowLength] = useState(0);
  const [debugInfo, setDebugInfo] = useState({ scrollPercentage: 0, isActive: false });
  const pathRef = useRef<SVGPathElement>(null);

  const pathD = getPathD(pathType, dot1, dot2, corner);

  useEffect(() => {
    const handleScroll = () => {
      if (pathRef.current && containerRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        const containerRect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Calculate the scroll percentage based on the container's position and height
        const containerTop = containerRect.top + scrollTop;
        const containerBottom = containerTop + containerRect.height;
        const viewportBottom = scrollTop + windowHeight;
        
        // This allows scrollPercentage to go beyond 1
        const scrollPercentage = (viewportBottom - containerTop) / containerRect.height;
        
        let newFollowLength = 0;
        let isActive = false;

        // Calculate progress without clamping
        const progress = (scrollPercentage - activationStart) / (activationEnd - activationStart);
        newFollowLength = Math.max(0, Math.min(pathLength, pathLength * progress));
        isActive = progress > 0 && progress < 1;

        setFollowLength(newFollowLength);
        setDebugInfo({ scrollPercentage, isActive });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activationStart, activationEnd, containerRef]);

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={width}
      height={height}
      style= {{
        zIndex:-1000
      }} // Apply the style here
    >
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke={pathColor}
        strokeWidth={pathWidth}
      />
      <path
        d={pathD}
        fill="none"
        stroke={followPathColor}
        strokeWidth={pathWidth}
        strokeDasharray={`${followLength} ${Number.MAX_VALUE}`}
      />
    </svg>
  );
};

export default SvgPath;