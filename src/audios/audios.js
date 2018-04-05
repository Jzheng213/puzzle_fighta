import Sound from './sound';

export const themeSong2 = new Sound('./asset/sounds/theme.mp3', true);
export const themeSong = new Sound('./asset/sounds/BattleMp.MP3', true, 'theme-song');
export const moveSound = new Sound('./asset/sounds/move.mp3', false, 'tetris-sound');
export const dropSound = new Sound('./asset/sounds/se/harddrop.wav', false, 'tetris-sound');
export const gameOverSound = new Sound('./asset/sounds/se/gameover.wav', false, 'tetris-sound');
export const lostLife = new Sound('./asset/sounds/se/died.wav', false, 'tetris-sound');
export const rotateSound = new Sound('./asset/sounds/rotate.mp3', false, 'tetris-sound');
export const tetrisSound = new Sound('./asset/sounds/tetris.mp3', false, 'tetris-sound');

const erase1 = new Sound('./asset/sounds/se/erase1.wav', false, 'tetris-sound');
const erase2 = new Sound('./asset/sounds/se/erase2.wav', false, 'tetris-sound');
const erase3 = new Sound('./asset/sounds/se/erase3.wav', false, 'tetris-sound');
const erase4 = new Sound('./asset/sounds/se/erase1.wav', false, 'tetris-sound');


const combo1 = new Sound('./asset/sounds/se/combo1.wav', false, 'tetris-sound');
const combo2 = new Sound('./asset/sounds/se/combo2.wav', false, 'tetris-sound');
const combo3 = new Sound('./asset/sounds/se/combo3.wav', false, 'tetris-sound');
const combo4 = new Sound('./asset/sounds/se/combo4.wav', false, 'tetris-sound');
const combo5 = new Sound('./asset/sounds/se/combo5.wav', false, 'tetris-sound');
const combo6 = new Sound('./asset/sounds/se/combo6.wav', false, 'tetris-sound');
const combo7 = new Sound('./asset/sounds/se/combo7.wav', false, 'tetris-sound');
const combo8 = new Sound('./asset/sounds/se/combo8.wav', false, 'tetris-sound');
const combo9 = new Sound('./asset/sounds/se/combo9.wav', false, 'tetris-sound');
const combo10 = new Sound('./asset/sounds/se/combo10.wav', false, 'tetris-sound');
const combo11 = new Sound('./asset/sounds/se/combo11.wav', false, 'tetris-sound');
const combo12 = new Sound('./asset/sounds/se/combo12.wav', false, 'tetris-sound');
const combo13= new Sound('./asset/sounds/se/combo13.wav', false, 'tetris-sound');
const combo14 = new Sound('./asset/sounds/se/combo14.wav', false, 'tetris-sound');
const combo15 = new Sound('./asset/sounds/se/combo15.wav', false, 'tetris-sound');
const combo16 = new Sound('./asset/sounds/se/combo16.wav', false, 'tetris-sound');
const combo17 = new Sound('./asset/sounds/se/combo17.wav', false, 'tetris-sound');
const combo18 = new Sound('./asset/sounds/se/combo18.wav', false, 'tetris-sound');
const combo19 = new Sound('./asset/sounds/se/combo19.wav', false, 'tetris-sound');
const combo20 = new Sound('./asset/sounds/se/combo20.wav', false, 'tetris-sound');


export const erasePlay = (linesCleared) => {
  switch (linesCleared) {
  case 1:
    erase1.play();
    break;
  case 2:
    erase2.play();
    break;
  case 3:
    erase3.play();
    break;
  case 4:
    erase4.play();
    break;
  default:
  }

};

export const comboPlay = (count) =>{
  switch (count) {
  case 1:
  combo1.play();
  break;
  case 2:
  combo2.play();
  break;
  case 3:
  combo3.play();
  break;
  case 4:
  combo4.play();
  break;
  case 5:
  combo5.play();
  break;
  case 6:
  combo6.play();
  break;
  case 7:
  combo7.play();
  break;
  case 8:
  combo8.play();
  break;
  case 9:
  combo9.play();
  break;
  case 10:
  combo10.play();
  break;
  case 11:
  combo11.play();
  break;
  case 12:
  combo12.play();
  break;
  case 13:
  combo13.play();
  break;
  case 14:
  combo14.play();
  break;
  case 15:
  combo15.play();
  break;
  case 16:
  combo16.play();
  break;
  case 17:
  combo17.play();
  break;
  case 18:
  combo18.play();
  break;
  case 19:
  combo19.play();
  break;
  case 20:
  combo20.play();
  break;
  default:
}


}
