import React, { useState, useEffect } from 'react';

interface SeamlessBackgroundImageProps {
  src: string;
}

const SeamlessBackgroundImage: React.FC<SeamlessBackgroundImageProps> = ({ src }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  }, [src]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: imageLoaded ? `url(${src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'opacity 0.5s ease-in-out',
        opacity: imageLoaded ? 1 : 0,
        zIndex: 1,
      }}
    />
  );
};

export default SeamlessBackgroundImage;