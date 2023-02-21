function aggregateElements(arr) {
  let sum = 0;
  let sumInverse = 0;
  let concat = "";

  for (let i = 0; i < arr.length; i++) {
    let el = Number(arr[i]);
    sum += el;
    sumInverse += 1 / el;
    concat += el.toString();
  }
  console.log(sum);
  console.log(sumInverse);
  console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
