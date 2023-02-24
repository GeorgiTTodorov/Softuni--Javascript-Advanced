function sumTable() {
    const table = document.querySelectorAll('table tr');
    let sum = 0;

    for (let i = 1; i < table.length; i++) {
        let product = table[i].children;
        let cost = product[product.length - 1].textContent;
        sum += Number(cost);   
    }
    document.getElementById('sum').textContent = sum;
}