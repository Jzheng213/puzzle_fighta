import _ from 'lodash';
import Game from './game';
import control from './player/control';

export let game = new Game();
export let player1 = game.getPlayerOne();
export let grid1 = game.getPlayerGrid();

function component() {
  var element = document.createElement('div');
  control();
  game.startGame();
  return element;
}

document.body.appendChild(component());
