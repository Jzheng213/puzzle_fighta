const sendTiles = (grid, count) => {
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

export default sendTiles;
