function largestNumber(numA, numB, numC) {
    if (numA > numB && numA > numC) {
        console.log(`The largest number is ${numA}.`);
    } else if (numB > numA && numB > numC) {
        console.log(`The largest number is ${numB}.`);
    } else {
        console.log(`The largest number is ${numC}.`);
    }

}

largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)