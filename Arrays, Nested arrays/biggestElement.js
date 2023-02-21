function biggestElement(arr) {
  let modified = [];

  for (const el of arr) {
    let temp = el.sort((a, b) => a - b)[el.length - 1];

    modified.push(temp);
  }

  let biggest = modified.sort((a, b) => a - b).pop();

  console.log(biggest);
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
