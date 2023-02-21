function evenPositionElement(arr) {
    let elements = '';

    for (let i = 0; i < arr.length; i+=2) {
        elements += arr[i] + ' ';    
    }

    console.log(elements);

}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);