import drawPiece from './draw_piece';
import {drawBoard, drawBorder} from './draw_board';
import { scale } from './settings';
import drawQueue from './draw_queue';
import drawHold from './draw_hold';

const draw = (grid, player) => {
  const [startX, startY] = [100, 100];

  drawBoard(startX, startY, player.canvas, player.context);
  drawHold(startX, startY, player.context);
  drawQueue(startX, startY, player.context);
  drawPiece(player.getHeldPiece(),{x:0, y:0},{x:(6)/ scale, y:(startY + 5) / scale}, player.context);
  drawPiece(player.getQueue(),{x:0, y:0},{x:(startX + 255)/ scale, y:(startY + 5) / scale}, player.context);
  drawPiece(grid, {x:0, y:0}, {x:startX / scale, y:startY / scale}, player.context);
  drawPiece(player.piece, player.pos, {x:startX / scale, y:startY / scale}, player.context);
  drawBorder(startX, startY, player.canvas, player.context);
};

export default draw;
