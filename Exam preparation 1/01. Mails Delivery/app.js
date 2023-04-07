function solve() {
  const recipientName = document.getElementById("recipientName");
  const title = document.getElementById("title");
  const message = document.getElementById("message");

  document.getElementById("add").addEventListener("click", add);
  document.getElementById("reset").addEventListener("click", onReset);

  function add(event) {
    event.preventDefault();
    const name = recipientName.value;
    const recipientTitle = title.value;
    const messageInput = message.value;
    if (name == "" || recipientTitle == "" || messageInput == "") {
      return;
    }
    const li = document.createElement("li");
    li.innerHTML = `
        <h4>Title: ${recipientTitle}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${messageInput}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>
    `;
    li.querySelector("#delete").addEventListener("click", del);
    li.querySelector("#send").addEventListener("click", send);
    document.getElementById("list").appendChild(li);

    reset();
    function del(event) {
      const element = event.target.parentElement.parentElement;
      const listItem = document.createElement("li");
      const itemList = document.getElementById("list");
      const sentMails = document.querySelector(".sent-list");
      if (event.target.parentElement.parentElement.parentElement === itemList) {
        const namen = element.querySelectorAll("h4")[0].textContent;
        const recipient = element.querySelectorAll("h4")[1].textContent;
        listItem.innerHTML = `
            <span>To: ${recipient.slice(16)}</span>
            <span>Title: ${namen.slice(7)}</span>`;
        document.querySelector(".delete-list").appendChild(listItem);
        event.target.parentElement.parentElement.parentElement.removeChild(
          element
        );
      } else if (
        event.target.parentElement.parentElement.parentElement === sentMails
      ) {
        const span = element.querySelectorAll("span");
        listItem.innerHTML = `
                <span>To: ${span[0].textContent.slice(4)}</span>
                <span>Title: ${span[1].textContent.slice(6)}</span>`;
        document.querySelector(".delete-list").appendChild(listItem);
        event.target.parentElement.parentElement.parentElement.removeChild(
          element
        );
      }
    }
    function send(event) {
      const parentElement = event.target.parentElement.parentElement;
      const newLi = document.createElement("li");
      const namen = parentElement.querySelectorAll("h4")[0].textContent;
      const recipient = parentElement.querySelectorAll("h4")[1].textContent;
      newLi.innerHTML = `
            <span>To: ${recipient.slice(16)}</span>
            <span>Title: ${namen.slice(7)}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`;
      newLi.querySelector(".delete").addEventListener("click", del);
      document.querySelector(".sent-list").appendChild(newLi);
      document.getElementById("list").removeChild(parentElement);
    }
  }

  function onReset(event) {
    event.preventDefault();
    reset();
  }
  function reset() {
    recipientName.value = "";
    title.value = "";
    message.value = "";
  }
}
solve();
