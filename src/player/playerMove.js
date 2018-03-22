import player from './player';
import { collided } from '../util/collision';
import { grid } from '../util/render';

const playerMove = (dir) => {
  player.pos.x += dir;
  if(collided(grid, player)){
    player.pos.x -= dir;
  }
};

export default playerMove;
