function solve() {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const dateOfBirth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const tBody = document.getElementById('tbody');
    let message = document.querySelector('#sum');
    const hireWorker = document.getElementById('add-worker').addEventListener('click', (event) => {
            event.preventDefault();
            if (firstName.value === '' || lastName.value === '' || email.value === '' || dateOfBirth.value === '' || position.value === '' || salary.value === '') {
                return;
            }
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${firstName.value}</td>
            <td>${lastName.value}</td>
            <td>${email.value}</td>
            <td>${dateOfBirth.value}</td>
            <td>${position.value}</td>
            <td>${salary.value}</td>
            <td><button class='fired'>Fired</button> <button class='edit'>Edit</button></td>`
            const currentMsgValue = Number(message.textContent);
            message.textContent = (currentMsgValue + Number(salary.value)).toFixed(2);
            tr.querySelector('.fired').addEventListener('click', fire);
            tr.querySelector('.edit').addEventListener('click', edit); 
            tBody.appendChild(tr);
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            dateOfBirth.value = '';
            position.value = '';
            salary.value = '';            
    })

    function fire (event) {
        const target = event.target.parentElement.parentElement;
        const current = target.querySelectorAll('td');
        const currentSumValue = Number(message.textContent);
        message.textContent = (currentSumValue - Number(current[5].textContent)).toFixed(2);
        event.target.parentElement.parentElement.parentElement.removeChild(target);
    }

    function edit (event) {
        const target = event.target.parentElement.parentElement;
        const current = target.querySelectorAll('td');
        firstName.value = current[0].textContent;
        lastName.value = current[1].textContent;
        email.value = current[2].textContent;
        dateOfBirth.value = current[3].textContent;
        position.value = current[4].textContent;
        salary.value = current[5].textContent;
        const currentSumValue = Number(message.textContent);
        message.textContent = (currentSumValue - Number(current[5].textContent)).toFixed(2);
        event.target.parentElement.parentElement.parentElement.removeChild(target);
    }

    
}
solve()