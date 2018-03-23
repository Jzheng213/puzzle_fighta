import { stick, collided } from '../util/collision';
import lineClear from '../board/board_clear';

const playerDrop = (grid, player, render, opponent = null) => {
  let linesCleared = 0;
  player.pos.y++;
  //piece sticks
  if(collided(grid, player)){
    player.pos.y--;
    stick(grid, player);
    linesCleared = lineClear(grid);
    player.linesCleared += linesCleared;
    render.resetInterval();
    player.resolveAttackLines();
    player.reset();
    player.allowHold();
    if(opponent) opponent.attackedLines += linesCleared;
  }
  render.resetDropCounter();
  //losing condition
  if(collided(grid, player)){
    player.allowHold();
    player.resetHeldPiece();
    grid.forEach(row => row.fill(0));
  }
};

export default playerDrop;
