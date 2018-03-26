import {getRandomPiece, resetPiece } from '../pieces/pieces';
import { collided, stick } from '../util/collision';
import rotate from '../pieces/rotate';
import sendTiles from '../board/send_tiles';

class Player{
  constructor(canvas, context, grid){
    this.canvas = canvas;
    this.context = context;
    this.grid = grid;
    this.piece = [];
    this.heldPiece = [];
    this.canHold = true;
    this.linesCleared = 0;
    this.attackedLines = 0;
    this.pos = {y:0, x:5};
    this.queue = new Array(4);
    this.reset = this.reset.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear(){
    this.piece = [];
    this.heldPiece = [];
    this.canHold = true;
    this.linesCleared = 0;
    this.attackedLines = 0;
    this.pos = {y:0, x:5};
    this.queue = new Array(4);
  }

  move(dir){
    this.pos.x += dir;
    if(collided(this.grid, this)){
      this.pos.x -= dir;
    }
  }

  allowHold(){
    this.canHold = true;
  }

  resetHeldPiece(){
    this.heldPiece = [];
  }

  getHeldPiece(){
    return this.heldPiece[0] || [];
  }

  resolveAttackLines(){
    sendTiles(this.grid, this.attackedLines);
    this.attackedLines = 0;
  }

  newQueue(){
    this.piece = getRandomPiece();
    for(let i = 0; i < this.queue.length; i++){
      this.queue[i] = getRandomPiece();
    }
  }

  getQueue(){
    let output = [];
    let valueHolder = {pos:{x:0,y:0},piece:null};
    this.queue.forEach((el) => {
      valueHolder.piece = el;
      let temp =
        [ [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0]];
      stick(temp, valueHolder);

      output = temp.concat(output);
    });
    return output;
  }

  getNextPiece(){
    this.piece = this.queue.pop();
    this.queue.unshift(getRandomPiece());
  }

  holdPiece(){
    if(!this.canHold) return;

    if(this.heldPiece.length === 0){
      this.heldPiece.unshift(resetPiece(this.piece));
      this.reset();
    }else{
      this.heldPiece.unshift(resetPiece(this.piece));
      this.reset(this.heldPiece.pop());
    }
    this.canHold = false;
  }

  reset(piece = null){
    if (!piece){
      this.getNextPiece();
    }else{
      this.piece = piece;
    }
    this.pos.x = 5;
    this.pos.y = 0;
  }

  rotate(){
    let offset = 1;
    let origPosX = this.pos.x;
    let origPosY = this.pos.y;
    this.piece = rotate(this.piece);
    while(collided(this.grid, this)){

      if(this.pos.y === origPosY && offset === 3){
        this.pos.y -= Math.floor(this.piece.length / 2);
        continue;
      }else{
        this.pos.y = origPosY;
      }

      this.pos.x += offset;
      if(offset > this.piece[0].length){
        this.pos.x = origPosX;
        this.pos.y = origPosY;
        this.piece = rotate(this.piece, true);
        return;
      }
      offset = -(offset + (offset > 0 ? 1 : -1));
    }
  }
}

export default Player;
