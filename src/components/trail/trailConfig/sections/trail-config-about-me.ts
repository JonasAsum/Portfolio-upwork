import { Dot, PathObject } from '../../../types';
import { generateCornerDots, generateRoundedPaths } from '../trail-config-generate-elements';

export const aboutMeDots: Dot[] = [
  {
    id: 'dot-about-me-title-1',
    elementId: 'about-me-title',
    position: 'topLeft',
    offset: { x: 60, y: 0 }
  },
  {
    id: 'dot-about-me-content-2',
    elementId: 'about-me-content',
    position: 'middleLeft',
    offset: { x: -10, y: 0 }
  },
  ...generateCornerDots('about-me-content', 3),
  {
    id: 'dot-about-me-exit',
    elementId: 'about-me-content',
    position: 'bottomRight',
    offset: { x: 0, y: -10 }
  }
];

export const aboutMePaths: PathObject[] = [
  {
    id: 'path-about-me-content-1',
    startDot: 'dot-about-me-title-1',
    endDot: 'dot-about-me-content-2',
    pathType: 'curve'
  },
  ...generateRoundedPaths('about-me-content', 3)
];
