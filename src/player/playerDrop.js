import { stick, collided } from '../util/collision';
import lineClear from '../board/board_clear';
import { gameOverSound, lostLife, erase } from '../audios/audios';
import { game } from '../index';
import { calculateAttack } from '../board/send_tiles';

const playerDrop = (grid, player, render, opponent = null) => {
  let linesCleared = 0;
  player.pos.y++;
  //piece sticks
  if(collided(grid, player)){
    player.pos.y--;
    stick(grid, player);

    linesCleared = lineClear(grid);
    if (linesCleared) erase(linesCleared);

    player.linesCleared += linesCleared;
    render.resetInterval();
    player.resolveAttackLines();
    player.reset();
    player.allowHold();

    if(opponent) {
      opponent.attackedLines += calculateAttack(linesCleared, player.combo, player.wasTetris());
    }
    player.incrementCombo(linesCleared);
    player.prevLineCleared = linesCleared;
  }
  render.resetDropCounter();

  //losing condition
  if(collided(grid, player)){
    player.allowHold();
    player.resetHeldPiece();
    grid.forEach(row => row.fill(0));
    player.lives--;
    player.lives === 0 ? gameOverSound.play() : lostLife.play();
    game.updateShowLives();
  }
};

export default playerDrop;
