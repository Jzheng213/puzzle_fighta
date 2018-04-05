const TETRIS = 4;
const B2BTETRIS = 6;

const COMBO = {
  0:0,
  1:1,
  2:1,
  3:2,
  4:2,
  5:3,
  6:3,
  7:4,
  MAX:4
};

export const calculateAttack = (currentAttack, comboCounter, wasTetris = false) => {
  if (currentAttack === 0) return 0;
  let lines = 0;
  if (currentAttack < 4) {
    lines += currentAttack - 1;
  }else{
    lines += wasTetris ? B2BTETRIS : TETRIS;
  }
  lines += COMBO[comboCounter];
  return lines;
};

export const sendTiles = (grid, count) => {
  const rows = grid.splice(0, count);
  rows.forEach(() => grid.push(generateAttackRow()));
};

const generateAttackRow = () =>{
  const attackRow = new Array(12);
  attackRow.fill(8);
  const emptyIdx = Math.floor(attackRow.length * Math.random());
  attackRow[emptyIdx] = 0;
  return attackRow;
};
