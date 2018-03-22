import _ from 'lodash';
import game from './game';

//test
import player from './player/player';
import control from './player/control';
import { stick } from './util/collision';
import { grid } from  './util/render';

window.grid = grid;
window.stick = stick;
window.player = player;

function component() {
  var element = document.createElement('div');
  control();
  game();
  return element;
}

document.body.appendChild(component());
