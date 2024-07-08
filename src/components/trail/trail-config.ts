import { Dot } from '../types';

interface TrailConfig {
  dot1: Dot;
  dot2: Dot;
  pathType: 'curve' | 'zigzag' | 'wave' | 'straight';
}

export const trails: Record<string, TrailConfig> = {
  trail1: {
    dot1: { x: 120, y: 85 },
    dot2: { x: 800, y: 350 },
    pathType: 'curve'
  },
  trail2: {
    dot1: { x: 50, y: 50 },
    dot2: { x: 1150, y: 550 },
    pathType: 'zigzag'
  },
  trail3: {
    dot1: { x: 100, y: 100 },
    dot2: { x: 700, y: 300 },
    pathType: 'wave'
  },
  trail4: {
    dot1: { x: 200, y: 150 },
    dot2: { x: 1300, y: 650 },
    pathType: 'straight'
  },
  trail5: {
    dot1: { x: 100, y: 100 },
    dot2: { x: 900, y: 900 },
    pathType: 'curve'
  }
};