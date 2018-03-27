import _ from 'lodash';
import Game from './game';
import {one_player_control, two_player_control} from './player/control';
import { themeSong } from './audios/audios';


export let game = new Game();
export let player1 = game.getPlayer(1);
export let player2 = game.getPlayer(2);
export let render1 = game.getRender(1);
export let render2 = game.getRender(2);

const component = () => {
  var element = document.createElement('div');
  two_player_control();
  game.showBoard();
  return element;
};



const btnStartGame = () => {
  let startGameBtn = document.createElement('btn');
  startGameBtn.setAttribute('class', 'game-button');
  startGameBtn.setAttribute('id', 'start-button');

  startGameBtn.innerHTML = 'Start';
  startGameBtn.addEventListener('click', () =>{
    game.startGame(themeSong);
  });
  return startGameBtn;
};

const btnPauseGame = () => {
  let pauseGameBtn = document.createElement('btn');
  pauseGameBtn.setAttribute('class', 'game-button');
  pauseGameBtn.setAttribute('id', 'pause-button');
  pauseGameBtn.innerHTML = 'Pause';
  pauseGameBtn.addEventListener('click', () =>{
    game.pauseGame();
  });
  return pauseGameBtn;
};

const btnQuitGame = () => {
  let quitGame = document.createElement('btn');
  quitGame.setAttribute('class', 'game-button');
  quitGame.setAttribute('id', 'quit-button');
  quitGame.innerHTML = 'Quit';
  quitGame.addEventListener('click', () =>{
    game.resetGame(themeSong);
  });
  return quitGame;
};

const btnOptions = () => {
  let option = document.createElement('btn');
  option.setAttribute('class', 'game-button');
  option.setAttribute('id', 'option-button');
  option.innerHTML = 'Options';
  option.addEventListener('click', () =>{
    let modal = document.getElementById('option-modal');
    modal.style.display = 'flex';
  });
  return option;
};



const btnResume = () => {
  let resume = document.createElement('btn');
  resume.setAttribute('class', 'game-button');
  resume.setAttribute('id', 'resume-button');
  resume.innerHTML = 'Resume';
  resume.addEventListener('click', () =>{
    let modal = document.getElementById('option-modal');
    modal.style.display = 'none';
  });
  return resume;
};

const record = () => {
  let record = document.createElement('div');
  record.setAttribute('class', 'record');
  record.setAttribute('id', 'record');
  record.innerHTML = '0 - 0';
  return record;
};

const playerLives = (player) => {
  let lives = document.createElement('div');
  lives.setAttribute('class', 'player-lives');
  lives.setAttribute('id', `${player}-lives`);
  lives.innerHTML = 'Lives 2';
  return lives;
};

document.body.appendChild(component());


const tetrisContainer = document.getElementById('option-list');
tetrisContainer.appendChild(btnStartGame());
tetrisContainer.appendChild(btnPauseGame());
tetrisContainer.appendChild(btnOptions());
tetrisContainer.appendChild(btnQuitGame());
tetrisContainer.appendChild(record());

const optionModal = document.getElementById('inner-modal-content');
optionModal.appendChild(btnResume());

const p1Container = document.getElementById('tetris-p1-container');
const p2Container = document.getElementById('tetris-p2-container');
p1Container.appendChild(playerLives('player1'));
p2Container.appendChild(playerLives('player2'));
