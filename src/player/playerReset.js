import player from './player';
import { getRandomPiece } from '../pieces/pieces';

const playerReset = () => {
  player.piece = getRandomPiece();
  player.pos.y = 0;
  player.pos.x = 5;
};

export default playerReset;
