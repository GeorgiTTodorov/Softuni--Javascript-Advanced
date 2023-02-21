function sumOfNumbersnM(n, m) {
    let numA = Number(n);
    let numB = Number(m);
    let result = 0;

    for (let i = numA; i <= numB; i++){
        result += i;  
    }

    console.log(result);

}

sumOfNumbersnM('1', '5' );
sumOfNumbersnM('-8', '20');