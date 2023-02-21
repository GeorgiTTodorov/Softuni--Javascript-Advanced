function negativePositiveNumbers(arr) {
  let modifiedArr = [];

  for (const el of arr) {
    if (el < 0) {
      modifiedArr.unshift(el);
    } else {
      modifiedArr.push(el);
    }
  }
  console.log(modifiedArr.join("\n"));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
