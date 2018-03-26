import {drawSquare, drawShadow} from './draw_square';

const drawPiece = (shape, delta, offset, context) => {
  shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        switch (value) {
        case 1:
          drawSquare(x + offset.x, y + offset.y, delta, 'purple', context);
          break;
        case 2:
          drawSquare(x + offset.x, y + offset.y, delta, '#f9c333', context);
          break;
        case 3:
          drawSquare(x + offset.x, y + offset.y, delta, '#de5e2c', context);
          break;
        case 4:
          drawSquare(x + offset.x, y + offset.y, delta, '#1b3ece', context);
          break;
        case 5:
          drawSquare(x + offset.x, y + offset.y, delta, '#349adc', context);
          break;
        case 6:
          drawSquare(x + offset.x, y + offset.y, delta, '#d33e35', context);
          break;
        case 7:
          drawSquare(x + offset.x, y + offset.y, delta, '#63b10e', context);
          break;
        case 8:
          drawSquare(x + offset.x, y + offset.y, delta, '#606060', context);
          break;
        case 9:
          drawShadow(x + offset.x, y + offset.y, delta, 'white', context);
          break;
        default:
        }
      }
    });
  });
};

export default drawPiece;
