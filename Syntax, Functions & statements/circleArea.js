function circleArea(input) {
  let result = typeof input;

  if (result == "number") {
    let area = input ** 2 * Math.PI;
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${result}.`
    );
  }
}

circleArea(5);
circleArea("name");
