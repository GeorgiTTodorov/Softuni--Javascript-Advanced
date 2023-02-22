function magicMatrices(array) {
  let sumRows = 0;
  let sumCols = 0;
  let areEqual = false;

  for (let col = 0; col < array.length; col++) {
    let firstNum = array[col][0];
    for (let row = 0; row < array[col].length; row++) {
      sumRows += array[col][row];
      sumCols += firstNum;
    }
  }

  if (sumRows === sumCols) {
    areEqual = true;
    console.log(areEqual);
  } else {
    console.log(areEqual);
  }
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
