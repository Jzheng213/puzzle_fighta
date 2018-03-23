import { player1, render1, player2, render2} from '../index';
import playerDrop from './playerDrop';

export const one_player_control = () => {
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

export const two_player_control = () => {
  document.addEventListener('keydown', event => {
    if([70, 37, 72, 39, 71, 40, 84, 38, 87, 32, 188, 81].indexOf(event.keyCode) > -1) event.preventDefault();

    if(render1.dropInterval !== 0){
      switch (event.keyCode) {
      case 70:
        player1.move(-1);
        break;
      case 72:
        player1.move(1);
        break;
      case 71:
        playerDrop(player1.grid, player1, render1, player2);
        break;
      case 84:
        player1.rotate();
        break;
      case 87:
        render1.autoDrop();
        break;
      case 81:
        player1.holdPiece();
        break;
      default:
      }
    }

    if(render2.dropInterval !==0){
      switch (event.keyCode) {
      case 37:
        player2.move(-1);
        break;
      case 39:
        player2.move(1);
        break;
      case 40:
        playerDrop(player2.grid, player2, render2, player1);
        break;
      case 38:
        player2.rotate();
        break;
      case 77:
        render2.autoDrop();
        break;
      case 78:
        player2.holdPiece();
        break;
      default:
      }
    }

  });
};
