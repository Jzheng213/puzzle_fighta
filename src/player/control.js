import player from './player';
import playerDrop from './playerDrop';
import { grid, autoDrop, getDropInterval } from '../util/render';
import playerMove from './playerMove';
import playerRotate from './playerRotate';

const control = () => {
  document.addEventListener('keydown', event => {
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) event.preventDefault();
    if(getDropInterval() === 0) return null;
    switch (event.keyCode) {
    case 37:
      playerMove(-1);
      break;
    case 39:
      playerMove(1);
      break;
    case 40:
      playerDrop(grid, player);
      break;
    case 38:
      playerRotate();
      break;
    case 32:
      autoDrop();
      break;
    default:
    }
  });
};

export default control;
