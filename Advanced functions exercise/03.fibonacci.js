function getFibonator () {
    let current = 1;
    let previous = 0;
    function fib() {
        let fibonacci = current + previous;
        current = previous;
        previous = fibonacci;
        return fibonacci;
    }
    return fib;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); 
