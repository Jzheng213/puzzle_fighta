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
    game.pauseGame();
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
    game.pauseGame();
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

const letter = (letter) => {
  let container = $('<div>');
  let key = $('<div>');
  key.addClass('key');
  let span = $('<span>');
  container.addClass('key-container');
  $(container).append(key);
  $(container).append(span);
  span.html(Object.values(letter)[0]);
  key.html(Object.keys(letter)[0]);

  return container[0];
};

document.body.appendChild(component());


const tetrisContainer = document.getElementById('option-list');
tetrisContainer.appendChild(btnStartGame());
tetrisContainer.appendChild(btnPauseGame());
tetrisContainer.appendChild(btnOptions());
tetrisContainer.appendChild(btnQuitGame());

const scoreBoard = document.getElementById('score-board');
scoreBoard.appendChild(record());

const p1Container = document.getElementById('tetris-p1-container');
const p2Container = document.getElementById('tetris-p2-container');
p1Container.appendChild(playerLives('player1'));
p2Container.appendChild(playerLives('player2'));

let themeVolControl = document.getElementById('theme-music-volume');
themeVolControl.oninput = function(){
  const themeMusic = document.getElementsByClassName('theme-song');
  themeMusic[0].volume = this.value /100;
};

let themeMuteControl = document.getElementById('theme-music-mute');
themeMuteControl.onclick = function(){
  const themeMusic = document.getElementsByClassName('theme-song');
  themeMusic[0].muted = !themeMusic[0].muted;
  let color = $(this).css('background-color') === 'rgb(102, 102, 102)' ? '#329bf2' : 'rgb(102, 102, 102)';
  this.style.background = color;
};

let soundVolControl = document.getElementById('sound-volume');
soundVolControl.oninput = function(){
  const sound = document.getElementsByClassName('tetris-sound');
  for(let i =0; i< sound.length; i++){
    sound[i].volume = this.value /100;
  }
};

let soundMuteControl = document.getElementById('sound-mute');
soundMuteControl.onclick = function(){
  const sound = document.getElementsByClassName('tetris-sound');
  for(let i =0; i< sound.length; i++){
    sound[i].muted = !sound[i].muted;
  }
  let color = $(this).css('background-color') === 'rgb(102, 102, 102)' ? '#329bf2' : 'rgb(102, 102, 102)';
  this.style.background = color;
};


let player1Control = [{'Q': 'Hold'},{'W': 'Instant Drop'}, {'T': 'Rotate'}, {'F': 'Left'}, {'H': 'Right'}, {'G': 'SoftDrop'}];
let player2Control = [{'N': 'Hold'},{'M': 'Instant Drop'}, {'&#8593;': 'Rotate'}, {'&#8592': 'Left'}, {'&#8594;': 'Right'}, {'&#8595;': 'SoftDrop'}];


let player1ControlContainer = document.getElementById('player1-control-container')
player1Control.forEach((el) =>{
  player1ControlContainer.appendChild((letter(el)));
});

let player2ControlContainer = document.getElementById('player2-control-container')
player2Control.forEach((el) =>{
  player2ControlContainer.appendChild((letter(el)));
});
document.getElementById('resume-button-container').appendChild(btnResume());
