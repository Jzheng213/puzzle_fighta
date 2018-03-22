import rotate from '../pieces/rotate';
import player from './player';
import { collided } from '../util/collision';
import { grid } from '../util/render';

const playerRotate = () => {
  let offset = 1;
  player.piece = rotate(player.piece);
  while(collided(grid, player)){
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if(offset > player.piece[0].length){
      rotate(player.matrix, true);
      return;
    }
  }
};

export default playerRotate;
