import { stick, collided } from '../util/collision';
import lineClear from '../board/board_clear';
import { gameOverSound, lostLife, erasePlay, comboPlay } from '../audios/audios';
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
    player.combo === 0 ? erasePlay(linesCleared) : comboPlay(player.combo);

    player.linesCleared += linesCleared;
    render.resetInterval();
    player.reset();
    player.allowHold();

    if(opponent) {
      let attackLines = calculateAttack(linesCleared, player.combo, player.wasTetris());
      player.attackedLines = Math.max(player.attackedLines - attackLines, 0);
      opponent.attackedLines += Math.max(attackLines - player.attackedLines, 0);
    }
    player.resolveAttackLines();
    player.incrementCombo(linesCleared);
    player.prevLineCleared = linesCleared;
  }
  render.resetDropCounter();

  //losing condition
  if(collided(grid, player)){
    player.attackedLines = 0;
    player.allowHold();
    player.resetHeldPiece();
    grid.forEach(row => row.fill(0));
    player.lives--;
    player.lives === 0 ? gameOverSound.play() : lostLife.play();
    game.updateShowLives();
  }
};

export default playerDrop;
