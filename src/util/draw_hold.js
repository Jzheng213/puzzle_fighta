import {context} from '../canvas';

const drawHold = (startX, startY) => {
  context.fillStyle = 'grey';
  context.fillRect(startX - 60, startY, 50, 50);
};

export default drawHold;
