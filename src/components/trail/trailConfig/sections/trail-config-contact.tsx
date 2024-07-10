import { Dot , PathObject , DotGenerationConfig, PathTypes} from '../../../types';


export const generateFiveDots = (config: DotGenerationConfig): Dot[] => {
  const { startId, elementId, position, startOffset, gap, gapAxis } = config;
  
  return Array.from({ length: 5 }, (_, index) => {
    const offset = {
      x: gapAxis === 'x' ? startOffset.x + index * gap : startOffset.x,
      y: gapAxis === 'y' ? startOffset.y + index * gap : startOffset.y
    };

    return {
      id: `${startId}-${index + 1}`,
      elementId,
      position,
      offset
    };
  });
};

interface InnerToOuterConnections {
    [innerDotId: string]: string[];
}

const generateInnerToOuterPaths = (connections: InnerToOuterConnections, pathType: PathTypes): PathObject[] => {
    return Object.entries(connections).flatMap(([innerDotId, outerDotIds]) =>
      outerDotIds.map((outerDotId, index) => ({
        id: `path-contact-${innerDotId}-to-${outerDotId}`,
        startDot: outerDotId,
        endDot: innerDotId,
        pathType
      }))
    );
  };



  const innerToOuterConnections: InnerToOuterConnections = {
    'dot-contact-inner-1': ['dot-contact-vertical-left-4', 'dot-contact-vertical-left-3', 'dot-contact-vertical-left-2'],
    'dot-contact-inner-2': ['dot-contact-vertical-right-4', 'dot-contact-vertical-right-3', 'dot-contact-vertical-right-2'],
    'dot-contact-inner-3': ['dot-contact-vertical-right-5', 'dot-contact-vertical-left-5', ''],
    'dot-contact-inner-4': ['dot-contact-horizontal-right-3', 'dot-contact-horizontal-right-4', 'dot-contact-horizontal-right-2' , 'dot-contact-horizontal-left-1'],
    'dot-contact-inner-5': ['dot-contact-horizontal-left-3', 'dot-contact-horizontal-left-4', 'dot-contact-horizontal-left-2','dot-contact-horizontal-right-1']
  };
  



export const contactDots: Dot[] = [
    //outer Dots
  ...generateFiveDots({
    startId: 'dot-contact-horizontal-right',
    elementId: 'container',
    position: 'bottomCenter',
    startOffset: { x: -10, y: -10 },
    gap: 200,
    gapAxis: 'x'
  }),
  ...generateFiveDots({
    startId: 'dot-contact-horizontal-left',
    elementId: 'container',
    position: 'bottomCenter',
    startOffset: { x: 0, y: -10 },
    gap: -200,
    gapAxis: 'x'
  }),
  ...generateFiveDots({
    startId: 'dot-contact-vertical-right',
    elementId: 'container',
    position: 'bottomRight',
    startOffset: { x: -10, y: -10 },
    gap: -150,
    gapAxis: 'y'
  }),
  ...generateFiveDots({
    startId: 'dot-contact-vertical-left',
    elementId: 'container',
    position: 'bottomLeft',
    startOffset: { x: 0, y: -10 },
    gap: -150,
    gapAxis: 'y'
  }),

  //inner Points
  {
    id: 'dot-contact-inner-1', 
    elementId: 'contact-star', //middle-left
    position: 'middleLeft',
    offset: { x: 7, y: -17 }
  },
  {
    id: 'dot-contact-inner-2',
    elementId: 'contact-star',//middle-right
    position: 'middleRight',
    offset: { x: -7, y: -17 }
  },
  {
    id: 'dot-contact-inner-3',
    elementId: 'contact-star', // top
    position: 'topCenter',
    offset: { x: 0, y: 5 }
  },
  {
    id: 'dot-contact-inner-4',
    elementId: 'contact-star', // bottom -right
    position: 'bottomCenter',
    offset: { x: 32, y: -14 }
  },
  {
    id: 'dot-contact-inner-5',
    elementId: 'contact-star', //bottom-left
    position: 'bottomCenter',
    offset: { x: -32, y: -14 }
  },
];

export const contactPaths: PathObject[] = [
    {
      id: 'path-projects-connect-1',
      startDot: 'dot-skills-exit-4',
      endDot: 'dot-contact-horizontal-1',
      pathType: 'curve'
    },
    ...generateInnerToOuterPaths(innerToOuterConnections, 'curve')
  ];
  