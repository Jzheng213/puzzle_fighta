import draw from './draw';
import newGrid from '../board/board_items';
import playerDrop from '../player/playerDrop';


let dropInterval = 1000;
let prevTime = 0;
let dropCounter = 0;

export const grid = newGrid();

export const resetDropCounter = () => {
  dropCounter = 0;
};

export const resetInterval = () => {
  dropInterval = 1000;
};

export const autoDrop = () => {
  dropInterval = 0;
};

export const getDropInterval = () => {

  return dropInterval;
};

export class Render{
  constructor(grid, player){
    this.grid = grid;
    this.player = player;
    this.start = this.start.bind(this);
  }

  start(time = 0){
    const deltaTime = time - prevTime;
    prevTime = time;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval){

      playerDrop(this.grid, this.player);
    }
    draw(this.grid, this.player);
    requestAnimationFrame(this.start);
  }
}
