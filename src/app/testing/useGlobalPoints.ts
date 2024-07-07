// src/hooks/useGlobalPoints.ts
import { useState, useEffect } from 'react';

export interface Point {
  x: number;
  y: number;
}

interface ScreenSizeConfig {
  [key: string]: {
    min: number;
    max: number;
  };
}

const screenSizes: ScreenSizeConfig = {
  small: { min: 0, max: 640 },
  medium: { min: 641, max: 1024 },
  large: { min: 1025, max: Infinity },
};

export interface GlobalPoints {
  [key: string]: {
    [size: string]: Point;
  };
}

export const useGlobalPoints = () => {
  const [initialGlobalPoints, setInitialGlobalPoints] = useState<GlobalPoints>({
    startPoint: {
      small: { x: 0.1, y: 0.1 },
      medium: { x: 0.2, y: 0.2 },
      large: { x: 0.5, y: 0 },
    },
    endPoint: {
      small: { x: 0.9, y: 0.9 },
      medium: { x: 0.8, y: 0.8 },
      large: { x: 0.75, y: 0.9 },
    },
  });

  const [globalPoints, setGlobalPoints] = useState<GlobalPoints>(initialGlobalPoints);
  const [currentScreenSize, setCurrentScreenSize] = useState<string>('medium');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSize = 'medium';
      for (const [size, { min, max }] of Object.entries(screenSizes)) {
        if (width >= min && width <= max) {
          newSize = size;
          break;
        }
      }
      setCurrentScreenSize(newSize);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updatePoint = (pointName: string, size: string, newPoint: Point) => {
    setGlobalPoints(prevPoints => ({
      ...prevPoints,
      [pointName]: {
        ...prevPoints[pointName],
        [size]: newPoint,
      },
    }));
  };

  const getPoint = (pointName: string): Point => {
    return globalPoints[pointName][currentScreenSize];
  };

  const setInitialPoints = (newInitialPoints: GlobalPoints) => {
    setInitialGlobalPoints(newInitialPoints);
    setGlobalPoints(newInitialPoints);
  };

  return { globalPoints, currentScreenSize, updatePoint, getPoint, setInitialPoints };
};
