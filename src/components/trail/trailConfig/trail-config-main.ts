import { Dot, PathObject } from '../../types';
import { generateCornerDots, generateRoundedPaths } from './trail-config-generate-elements';
import { aboutMeDots, aboutMePaths } from './sections/trail-config-about-me';
import { skillsDots, skillsPaths } from './sections/trail-config-skills';
import { projectsDots , projectsPaths} from './sections/trail-config-projects'
import { contactDots , contactPaths} from './sections/trail-config-contact'


export const dots: Dot[] = [
  {
    id: 'dot-container-top',
    elementId: 'container',
    position: 'topCenter',
    offset: { x: 0, y: 0 }
  },
  ...aboutMeDots,
  ...skillsDots,
  ...projectsDots,
  ...contactDots
];

export const paths: PathObject[] = [
  {
    id: 'path-entry-container',
    startDot: 'dot-container-top',
    endDot: 'dot-about-me-title-1',
    pathType: 'curve'
    },
  ...aboutMePaths,
  ...skillsPaths,
  ...projectsPaths,
  ...contactPaths
  
];
