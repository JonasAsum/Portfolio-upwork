import React, { useState, useEffect, useCallback, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  rotation: number;
}

interface StarryMouseTrailProps {
  excludeSelector: string;
}

const StarryMouseTrail: React.FC<StarryMouseTrailProps> = ({ excludeSelector }) => {
  const particlesRef = useRef<Particle[]>([]);
  const [, forceUpdate] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const excludedAreaRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    excludedAreaRef.current = document.querySelector(excludeSelector);
  }, [excludeSelector]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const newPosition = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      setMousePosition(newPosition);

      if (
        !excludedAreaRef.current ||
        !excludedAreaRef.current.contains(document.elementFromPoint(newPosition.x, newPosition.y))
      ) {
        createParticle(newPosition);
      }
    }
  }, []);

  const createParticle = (position: { x: number; y: number }) => {
    const colors = ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5'];
    const newParticle: Particle = {
      id: Date.now(),
      x: position.x,
      y: position.y,
      size: Math.random() * 20 + 10, // Adjusted size for visibility
      speed: Math.random() * 2 + 1,
      opacity: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
    };
    particlesRef.current.push(newParticle);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    const animateParticles = () => {
      particlesRef.current = particlesRef.current
        .map(particle => ({
          ...particle,
          y: particle.y + particle.speed,
          opacity: particle.opacity - 0.01,
          rotation: particle.rotation + 2,
        }))
        .filter(particle => particle.opacity > 0 && particle.y < window.innerHeight);

      forceUpdate({});
    };

    const animationFrame = requestAnimationFrame(function animate() {
      animateParticles();
      requestAnimationFrame(animate);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [handleMouseMove]);

  const renderSparkle = (particle: Particle) => (
    <svg
      key={particle.id}
      xmlns="http://www.w3.org/2000/svg"
      width={particle.size}
      height={particle.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={particle.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        position: 'absolute',
        left: `${particle.x - particle.size / 2}px`,
        top: `${particle.y - particle.size / 2}px`,
        opacity: particle.opacity,
        transform: `rotate(${particle.rotation}deg)`,
      }}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {particlesRef.current.map(renderSparkle)}
    </div>
  );
};

export default StarryMouseTrail;