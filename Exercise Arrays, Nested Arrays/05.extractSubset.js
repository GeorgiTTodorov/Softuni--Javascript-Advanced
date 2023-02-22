function exctractSubset(arr) {
    let modifiedArr = [];
    let biggestNum = arr[0]
    modifiedArr = arr.reduce((acc,curr) => {
            if (biggestNum <= curr) {
                acc.push(curr);
                biggestNum = curr;
            }
            return acc;
    },[]);

   return modifiedArr;
}

exctractSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
exctractSubset([1, 2, 3, 4]);
exctractSubset([20, 3, 2, 15, 6, 1]);
