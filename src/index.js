import _ from 'lodash';
import Game from './game';
import {one_player_control, two_player_control} from './player/control';
import { themeSong } from './audios/audios';

export let game = new Game();
export let player1 = game.getPlayer(1);
export let player2 = game.getPlayer(2);
export let render1 = game.getRender(1);
export let render2 = game.getRender(2);
window.pause = game.pauseGame;

const component = () => {
  var element = document.createElement('div');
  two_player_control();
  game.showBoard();
  return element;
};

const btnStartGame = () => {
  let startGameBtn = document.createElement('btn');
  startGameBtn.setAttribute('class', 'game-button');
  startGameBtn.setAttribute('id', 'startGameBtn');
  startGameBtn.innerHTML = 'Start Game';
  startGameBtn.addEventListener('click', () =>{
    game.startGame(themeSong);
  });
  return startGameBtn;
};

const btnPauseGame = () => {
  let pauseGameBtn = document.createElement('btn');
  pauseGameBtn.setAttribute('class', 'game-button');
  pauseGameBtn.setAttribute('id', 'pause-game-button');
  pauseGameBtn.innerHTML = 'Pause Game';
  pauseGameBtn.addEventListener('click', () =>{
    game.pauseGame();
  });
  return pauseGameBtn;
};

const btnQuitGame = () => {
  let quitGame = document.createElement('btn');
  quitGame.setAttribute('class', 'game-button');
  quitGame.setAttribute('id', 'quit-game-button');
  quitGame.innerHTML = 'Forfeit Game';
  quitGame.addEventListener('click', () =>{
    game.resetGame();
  });
  return quitGame;
};
const btnOptions = () => {
  let option = document.createElement('btn');
  option.setAttribute('class', 'game-button');
  option.setAttribute('id', 'option-button');
  option.innerHTML = 'Options';
  option.addEventListener('click', () =>{

  });
  return option;
};


document.body.appendChild(component());
document.body.appendChild(btnStartGame());
document.body.appendChild(btnPauseGame());
document.body.appendChild(btnQuitGame());
document.body.appendChild(btnOptions());
