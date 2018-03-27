import { scale } from './settings';

export const drawBorder = (startX, startY, canvas, context, color) => {
  context.fillStyle = color;
  context.fillRect(startX - 4, startY - 2, 248, 14);

  context.lineWidth = 4
  context.strokeStyle = '#222222';
  context.strokeRect(startX - 2, startY + 14, 244, 408);
  context.lineWidth = 1;
}

export const drawBoard = (startX, startY, canvas, context) => {

  context.fillStyle = 'rgba(0,0,0,0)';

  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillWidth = 1;
  const _drawSquare = drawSquare(context, scale, '#222222');
  for(let i = 0; i < 12; i++){
    for(let j = 0; j < 21; j++){
      if ((i + j) % 2 === 0){
        _drawSquare(startX + (i * scale), startY + (j * scale), 'rgba(47,47,47,1)');
      } else {
        _drawSquare(startX + (i * scale), startY + (j * scale), 'rgba(43,43,43,1)');
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
