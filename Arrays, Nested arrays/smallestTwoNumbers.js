function smallestTwoNumbers(arr) {
    let modified = arr.sort((a,b) => a - b);

    console.log(`${modified[0]} ${modified[1]}`);

}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);