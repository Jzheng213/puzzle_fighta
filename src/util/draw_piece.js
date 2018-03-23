import drawSquare from './draw_square';

const drawPiece = (shape, delta, offset) => {
  shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        switch (value) {
        case 1:
          drawSquare(x + offset.x, y + offset.y, delta, '#ab3e8f');
          break;
        case 2:
          drawSquare(x + offset.x, y + offset.y, delta, '#f9c333');
          break;
        case 3:
          drawSquare(x + offset.x, y + offset.y, delta, '#de5e2c');
          break;
        case 4:
          drawSquare(x + offset.x, y + offset.y, delta, '#1b3ece');
          break;
        case 5:
          drawSquare(x + offset.x, y + offset.y, delta, '#349adc');
          break;
        case 6:
          drawSquare(x + offset.x, y + offset.y, delta, '#d33e35');
          break;
        case 7:
          drawSquare(x + offset.x, y + offset.y, delta, '#63b10e');
          break;
        default:
        }
      }
    });
  });
};

export default drawPiece;
