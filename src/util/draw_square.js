import { scale } from './settings';
import { context } from '../canvas';


const drawBorder = (x, y, delta, length) => {
  context.strokeRect(
    ((x + delta.x) * scale) + length,
    ((y + delta.y) * scale) + length,
    (scale - (length * 2) + 1) ,
    (scale - (length * 2) + 1)
  );
};

const fillBox = (x, y, delta, length) => {
  context.fillRect(
    ((x + delta.x) * scale) + length,
    ((y + delta.y) * scale) + length,
    (scale - (length * 2) + 1) ,
    (scale - (length * 2) + 1)
  );
};

const make_3d = (x, y, delta) => {
  context.fillStyle = 'rgba(255,255,255,0.1)';
  context.fillRect((x + delta.x) * scale + 5, (y + delta.y) * scale + 2, 12, 2);
  context.fillRect((x + delta.x) * scale + 2, (y + delta.y) * scale + 5, 2, 12);

  context.fillRect((x + delta.x) * scale + 2, (y + delta.y) * scale + 2, 5, 5);
  context.fillStyle = 'rgba(255,255,255,0.5)';
  context.fillRect((x + delta.x) * scale + 3, (y + delta.y) * scale + 3, 3, 3);
  context.fillStyle = 'rgba(255,255,255,1)';
  context.fillRect((x + delta.x) * scale + 4, (y + delta.y) * scale + 4, 1, 1);
};

const drawSquare = (x, y, delta, color) => {
  context.fillStyle = color;
  context.fillRect((x + delta.x) * scale, (y + delta.y) * scale, scale ,scale);

  context.fillStyle = color;
  fillBox(x, y, delta, 7);

  context.strokeStyle = 'rgba(255,255,255,0.2)';
  drawBorder(x, y, delta, 5);

  //second outer
  context.strokeStyle = 'rgba(0,0,0,0.5)';
  drawBorder(x, y, delta, 3);

  // outer
  context.strokeStyle = 'rgba(0,0,0,0.75)';
  context.strokeRect(
    ((x + delta.x) * scale) + 1,
    ((y + delta.y) * scale) + 1,
    (scale - (1 * 2) + 1) ,
    (scale - (1 * 2) + 1)
  );
  make_3d(x, y, delta);
};

export default drawSquare;
