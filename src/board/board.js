import { canvas, context } from '../canvas';

const board = () => {
  
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  return null;
};

export default board;
