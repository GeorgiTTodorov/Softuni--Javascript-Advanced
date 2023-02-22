function printNthEl (arr, step){
    let modified = [];

    for (let i = 0; i < arr.length; i+=step) {
        modified.push(arr[i]);
        
    }

    return modified;
}

printNthEl(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);
printNthEl(['dsa',
'asd', 
'test', 
'tset'], 
2
);
printNthEl(['1', 
'2',
'3', 
'4', 
'5'], 
6
)