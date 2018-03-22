import { canvas, context } from './canvas';
import board from './board/board';
import { render } from './util/render';


const game = () => {

  board();
  render();

  return null;
};

export default game;
