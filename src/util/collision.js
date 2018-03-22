export const stick = (grid, player) => {
  player.piece.forEach((row, y) => {
    row.forEach((value, x) => {
      if(value !== 0){
        grid[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
};

export const collided = (grid, player) => {
  const [piece, pos] = [player.piece, player.pos];

  for (let y = 0; y < piece.length; y++) {
    for (let x = 0; x < piece.length; x++) {
      if(piece[y][x] !== 0 &&
        (grid[y + pos.y] && grid[y + pos.y][x + pos.x]) !== 0){
        return true;
      }
    }
  }
  return false;
};
