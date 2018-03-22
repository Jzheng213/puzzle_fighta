import { context } from '../canvas';

const drawPiece = (shape, delta) => {
  shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        switch (value) {
        case 1:
          context.fillStyle = 'purple';
          break;
        case 2:
          context.fillStyle = 'yellow';
          break;
        case 3:
          context.fillStyle = 'red';
          break;
        case 4:
          context.fillStyle = 'green';
          break;
        case 5:
          context.fillStyle = 'orange';
          break;
        case 6:
          context.fillStyle = 'blue';
          break;
        case 7:
          context.fillStyle = '#ADD8E6';
          break;
        default:
        }
        context.fillRect(x + delta.x, y + delta.y, 1, 1);
      }
    });
  });
};

export default drawPiece;
