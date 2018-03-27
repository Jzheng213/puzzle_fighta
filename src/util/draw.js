import drawPiece from './draw_piece';
import {drawBoard, drawBorder} from './draw_board';
import { scale } from './settings';
import drawQueue from './draw_queue';
import drawHold from './draw_hold';

const draw = (grid, player) => {
  const [startX, startY, shadow] = [125, 100, player.getShadow()];

  drawBoard(startX, startY, player.canvas, player.context);
  drawHold(startX - 100, startY + 25, player.context);
  drawQueue(startX, startY + 25, player.context);

  drawPiece(shadow.piece, shadow.pos, {x:startX / scale, y:startY / scale}, player.context);
  drawPiece(player.piece, player.pos, {x:startX / scale, y:startY / scale}, player.context);
  drawPiece(grid, {x:0, y:0}, {x:startX / scale, y:startY / scale}, player.context);

  drawPiece(player.getHeldPiece(),{x:0, y:0},{x:(startX - 100 + 4)/ scale, y:(startY + 35) / scale}, player.context);
  drawPiece(player.getQueue(),{x:0, y:0},{x:(startX + 279)/ scale, y:(startY + 35) / scale}, player.context);
  drawBorder(startX, startY, player.canvas, player.context,player.color);
};

export default draw;
