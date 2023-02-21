function lastKnumberSequence(n, k) {
   let arr = [];
   let previousElement = [];
   let sum = 0;
   let initialValue = 1;

//    for (let i = 0; i <= n; i++) {
//         let sum = arr.reduce((a,b,i) => a + b);
//         arr.push(sum)
//    }
//    console.log(arr);
    for (let i = 0; i < n; i++) {
        if (previousElement.length > 1) {
            for (let h = previousElement.length - 1; h >= 0; h--) {
                let el = Number(previousElement[h]);
                
            }
        }
    }
}

lastKnumberSequence(6, 3);
lastKnumberSequence(8, 2);