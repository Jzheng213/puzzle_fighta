const lineClear = (grid) => {
  outer: for (let y = grid.length - 1; y > 0; --y){
    for (let x = 0; x < grid[y].length; ++x){
      if(grid[y][x] === 0){
        continue outer;
      }
    }
    const row = grid.splice(y, 1)[0].fill(0);
    grid.unshift(row);
    y++;
  }
};

export default lineClear;
