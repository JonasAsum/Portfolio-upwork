// ResponsiveTrailEffect.tsx
import React, { useState, useEffect, useRef } from 'react';
import TrailCalculator from './trail-screen-calc';

interface Breakpoint {
  scrollPosition: number;
  pathPercentage: number;
}

interface ResponsiveTrailEffectProps {
  width?: number;
  color?: string;
  breakpoints: Breakpoint[];
  titleRef: React.RefObject<HTMLHeadingElement>;
  textBoxRef: React.RefObject<HTMLDivElement>;
}

const ResponsiveTrailEffect: React.FC<ResponsiveTrailEffectProps> = ({
  width = 2,
  color = 'orange',
  breakpoints,
  titleRef,
  textBoxRef,
}) => {
  const [pathLength, setPathLength] = useState(0);
  const [fillPercentage, setFillPercentage] = useState(0);
  const [path, setPath] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const calculatePositions = () => {
    if (svgRef.current && titleRef.current && textBoxRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const titleRect = titleRef.current.getBoundingClientRect();
      const textBoxRect = textBoxRef.current.getBoundingClientRect();

      return {
        startX: titleRect.left - svgRect.left + titleRect.width,
        startY: titleRect.top - svgRect.top + titleRect.height / 2,
        endX: textBoxRect.left - svgRect.left,
        endY: textBoxRect.top - svgRect.top + textBoxRect.height / 2
      };
    }
    return null;
  };

  const updatePath = () => {
    const positions = calculatePositions();
    if (positions) {
      const { startX, startY, endX, endY } = positions;
      return `M${startX},${startY} Q${(startX + endX) / 2},${startY} ${endX},${endY}`;
    }
    return '';
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const newPath = updatePath();
      setPath(newPath);
      if (pathRef.current) {
        setPathLength(pathRef.current.getTotalLength());
      }
    });

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <TrailCalculator
        containerRef={containerRef}
        breakpoints={breakpoints}
        onFillPercentageChange={setFillPercentage}
      />
      <svg 
        ref={svgRef} 
        className="w-full h-full" 
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d={path}
          fill="none"
          stroke="white"
          strokeWidth={width}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth={width}
          strokeDasharray={pathLength}
          strokeDashoffset={Math.max(0, pathLength - (pathLength * fillPercentage / 100) - 1)}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

export default ResponsiveTrailEffect;