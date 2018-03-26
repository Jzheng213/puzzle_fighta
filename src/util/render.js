import draw from './draw';
import { dropSound } from '../audios/audios';
import playerDrop from '../player/playerDrop';

export class Render{
  constructor(player, opponent = null){
    this.player = player;
    this.dropInterval = 1000;
    this.prevTime = 0;
    this.dropCounter = 0;
    this.opponent = opponent;
    this.pause = false;

    this.start = this.start.bind(this);
    this.resetInterval = this.resetInterval.bind(this);
    this.resetDropCounter = this.resetDropCounter.bind(this);
    this.autoDrop = this.autoDrop.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.holdDropInterval = this.holdDropInterval.bind(this);
  }

  resetDropCounter(){
    this.dropCounter = 0;
  }

  holdDropInterval(){
    this.dropInterval = 0;
  }
  resetInterval(){
    this.dropInterval = 1000;
  }

  autoDrop(){
    this.dropInterval = 0;
    let shadow = this.player.getShadow()
    this.player.pos = shadow.pos;
    // dropSound.play();
  }

  togglePause(){
    this.pause = !this.pause;
    if (!this.pause) this.start();
  }

  start(time = 0){
    const deltaTime = time - this.prevTime;
    this.prevTime = time;
    this.dropCounter += deltaTime;
    if (this.dropCounter > this.dropInterval){

      playerDrop(this.player.grid, this.player, this, this.opponent);
    }
    draw(this.player.grid, this.player, true);
    if (!this.pause){
      requestAnimationFrame(this.start);
    }
  }
}
