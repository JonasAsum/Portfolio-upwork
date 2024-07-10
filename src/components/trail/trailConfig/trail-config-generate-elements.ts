import { Dot, PathObject, Corner } from '../../types';

export function generateCornerDots(elementId: string, baseId: number): Dot[] {
  const positions: Corner[] = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'];
  
  return positions.map((position, index) => ({
    id: `dot-${elementId}-${baseId + index}`,
    elementId,
    position,
    offset: { x: position.includes('Right') ? 5 : -5, y: position.includes('Bottom') ? 5 : -5 }
  }));
}

export function generateRoundedPaths(elementId: string, baseId: number): PathObject[] {
  const cornerDots = generateCornerDots(elementId, baseId);

  return cornerDots.map((dot, index) => ({
    id: `path-${elementId}-${baseId + index}`,
    startDot: dot.id,
    endDot: cornerDots[(index + 1) % cornerDots.length].id,
    pathType: 'roundedCorner',
    corner: dot.position as Corner
  }));
}

// Function to generate both dots and paths for a new rounded element
export function generateRoundedElement(elementId: string, baseId: number) {
  return {
    dots: generateCornerDots(elementId, baseId),
    paths: generateRoundedPaths(elementId, baseId)
  };
}
