function greatestCommonDivisor(int1, int2) {
  let a = int1;
  let b = int2;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  let greatestDivisor = a;
  console.log(greatestDivisor);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
