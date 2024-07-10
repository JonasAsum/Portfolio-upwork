import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { dots, paths } from '../trailConfig/trail-config-main';
import { calculateDotPosition } from '../calc-dot-position';
import { SvgPathProps, Dot, PathObject } from '../../types';
import { getActivationRange } from './activation-ranges';

// Throttle function
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};



export const useTrailLogic = (sectionRef: React.RefObject<HTMLDivElement>, containerRef: React.RefObject<HTMLDivElement>) => {
  const [sectionSize, setSectionSize] = useState({ width: 0, height: 0 });
  const [dotPositions, setDotPositions] = useState<Record<string, { x: number; y: number }>>({});
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const rafIdRef = useRef<number | null>(null);


  const updatePositions = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      if (sectionRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        setSectionSize({ width: containerRect.width, height: containerRect.height });

        const newPositions: Record<string, { x: number, y: number }> = {};
        const elementsToUpdate: Dot[] = [];

        dots.forEach((dot: Dot) => {
          const element = document.getElementById(dot.elementId);
          if (element) {
            elementsToUpdate.push(dot);
          } 
        });

        if (elementsToUpdate.length > 0) {
          const elementRects = elementsToUpdate.map(dot => 
            document.getElementById(dot.elementId)!.getBoundingClientRect()
          );

          elementsToUpdate.forEach((dot, index) => {
            newPositions[dot.id] = calculateDotPosition(dot, elementRects[index], containerRect);
          });

          setDotPositions(prevPositions => ({
            ...prevPositions,
            ...newPositions
          }));
        }
      } 
    });
  }, [sectionRef, containerRef]);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Calculate the scroll percentage based on the container's position and height
      const containerTop = containerRect.top + scrollTop;
      const containerBottom = containerTop + containerRect.height;
      const viewportBottom = scrollTop + windowHeight;
      
      // This allows scrollPercentage to go beyond 1
      const scrollPercentage = (viewportBottom - containerTop) / containerRect.height;
      
      setScrollPercentage(scrollPercentage);
    }
  }, [containerRef]);

  
  const throttledHandleScroll = useMemo(
    () => throttle(handleScroll, 100),
    [handleScroll]
  );


  useEffect(() => {

    updatePositions();
    window.addEventListener('resize', updatePositions);
    window.addEventListener('scroll', throttledHandleScroll);

    const resizeObserver = new ResizeObserver(() => {

      updatePositions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updatePositions);
      window.removeEventListener('scroll', throttledHandleScroll);
      resizeObserver.disconnect();
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [updatePositions, throttledHandleScroll, containerRef]);

  const renderedDots = useMemo(() => {

    const visibleDots = dots.filter(dot => dotPositions[dot.id]);
    return visibleDots.map((dot: Dot) => {
      const position = dotPositions[dot.id];
  
      return {
        id: dot.id,
        position,
      };
    });
  }, [dotPositions]);


// Optimized renderedPaths calculation
const renderedPaths = useMemo(() => {
  return paths.reduce((acc, path) => {
    const dot1 = dotPositions[path.startDot];
    const dot2 = dotPositions[path.endDot];
    if (dot1 && dot2) {
      const { start, end } = getActivationRange(path);
      
      // Calculate progress without clamping
      const pathProgress = (scrollPercentage - start) / (end - start);
      
      acc.push({
        ...path,
        width: sectionSize.width,
        height: sectionSize.height,
        dot1,
        dot2,
        activationStart: start,
        activationEnd: end,
        progress: pathProgress
      });
    } 
    return acc;
  }, [] as (SvgPathProps & { activationStart: number, activationEnd: number, progress: number })[]);
}, [sectionSize, dotPositions, scrollPercentage]);


const dotElements = useMemo(() => {
  return renderedDots.map(({ id, position }) => (
    <div
      key={id}
      className="absolutew-2 h-2 rounded-full"
      style={{ 
        top: position.y,
        left: position.x,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform'
      }}
    />
  ));
}, [renderedDots]);
  return {
    dotElements,
    renderedPaths,
    scrollPercentage,
    updatePositions
  };
};