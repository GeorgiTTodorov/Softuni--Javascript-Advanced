function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

sum(['true','yes',4])

module.exports = 
    sum


