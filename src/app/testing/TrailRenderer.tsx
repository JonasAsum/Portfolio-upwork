import React, { useState, useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

interface TrailRendererProps {
  startPoint: Point;
  endPoint: Point;
  width?: number;
  color?: string;
}

const TrailRenderer: React.FC<TrailRendererProps> = ({
  startPoint,
  endPoint,
  width = 2,
  color = 'green'
}) => {
  const [path, setPath] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const updateSvgDimensions = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setSvgDimensions({ width: rect.width, height: rect.height });
    }
  };

  useEffect(() => {
    updateSvgDimensions();
    window.addEventListener('resize', updateSvgDimensions);
    return () => window.removeEventListener('resize', updateSvgDimensions);
  }, []);

  useEffect(() => {
    const start = {
      x: startPoint.x * svgDimensions.width,
      y: startPoint.y * svgDimensions.height
    };
    const end = {
      x: endPoint.x * svgDimensions.width,
      y: endPoint.y * svgDimensions.height
    };

    const newPath = `M${start.x},${start.y} L${end.x},${end.y}`;
    setPath(newPath);
  }, [startPoint, endPoint, svgDimensions]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <path d={path} fill="none" stroke={color} strokeWidth={width} />
      </svg>
    </div>
  );
};

export default TrailRenderer;