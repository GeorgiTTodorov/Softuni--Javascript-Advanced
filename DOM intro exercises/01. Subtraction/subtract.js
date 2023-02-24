function subtract() {
    const firstNum = document.getElementById('firstNumber');
    const secondNum = document.getElementById('secondNumber');

    const sum = Number(firstNum.value) - Number(secondNum.value);
    const result = document.getElementById('result')
    result.textContent = sum;
}