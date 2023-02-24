function sort(arr, arg) {
  return arr.sort((a, b) => (arg === "asc" ? a - b : b - a));
}

console.log(sort([14, 7, 17, 6, 8], "asc"));
console.log(sort([14, 7, 17, 6, 8], 'desc'));
