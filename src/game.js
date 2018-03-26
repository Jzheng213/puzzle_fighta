import { canvasP1, canvasP2, contextP1, contextP2} from './canvas';
import { Render } from './util/render';
import Player from './player/player';
import newGrid from './board/board_items';
import draw from './util/draw';

class Game {
  constructor(){
    this.grid1 = newGrid();
    this.grid2 = newGrid();
    this.player1 = new Player(canvasP1, contextP1, this.grid1);
    this.player2 = new Player(canvasP2, contextP2, this.grid2);
    this.render1 = new Render(this.player1, this.player2);
    this.render2 = new Render(this.player2, this.player1);

    this.pauseGame = this.pauseGame.bind(this);
  }

  showBoard(){
    draw(this.grid1, this.player1);
    draw(this.grid2, this.player2);
  }

  startGame(backgroundMusic){
    this.player1.newQueue();
    this.player2.newQueue();
    this.render1.pause = false;
    this.render2.pause = false;
    this.render1.start();
    this.render2.start();
    backgroundMusic.play();
  }

  resetGame(backgroundMusic){
    this.pauseGame();
    this.player1.grid = newGrid();
    this.player2.grid = newGrid();
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
}

export default Game;
