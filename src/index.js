import _ from 'lodash';
import Game from './game';
import {one_player_control, two_player_control} from './player/control';

export let game = new Game();
export let player1 = game.getPlayer(1);
export let player2 = game.getPlayer(2);
export let render1 = game.getRender(1);
export let render2 = game.getRender(2);

function component() {
  var element = document.createElement('div');
  two_player_control();
  game.startGame();
  return element;
}

document.body.appendChild(component());
