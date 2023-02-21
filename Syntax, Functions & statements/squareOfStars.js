function squareOfStars(input) {
    let star = '* ';

    if (input) {
        for (let i = 0; i < input; i++) {
            console.log(star.repeat(input));  
        }
    } else {
        for (let n = 0; n < 5; n++) {
            console.log(star.repeat(5));   
        }       
    }

}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);