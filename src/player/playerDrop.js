import { stick, collided } from '../util/collision';
import { resetDropCounter, resetInterval } from '../util/render';
import lineClear from '../board/board_clear';

const playerDrop = (grid, player) => {
  player.pos.y++;
  //piece sticks
  if(collided(grid, player)){
    player.pos.y--;
    stick(grid, player);
    lineClear(grid);
    resetInterval();
    player.reset();
    player.allowHold();
  }

  resetDropCounter();
  //losing condition
  if(collided(grid, player)){
    player.allowHold();
    player.resetHeldPiece();
    grid.forEach(row => row.fill(0));
  }
};

export default playerDrop;
