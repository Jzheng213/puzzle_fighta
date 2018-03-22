const rotate = (piece, reverse = false) => {
  let transposed = piece[0].map((col, i) => piece.map(row => row[i]));
  if(reverse){
    return transposed.forEach(row => row.reverse());
  }else{
    return transposed.reverse();
  }
};

export default rotate;
