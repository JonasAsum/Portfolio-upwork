
import { Dot } from '../types';

export const getPathD = (pathType: 'curve' | 'zigzag' | 'wave' | 'straight', dot1: Dot, dot2: Dot, width: number, height: number) => {
  switch (pathType) {
    case 'curve':
      return `M${dot1.x},${dot1.y} 
              C${dot1.x},${height / 3} 
               ${dot2.x},${height / 3} 
               ${dot2.x},${dot2.y}`;
    case 'zigzag':
      const midX = (dot1.x + dot2.x) / 2;
      return `M${dot1.x},${dot1.y} 
              L${midX},${height / 3} 
              L${dot1.x},${height * 2 / 3} 
              L${dot2.x},${dot2.y}`;
    case 'wave':
      return `M${dot1.x},${dot1.y} 
              Q${width / 4},${height / 4} ${width / 2},${height / 2} 
              T${dot2.x},${dot2.y}`;
    case 'straight':
    default:
      return `M${dot1.x},${dot1.y} L${dot2.x},${dot2.y}`;
  }
};