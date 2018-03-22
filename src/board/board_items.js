const newGrid = () => {
  return boardGrid(12, 20);
};

const boardGrid = (width, height) => {
  const grid = [];
  while(0 < height--){
    grid.push(new Array(width).fill(0));
  }

  return grid;
};

export default newGrid;
