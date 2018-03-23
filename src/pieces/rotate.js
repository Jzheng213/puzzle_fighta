const rotate = (piece, reverse = false) => {
  let transposed = piece[0].map((col, i) => piece.map(row => row[i]));
  if(reverse){
    return transposed.reverse();
  }else{
    transposed.forEach(row => row.reverse());
    return transposed;
  }
};

export default rotate;
