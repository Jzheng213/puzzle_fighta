import draw from './draw';
import player from '../player/player';
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

export const render = (time = 0) => {
  const deltaTime = time - prevTime;
  prevTime = time;
  dropCounter += deltaTime;
  if (dropCounter > dropInterval){
    playerDrop(grid, player);
  }

  draw();
  requestAnimationFrame(render);
};
