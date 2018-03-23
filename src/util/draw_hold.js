import {context} from '../canvas';

const drawHold = (startX, startY) => {
  context.fillStyle = 'grey';
  context.lineWidth = 3;
  context.strokeStyle = 'black';
  context.fillRect(3, startY, 87, 63);
  context.strokeRect(3, startY, 87, 63);
};

export default drawHold;
