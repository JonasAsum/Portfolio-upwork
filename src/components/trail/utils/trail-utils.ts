import { PathTypes, Corner } from '../../types';

export const getPathD = (pathType: PathTypes, dot1: { x: number; y: number }, dot2: { x: number; y: number }, corner?: Corner): string => {
  const dx = dot2.x - dot1.x;
  const dy = dot2.y - dot1.y;
  const midX = (dot1.x + dot2.x) / 2;
  const midY = (dot1.y + dot2.y) / 2;

  switch (pathType) {
    case 'curve':
      const controlY = midY + dy / 4;
      return `M${dot1.x},${dot1.y} C${dot1.x},${controlY} ${dot2.x},${controlY} ${dot2.x},${dot2.y}`;
    case 'zigzag':
      return `M${dot1.x},${dot1.y} L${midX},${dot1.y} L${midX},${dot2.y} L${dot2.x},${dot2.y}`;
    case 'wave':
      const controlPoint1 = { x: dot1.x + dx / 4, y: dot1.y + dy / 2 };
      const controlPoint2 = { x: dot1.x + dx * 3 / 4, y: dot2.y - dy / 2 };
      return `M${dot1.x},${dot1.y} Q${controlPoint1.x},${controlPoint1.y} ${midX},${midY} T${dot2.x},${dot2.y}`;
    case 'surround':
      return `M${dot1.x},${dot1.y} L${dot1.x},${dot2.y} L${dot2.x},${dot2.y} L${dot2.x},${dot1.y} L${dot1.x},${dot1.y}`;
    case 'roundedCorner':
      if (!corner) throw new Error("Corner must be specified for roundedCorner path type");
      const radius = 16; // Adjust this value to match your rounded-3xl class
      switch (corner) {
        case 'topLeft':
          return `M${dot1.x},${dot2.y} L${dot1.x},${dot1.y + radius} Q${dot1.x},${dot1.y} ${dot1.x + radius},${dot1.y} L${dot2.x},${dot1.y}`;
        case 'topRight':
          return `M${dot1.x},${dot1.y} L${dot1.x - radius},${dot1.y} Q${dot1.x},${dot1.y} ${dot1.x},${dot1.y + radius} L${dot1.x},${dot2.y}`;
        case 'bottomRight':
          return `M${dot1.x},${dot1.y} L${dot1.x},${dot1.y - radius} Q${dot1.x},${dot1.y} ${dot1.x - radius},${dot1.y} L${dot2.x},${dot1.y}`;
        case 'bottomLeft':
          return `M${dot2.x},${dot1.y} L${dot1.x + radius},${dot1.y} Q${dot1.x},${dot1.y} ${dot1.x},${dot1.y - radius} L${dot1.x},${dot2.y}`;
      }
    case 'loop':
      const loopSize = Math.min(Math.abs(dx), Math.abs(dy)) / 2;
      const loopCenterX = midX + (dy > 0 ? loopSize : -loopSize);
      const loopCenterY = midY - (dx > 0 ? loopSize : -loopSize);
      return `M${dot1.x},${dot1.y} 
              C${loopCenterX},${dot1.y} 
               ${loopCenterX},${loopCenterY - loopSize} 
               ${midX},${midY}
              S${loopCenterX},${dot2.y} 
               ${dot2.x},${dot2.y}`;
    case 'straight':
    default:
      return `M${dot1.x},${dot1.y} L${dot2.x},${dot2.y}`;
  }
};