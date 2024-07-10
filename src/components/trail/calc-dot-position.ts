import { Dot } from '../types';

export const calculateDotPosition = (dot: Dot, elementRect: DOMRect, containerRect: DOMRect) => {
  let x = elementRect.left - containerRect.left;
  let y = elementRect.top - containerRect.top;

  switch (dot.position) {
    case 'topCenter':
      x += elementRect.width / 2;
      break;
    case 'topRight':
      x += elementRect.width;
      break;
    case 'middleLeft':
      y += elementRect.height / 2;
      break;
    case 'middleCenter':
      x += elementRect.width / 2;
      y += elementRect.height / 2;
      break;
    case 'middleRight':
      x += elementRect.width;
      y += elementRect.height / 2;
      break;
    case 'bottomLeft':
      y += elementRect.height;
      break;
    case 'bottomCenter':
      x += elementRect.width / 2;
      y += elementRect.height;
      break;
    case 'bottomRight':
      x += elementRect.width;
      y += elementRect.height;
      break;
    case 'topLeft':
    default:
      break;
  }

  x += dot.offset.x;
  y += dot.offset.y;

  return { x, y };
};