function mathOperations(numA, numB, operator) {
  let result;

  switch (operator) {
    case "+":
      result = numA + numB;
      break;
    case "-":
      result = numA - numB;
      break;
    case "*":
      result = numA * numB;
      break;
    case "/":
      result = numA / numB;
      break;
    case "%":
      result = numA % numB;
      break;
    case "**":
      result = numA ** numB;
      break;
  }
  console.log(result);
}

mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");
