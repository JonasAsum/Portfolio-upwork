import React, { useState, useEffect, useRef } from 'react';
import { getPathD } from './trail-utils';

interface Dot {
  x: number;
  y: number;
}

interface SvgPathProps {
  width: number;
  height: number;
  dot1: Dot;
  dot2: Dot;
  pathType: 'curve' | 'zigzag' | 'wave' | 'straight';
}

const SvgPath: React.FC<SvgPathProps> = ({
  width,
  height,
  dot1,
  dot2,
  pathType
}) => {
  const [trailLength, setTrailLength] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);

  // Default values
  const pathColor = 'blue';
  const pathWidth = 2;
  const trailColor = 'orange';

  const pathD = getPathD(pathType, dot1, dot2, width, height);

  useEffect(() => {
    const handleScroll = () => {
      if (pathRef.current) {
        const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const pathLength = pathRef.current.getTotalLength();
        setTrailLength(pathLength * scrollPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <svg className="absolute inset-0" width={width} height={height}>
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
        stroke={trailColor}
        strokeWidth={pathWidth}
        strokeDasharray={`${trailLength} ${Number.MAX_VALUE}`}
      />
    </svg>
  );
};

export default SvgPath;