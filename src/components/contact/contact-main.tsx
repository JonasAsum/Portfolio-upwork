import React, { useState, useRef, useEffect } from 'react';
import { Star } from 'lucide-react';
import ContactForm from './contact-form';
import { preloadImage } from './image-preload-utils';

interface ContactSectionProps {
  scrollPercentage: number;
}

const ContactSection: React.FC<ContactSectionProps> = ({ scrollPercentage }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const starRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const expansionThreshold = 0.992;
  const expansionTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleExpansion = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      
      if ((scrollPercentage >= expansionThreshold || isAtBottom) && !isExpanded) {
        if (expansionTimeout.current) clearTimeout(expansionTimeout.current);
        expansionTimeout.current = setTimeout(() => {
          setIsExpanded(true);
        }, 100);
      } else if (scrollPercentage < expansionThreshold && !isAtBottom && isExpanded) {
        if (expansionTimeout.current) clearTimeout(expansionTimeout.current);
        setIsExpanded(false);
      }
    };

    handleExpansion();



    window.addEventListener('scroll', handleExpansion);

    return () => {
      if (expansionTimeout.current) clearTimeout(expansionTimeout.current);
      window.removeEventListener('scroll', handleExpansion);
    };
  }, [scrollPercentage, isExpanded]);


  useEffect(() => {
    preloadImage('/images/bg-contact.jpg')
      .then(() => setImageLoaded(true))
      .catch(error => console.error('Failed to preload image:', error));
  }, []);


  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      console.log('Overlay clicked');
      window.scrollTo({
        top: window.scrollY - 200,
        behavior: 'smooth'
      });
    }
  };
  const starSize = isExpanded ? 240 : 120;

  const getStarColor = (scrollPercentage: number) => {
    const transitionStart = 0.99;
    const transitionEnd = 1.0;
    
    if (scrollPercentage <= transitionStart) {
      return '#808080'; // Grey
    } else if (scrollPercentage >= transitionEnd) {
      return '#FFFF00'; // Yellow
    } else {
      const transitionProgress = (scrollPercentage - transitionStart) / (transitionEnd - transitionStart);
      const r = Math.floor(128 + (255 - 128) * transitionProgress);
      const g = Math.floor(128 + (255 - 128) * transitionProgress);
      return `rgb(${r}, ${g}, 0)`;
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        ref={starRef}
        className={`transition-all duration-500 ease-in-out z-20 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
      >
        {!isExpanded && (
          <div id='contact-star'>
            <Star 
              size={starSize} 
              color={getStarColor(scrollPercentage)}
            />
          </div>
        )}
      </div>
      {isExpanded && (
        <ContactForm 
          ref={overlayRef} 
          onOverlayClick={handleOverlayClick} 
          imageLoaded={imageLoaded}
        />
      )}
    </div>
  );
};

export default ContactSection;