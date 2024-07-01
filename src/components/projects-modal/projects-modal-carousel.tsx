// src/components/ProjectCarousel.tsx
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images, title }) => {
  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img 
              src={image} 
              alt={`${title} - Image ${index + 1}`} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCarousel;