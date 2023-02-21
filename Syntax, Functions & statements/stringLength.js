function stringLength(argA, argB, argC) {
    let sumLength = argA.length + argB.length + argC.length;
    let avgLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avgLength);
}

stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')