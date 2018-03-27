import Sound from './sound';

export const themeSong2 = new Sound('./asset/sounds/theme.mp3', true);
export const themeSong = new Sound('./asset/sounds/BattleMp.MP3', true, 'theme-song');
export const moveSound = new Sound('./asset/sounds/move.mp3', false, 'tetris-sound');
export const dropSound = new Sound('./asset/sounds/se/harddrop.wav', false, 'tetris-sound');
export const gameOverSound = new Sound('./asset/sounds/se/gameover.wav', false, 'tetris-sound');
export const lostLife = new Sound('./asset/sounds/se/died.wav', false, 'tetris-sound');
export const lineSound = new Sound('./asset/sounds/line.mp3', false, 'tetris-sound');
export const rotateSound = new Sound('./asset/sounds/rotate.mp3', false, 'tetris-sound');
export const tetrisSound = new Sound('./asset/sounds/tetris.mp3', false, 'tetris-sound');
