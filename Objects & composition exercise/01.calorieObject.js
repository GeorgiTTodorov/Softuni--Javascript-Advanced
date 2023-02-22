function calorieObject(arr) {
    let myObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            let name = arr[i];
            let calories = Number(arr[i + 1])
            myObj[name] = calories;
        }  
    }
    console.log(myObj);

}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);