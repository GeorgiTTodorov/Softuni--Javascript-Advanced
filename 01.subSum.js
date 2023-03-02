function sum(arr, startIndex, endIndex) {
  if (!Array.isArray(arr)) {
    return "NaN";
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex > arr.length - 1) {
    endIndex = arr.length - 1;
  }

  let modified = arr.slice(startIndex, endIndex + 1).map((el) => Number(el));

  return modified.reduce((acc, el) => acc + el, 0);
}

console.log(sum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sum([10, "twenty", 30, 40], 0, 2));
console.log(sum([], 1, 2));
console.log(sum("text", 0, 2));
console.log(sum(0, 3));
