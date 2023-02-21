function sameNumbers(int) {
  let digitsArr = int.toString();
  let sum = 0;
  let sameNumbers = true;
  let firstDigit = digitsArr[0];

  for (let i = 0; i < digitsArr.length; i++) {
    if (firstDigit !== digitsArr[i]) {
      sameNumbers = false;
    }
    sum += Number(digitsArr[i]);
  }
  console.log(sameNumbers);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
