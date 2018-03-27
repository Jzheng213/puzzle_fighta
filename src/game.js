import { canvasP1, canvasP2, contextP1, contextP2} from './canvas';
import { Render } from './util/render';
import Player from './player/player';
import newGrid from './board/board_items';
import draw from './util/draw';
import { themeSong } from './audios/audios';

class Game {
  constructor(){
    this.grid1 = newGrid();
    this.grid2 = newGrid();
    this.player1 = new Player(canvasP1, contextP1, this.grid1, '#dc402b');
    this.player2 = new Player(canvasP2, contextP2, this.grid2, '#2689e1');
    this.render1 = new Render(this.player1, this.player2);
    this.render2 = new Render(this.player2, this.player1);
    this.record = {player1: 0, player2: 0};

    this.pauseGame = this.pauseGame.bind(this);
    this.updateShowLives = this.updateShowLives.bind(this);
    this.updateRecord = this.updateRecord.bind(this);
  }

  showBoard(){
    draw(this.grid1, this.player1);
    draw(this.grid2, this.player2);
  }

  updateShowLives(){
    let p1Lives = document.getElementById('player1-lives');
    let p2Lives = document.getElementById('player2-lives');
    p1Lives.innerHTML = 'Lives ' + this.player1.lives;
    p2Lives.innerHTML = 'Lives ' + this.player2.lives;
  }

  updateRecord(){
    let record = document.getElementById('record');
    record.innerHTML = this.record.player1 + ' - ' + this.record.player2;
  }
  startGame(backgroundMusic){
    this.player1.newQueue();
    this.player2.newQueue();

    this.render1.pause = false;
    this.render2.pause = false;
    this.updateShowLives();
    this.render1.start();
    this.render2.start();
    backgroundMusic.play();
  }

  resetGame(backgroundMusic){
    this.pauseGame();
    this.player1.grid = newGrid();
    this.player2.grid = newGrid();
    this.player1.lives = 2;
    this.player2.lives = 2;
    this.player1.clear();
    this.player2.clear();
    this.showBoard();
    backgroundMusic.stop();
  }

  pauseGame(){
    this.render1.togglePause();
    this.render2.togglePause();
  }

  getPlayer(num){
    if(num === 1) return this.player1;
    return this.player2;
  }
  getRender(num){
    if(num === 1) return this.render1;
    return this.render2;
  }

  isGameOver(){
    if(this.player1.lives === 0){
      this.record.player2++;
      this.resetGame(themeSong);
    }else if (this.player2.lives === 0) {
      this.record.player1++;
      this.resetGame(themeSong);
    }
    this.updateRecord();
  }
}

export default Game;
