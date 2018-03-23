import drawPiece from './draw_piece';
import drawBoard from '../board/board';
import { scale } from './settings';
import drawQueue from './draw_queue';
import drawHold from './draw_hold';

const draw = (grid, player) => {
  const [startX, startY] = [100, 100];
  drawBoard(startX, startY);
  drawHold(startX, startY);
  drawQueue(startX, startY);
  drawPiece(player.getHeldPiece(),{x:0, y:0},{x:(6)/ scale, y:(startY + 5) / scale});
  drawPiece(player.getQueue(),{x:0, y:0},{x:(startX + 255)/ scale, y:(startY + 5) / scale});
  drawPiece(grid, {x:0, y:0}, {x:startX / scale, y:startY / scale});
  drawPiece(player.piece, player.pos, {x:startX / scale, y:startY / scale});
};

export default draw;
