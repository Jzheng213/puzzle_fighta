import { player1, render1, player2} from '../index';
import playerDrop from './playerDrop';

const control = () => {
  document.addEventListener('keydown', event => {
    if([16, 32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) event.preventDefault();

    if(render1.dropInterval === 0) return null;
    switch (event.keyCode) {
    case 16:
      player1.holdPiece();
      break;
    case 37:
      player1.move(-1);
      break;
    case 39:
      player1.move(1);
      break;
    case 40:
      playerDrop(player1.grid, player1, render1, player2);
      break;
    case 38:
      player1.rotate();
      break;
    case 32:
      render1.autoDrop();
      break;
    default:
    }
  });
};

export default control;
