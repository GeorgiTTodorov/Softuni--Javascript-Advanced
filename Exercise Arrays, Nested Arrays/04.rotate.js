function rotate(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let el = arr.pop();
        arr.unshift(el);
          
    }

    console.log(arr.join(' '));
}

rotate(['1', 
'2', 
'3', 
'4'], 
2
);
rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);