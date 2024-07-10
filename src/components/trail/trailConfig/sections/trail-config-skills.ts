import { Dot, PathObject } from '../../../types';
import { generateCornerDots, generateRoundedPaths } from '../trail-config-generate-elements';

export const skillsDots: Dot[] = [
  {
    id: 'dot-skills-title',
    elementId: 'skills-title',
    position: 'middleCenter',
    offset: { x: 0, y: 0 }
  },
  {
    id: 'dot-skills-content-1',
    elementId: 'skills-individual-0',
    position: 'topCenter',
    offset: { x: 0, y: -10 }
  },
  {
    id: 'dot-skills-content-2',
    elementId: 'skills-individual-1',
    position: 'topCenter',
    offset: { x: 0, y: -10 }
  },
  {
    id: 'dot-skills-content-3',
    elementId: 'skills-individual-2',
    position: 'topCenter',
    offset: { x: 0, y: -10 }
  },
  ...generateCornerDots('skills-individual-0', 4),
  ...generateCornerDots('skills-individual-1', 5),
  ...generateCornerDots('skills-individual-2', 6),
  {
    id: 'dot-skills-exit-1',
    elementId: 'skills-individual-0',
    position: 'bottomCenter',
    offset: { x: 0, y: -10 }
  },
  {
    id: 'dot-skills-exit-2',
    elementId: 'skills-individual-1',
    position: 'bottomCenter',
    offset: { x: 0, y: -10 }
  },
  {
    id: 'dot-skills-exit-3',
    elementId: 'skills-individual-2',
    position: 'bottomCenter',
    offset: { x: 0, y: -10 }
  },
  {
    id: 'dot-skills-exit-4',
    elementId: 'skills-individual-1',
    position: 'bottomCenter',
    offset: { x: 0, y: 300 }
  },
];

export const skillsPaths: PathObject[] = [
  {
    id: 'path-skills-entry-1',
    startDot: 'dot-about-me-exit',
    endDot: 'dot-skills-title',
    pathType: 'wave'
  },
  {
    id: 'path-skills-connect-1',
    startDot: 'dot-about-me-exit',
    endDot: 'dot-skills-title',
    pathType: 'wave'
  },
  {
    id: 'path-skills-content-1',
    startDot: 'dot-skills-title',
    endDot: 'dot-skills-content-1',
    pathType: 'curve'
  },
  {
    id: 'path-skills-content-2',
    startDot: 'dot-skills-title',
    endDot: 'dot-skills-content-2',
    pathType: 'straight'
  },
  {
    id: 'path-skills-content-3',
    startDot: 'dot-skills-title',
    endDot: 'dot-skills-content-3',
    pathType: 'curve'
  },
  ...generateRoundedPaths('skills-individual-0', 4),
  ...generateRoundedPaths('skills-individual-1', 5),
  ...generateRoundedPaths('skills-individual-2', 6),
  {
    id: 'path-skills-exit-1',
    startDot: 'dot-skills-exit-1',
    endDot: 'dot-skills-exit-4',
    pathType: 'curve'
  },
  {
    id: 'path-skills-exit-2',
    startDot: 'dot-skills-exit-2',
    endDot: 'dot-skills-exit-4',
    pathType: 'straight'
  },
  {
    id: 'path-skills-exit-3',
    startDot: 'dot-skills-exit-3',
    endDot: 'dot-skills-exit-4',
    pathType: 'curve'
  },
];
