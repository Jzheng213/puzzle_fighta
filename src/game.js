import { canvas, context } from './canvas';
import board from './board/board';
import { render } from './util/render';


const game = () => {
  context.scale(20, 20);

  board();
  render();

  return null;
};

export default game;
