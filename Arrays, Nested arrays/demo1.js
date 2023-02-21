function demo1(arr) {
    let numOfPairs = 0;
    let length = 0;

    if (!arr) {
        return numOfPairs;
    } else if(!arr.length) {
        return numOfPairs;
    }

    for (let col = 0; col < arr.length; col++) { 
        for (let row = 0; row < arr[col].length; row++) {
            let temp = arr[col].forEach((el) => {
                if (el === el) {
                    return numOfPairs++;
                }
            });
            console.log(temp);
            
        }
       
        
    }
        
}

console.log(
    demo1([
      ["2", "3", "4", "7", "0"],
      ["4", "0", "5", "3", "4"],
      ["2", "3", "5", "4", "2"],
      ["9", "8", "7", "5", "4"],
    ])
  );
  console.log(
    demo1([
      ["test", "yes", "yo", "ho"],
      ["well", "done", "yo", "6"],
      ["not", "done", "yet", "5"],
    ])
  );
//   console.log(
//     demo1([
//       ["2", "2", "5", "7", "4"],
//       ["4", "0", "5", "4"],
//       ["2", "5", "5", "4", "2"],
//     ])
//   );
//   console.log(demo1([[],[],[]]))
//   console.log(demo1());