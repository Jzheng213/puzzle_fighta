import player from './player';
import playerDrop from './playerDrop';
import { grid } from '../util/render';
import playerMove from './playerMove';
import playerRotate from './playerRotate';

const control = () => {
  document.addEventListener('keydown', event => {
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
    default:
    }
  });
};

export default control;
