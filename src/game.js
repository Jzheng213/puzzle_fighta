import board from './board/board';
import { Render } from './util/render';
import Player from './player/player';
import newGrid from './board/board_items';

class Game {
  constructor(){
    this.board = board();
    this.player1 = new Player();
    this.grid = newGrid();
    this.render = new Render(this.grid, this.player1);
  }

  startGame(){
    this.render.start();
  }

  getPlayerOne(){
    return this.player1;
  }
  getPlayerGrid(){
    return this.grid;
  }

}

export default Game;
