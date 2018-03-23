import { scale } from './settings';

export const drawBorder = (startX, startY, canvas, context) => {
  context.fillStyle = '#444444';
  context.fillRect(startX - 4, startY - 2, 248, 14);

  context.lineWidth = 4
  context.strokeStyle = '#222222';
  context.strokeRect(startX - 2, startY + 14, 244, 408);
  context.lineWidth = 1;
}

export const drawBoard = (startX, startY, canvas, context) => {

  context.fillStyle = '#444444';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillWidth = 1;
  const _drawSquare = drawSquare(context, scale, '#222222');
  for(let i = 0; i < 12; i++){
    for(let j = 0; j < 21; j++){
      if ((i + j) % 2 === 0){
        _drawSquare(startX + (i * scale), startY + (j * scale), '#2f2f2f');
      } else {
        _drawSquare(startX + (i * scale), startY + (j * scale), '#2b2b2b');
      }
    }
  }
  return null;
};

const drawSquare = (context, size, borderColor) => (x, y, fillColor) => {
  context.lineWidth = 1;
  context.fillStyle = fillColor;
  context.fillRect(x, y, size, size);
  context.strokeStyle = borderColor;
  context.strokeRect(x,y,size, size);
};



export default drawBoard;
