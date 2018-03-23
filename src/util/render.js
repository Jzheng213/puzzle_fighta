import draw from './draw';
import { dropSound } from '../audios/audios';
import playerDrop from '../player/playerDrop';

export class Render{
  constructor(grid, player, opponent = null){
    this.grid = grid;
    this.player = player;
    this.dropInterval = 1000;
    this.prevTime = 0;
    this.dropCounter = 0;
    this.opponent = opponent;

    this.start = this.start.bind(this);
    this.resetInterval = this.resetInterval.bind(this);
    this.resetDropCounter = this.resetDropCounter.bind(this);
    this.autoDrop = this.autoDrop.bind(this);

  }

  resetDropCounter(){
    this.dropCounter = 0;
  }

  resetInterval(){
    this.dropInterval = 1000;
  }

  autoDrop(){
    this.dropInterval = 0;
    dropSound.play();
  }

  start(time = 0){
    const deltaTime = time - this.prevTime;
    this.prevTime = time;
    this.dropCounter += deltaTime;
    if (this.dropCounter > this.dropInterval){

      playerDrop(this.grid, this.player, this, this.opponent);
    }
    draw(this.grid, this.player);

    requestAnimationFrame(this.start);
  }
}
