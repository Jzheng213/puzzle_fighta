import { canvas, context } from '../canvas';

const board = (startX, startY) => {
  context.fillStyle = '#444444';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'grey';
  context.lineWidth = 4;

  context.fillRect(startX, startY, 240, 400);
  context.strokeRect(startX - 3, startY - 3, 246, 406);
  context.fillWidth = 1;
  return null;
};

export default board;
