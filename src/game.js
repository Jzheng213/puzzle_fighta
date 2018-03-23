import { canvasP1, canvasP2, contextP1, contextP2} from './canvas';
import { Render } from './util/render';
import Player from './player/player';
import newGrid from './board/board_items';

class Game {
  constructor(){
    this.grid1 = newGrid();
    this.grid2 = newGrid();
    this.player1 = new Player(canvasP1, contextP1, this.grid1);
    this.player2 = new Player(canvasP2, contextP2, this.grid2);
    this.render1 = new Render(this.grid1, this.player1, this.player2);
    this.render2 = new Render(this.grid2, this.player2, this.player1);

  }

  startGame(backgroundMusic){
    this.render1.start();
    this.render2.start();
    backgroundMusic.play();
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
