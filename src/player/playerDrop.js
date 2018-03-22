import { stick, collided } from '../util/collision';
import { resetDropCounter, resetInterval } from '../util/render';
import playerReset from './playerReset';
import lineClear from '../board/board_clear';

const playerDrop = (grid, player) => {
  player.pos.y++;
  if(collided(grid, player)){
    player.pos.y--;
    stick(grid, player);
    lineClear();
    resetInterval();
    playerReset();
  }
  resetDropCounter();
  if(collided(grid, player)){
    grid.forEach(row => row.fill(0));
  }
};

export default playerDrop;
