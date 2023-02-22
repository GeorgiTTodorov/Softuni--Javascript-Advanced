function sortingNumbers(numbers) {
  let sorted = [];
  numbers.sort((a,b) => a - b);

  while (numbers.length !== 0) {
    sorted.push(numbers.shift());
    sorted.push(numbers.pop());
  }

  return sorted;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
