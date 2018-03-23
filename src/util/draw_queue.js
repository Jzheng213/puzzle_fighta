const drawQueue = (startX, startY, context) => {
  context.fillStyle = '#2f2f2f';
  context.lineWidth = 3;
  context.strokeStyle = '#222222';
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
