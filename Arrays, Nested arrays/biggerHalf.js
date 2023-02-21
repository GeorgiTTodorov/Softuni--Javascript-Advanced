function biggerHalf(arr) {
  let modified = arr.sort((a, b) => a - b);
  let half = Math.floor(modified.length / 2);
  let startIndex = half;
  let bigger = [];

  for (let i = startIndex; i < modified.length; i++) {
    bigger.push(modified[i]);
  }
  return bigger;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
