const drawHold = (startX, startY, context) => {

  context.fillStyle = '#2f2f2f';
  context.lineWidth = 3;
  context.strokeStyle = '#222222';
  context.fillRect(3, startY, 87, 63);
  context.strokeRect(3, startY, 87, 63);
};

export default drawHold;
