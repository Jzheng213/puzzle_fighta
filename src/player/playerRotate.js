import rotate from '../pieces/rotate';
import player from './player';
import { collided } from '../util/collision';
import { grid } from '../util/render';

const playerRotate = () => {
  let offset = 1;
  let origPosX = player.pos.x;
  let origPosY = player.pos.y;
  player.piece = rotate(player.piece);
  while(collided(grid, player)){

    if(player.pos.y === origPosY && offset === 3){
      player.pos.y -= Math.floor(player.piece.length / 2);
      continue;
    }else{
      player.pos.y = origPosY;
    }

    player.pos.x += offset;
    if(offset > player.piece[0].length){
      player.pos.x = origPosX;
      player.pos.y = origPosY;
      player.piece = rotate(player.piece, true);
      return;
    }
    offset = -(offset + (offset > 0 ? 1 : -1));
  }
};

export default playerRotate;
