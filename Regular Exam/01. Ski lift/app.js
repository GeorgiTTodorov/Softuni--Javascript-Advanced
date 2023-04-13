window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const peopleCount = document.getElementById("people-count");
  const fromDate = document.getElementById("from-date");
  const daysCount = document.getElementById("days-count");
  const btn = document
    .getElementById("next-btn")
    .addEventListener("click", next);

  function next(event) {
    event.preventDefault();
    if (
      firstName.value == "" ||
      lastName.value == "" ||
      peopleCount.value == "" ||
      fromDate.value == "" ||
      daysCount.value == ""
    ) {
      return;
    }
    const ul = document.querySelector(".ticket-info-list");
    const li = document.createElement("li");
    li.className = "ticket";
    li.innerHTML = `<article>
        <h3>Name: ${firstName.value} ${lastName.value}</h3>
        <p>From date: ${fromDate.value}</p>
        <p>For ${daysCount.value} days</p>
        <p>For ${peopleCount.value} people</p>
        </article>
        <button class='edit-btn'>Edit</button>
        <button class='continue-btn'>Continue</button>`;
    const editBtn = li
      .querySelector(".edit-btn")
      .addEventListener("click", edit);
    const contBtn = li
      .querySelector(".continue-btn")
      .addEventListener("click", forward);
    let fNameCopy = firstName.value;
    let lNameCopy = lastName.value;
    let pplC = peopleCount.value;
    let fDate = fromDate.value;
    let dCount = daysCount.value;

    ul.appendChild(li);
    firstName.value = "";
    lastName.value = "";
    peopleCount.value = "";
    fromDate.value = "";
    daysCount.value = "";
    document.getElementById("next-btn").disabled = true;

    function edit(event) {
      const info = event.target.parentElement;
      const parent = event.target.parentElement.parentElement;
      firstName.value = fNameCopy;
      lastName.value = lNameCopy;
      peopleCount.value = pplC;
      fromDate.value = fDate;
      daysCount.value = dCount;
      parent.removeChild(info);
      document.getElementById("next-btn").disabled = false;
    }
    function forward(event) {
      const confirmTicketUl = document.querySelector(".confirm-ticket");
      const target = event.target.parentElement;

      let newLi = document.createElement("li");
      newLi.className = "ticket-content";
      newLi.innerHTML = `<article>
            <h3>Name: ${fNameCopy} ${lNameCopy}</h3>
            <p>From date: ${fDate}</p>
            <p>For ${dCount} days</p>
            <p>For ${pplC} people</p>
            </article>
            <button class='confirm-btn'>Confirm</button>
            <button class='cancel-btn'>Cancel</button>`;
      const confirmBtn = newLi
        .querySelector(".confirm-btn")
        .addEventListener("click", conf);
      const cancelBtn = newLi
        .querySelector(".cancel-btn")
        .addEventListener("click", canc);

      confirmTicketUl.appendChild(newLi);
      event.target.parentElement.parentElement.removeChild(target);
    }

    function conf(event) {
      const divMain = document.getElementById("main");
      const parent = document.getElementById("body");
      const h1 = document.createElement("h1");
      h1.id = "thank-you";
      h1.textContent = "Thank you, have a nice day!";
      const backBtn = document.createElement("button");
      backBtn.id = "back-btn";
      backBtn.textContent = "Back";
      backBtn.addEventListener("click", () => {
        location.reload();
      });
      parent.removeChild(divMain);
      parent.appendChild(h1);
      parent.appendChild(backBtn);
    }

    function canc(event) {
      const targetEl = event.target.parentElement;
      event.target.parentElement.parentElement.removeChild(targetEl);
      document.getElementById("next-btn").disabled = false;
    }
  }
}
