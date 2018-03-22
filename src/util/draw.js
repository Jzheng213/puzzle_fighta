import player from '../player/player';
import drawPiece from './draw_piece';
import drawBoard from '../board/board';
import { grid } from './render';

const draw = () => {
  drawBoard();

  drawPiece(grid, {x:0, y:0});
  drawPiece(player.piece, player.pos);
};

export default draw;
