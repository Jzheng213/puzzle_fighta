export const T = 'T';
export const O = 'O';
export const L = 'L';
export const J = 'J';
export const I = 'I';
export const Z = 'Z';
export const S = 'S';

const TPiece = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 0, 0],
];

const OPiece = [
  [2, 2],
  [2, 2],
];

const LPiece = [
  [0, 0, 3],
  [3, 3, 3],
  [0, 0, 0],
];

const JPiece = [
  [4, 0, 0],
  [4, 4, 4],
  [0, 0, 0],
];

const IPiece = [
  [0, 0, 0, 0],
  [5, 5, 5, 5],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const ZPiece = [
  [6, 6, 0],
  [0, 6, 6],
  [0, 0, 0],
];

const SPiece = [
  [0, 7, 7],
  [7, 7, 0],
  [0, 0, 0],
];

const pieces = [T, O, L, J, I, Z, S];

export const getRandomPiece = () => {
  const sample = pieces[Math.floor(pieces.length * Math.random())];
  return generatePiece(sample);
};

export const resetPiece = (piece) => {
  let value = piece[1][1];
  return generatePiece(pieces[value - 1]);
};

export const generatePiece = (type) => {
  switch (type) {
  case T:
    return TPiece;
  case O:
    return OPiece;
  case L:
    return LPiece;
  case J:
    return JPiece;
  case I:
    return IPiece;
  case Z:
    return ZPiece;
  case S:
    return SPiece;
  default:
  }
};
