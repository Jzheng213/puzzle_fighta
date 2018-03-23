import { player1, grid1 } from '../index';
import playerDrop from './playerDrop';
import { autoDrop, getDropInterval } from '../util/render';

const control = () => {
  document.addEventListener('keydown', event => {
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) event.preventDefault();
    if(getDropInterval() === 0) return null;
    switch (event.keyCode) {
    case 37:
      player1.move(-1);
      break;
    case 39:
      player1.move(1);
      break;
    case 40:
      playerDrop(grid1, player1);
      break;
    case 38:
      player1.rotate();
      break;
    case 32:
      autoDrop();
      break;
    default:
    }
  });
};

export default control;
