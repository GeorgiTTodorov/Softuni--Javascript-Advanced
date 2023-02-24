function calc() {
    // TODO: sum = num1 + num2
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const result = document.getElementById('sum');

    const sum = Number(num1.value) + Number(num2.value);
    result.value = sum;

}
