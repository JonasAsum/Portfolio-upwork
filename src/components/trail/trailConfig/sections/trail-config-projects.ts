import { Dot, PathObject } from '../../../types';
import { generateCornerDots, generateRoundedPaths } from '../trail-config-generate-elements';

export const projectsDots: Dot[] = [
    {
        id: 'dot-projects-content-1',
        elementId: 'projects-individual-0',
        position: 'middleRight',
        offset: { x: 0, y:  -10 }
      },
      {
        id: 'dot-projects-content-2',
        elementId: 'projects-individual-1',
        position: 'middleLeft',
        offset: { x: 0, y: -10 }
      },
      {
        id: 'dot-projects-content-3',
        elementId: 'projects-individual-2',
        position: 'middleRight',
        offset: { x: 0, y: -10 }
      },
];

export const projectsPaths: PathObject[] = [
    {
    id: 'path-projects-connect-1',
    startDot: 'dot-skills-exit-4',
    endDot: 'dot-projects-content-1',
    pathType: 'curve'
    },
    {
    id: 'path-projects-connect-2',
    startDot: 'dot-projects-content-1',
    endDot: 'dot-projects-content-2',
    pathType: 'curve'
    },
    {
    id: 'path-projects-connect-3',
    startDot: 'dot-projects-content-2',
    endDot: 'dot-projects-content-3',
    pathType: 'curve'
    },
];
