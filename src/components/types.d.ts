export type Position = 'topLeft' | 'topRight' | 'topCenter'| 'bottomRight' | 'bottomLeft' | 'bottomCenter' |'middleLeft' | 'middleRight' |'middleCenter' ;
export type Corner = 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft';
export type PathTypes = 'curve' | 'zigzag' | 'wave' | 'straight' | 'surround' | 'roundedCorner' | 'loop';
export interface Dot {
  id: string;
  elementId: string;
  position: Position;
  offset: { x: number; y: number };
}

export interface PathObject {
  id: string;
  startDot: string;
  endDot: string;
  pathType: PathTypes;
  corner?: Corner;
}

export interface SvgPathProps {
  width: number;
  height: number;
  dot1: { x: number; y: number };
  dot2: { x: number; y: number };
  pathType: PathTypes;
  id: string;
  startDot: string;
  endDot: string;
  corner?: Corner;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  languages: string[];
  image: string;
  gallery: string[];
  demoLink?: string;
  githubLink?: string;
}



export interface DotGenerationConfig {
  startId: string;
  elementId: string;
  position: Position;
  startOffset: { x: number; y: number };
  gap: number;
  gapAxis: 'x' | 'y';
}