function processOddPositions(arr) {
  let modifiedArr = [];
  for (let i = 0; i < arr.length; i++) {
    let el = Number(arr[i]);

    if (i % 2 !== 0) {
      modifiedArr.push(el * 2);
    }
  }
  return modifiedArr.reverse().join(" ");
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);
