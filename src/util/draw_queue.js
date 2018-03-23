import {context} from '../canvas';

const drawQueue = (startX, startY) => {
  context.fillStyle = 'grey';
  context.lineWidth = 3;
  context.strokeStyle = 'black';
  context.fillRect(startX + 250, startY, 93, 65);
  context.strokeRect(startX + 250, startY, 93, 65);

  context.fillRect(startX + 250, startY + 80, 93, 65);
  context.strokeRect(startX + 250, startY + 80, 93, 65);

  context.fillRect(startX + 250, startY + 160, 93, 65);
  context.strokeRect(startX + 250, startY + 160, 93, 65);

  context.fillRect(startX + 250, startY + 240, 93, 65);
  context.strokeRect(startX + 250, startY + 240, 93, 65);

  context.lineWidth = 1;
};

export default drawQueue;
