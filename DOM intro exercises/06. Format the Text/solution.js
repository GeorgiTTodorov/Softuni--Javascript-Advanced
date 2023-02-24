function solve() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  const arr = input.split(".");
  let sentence = [];
  let match = /.+/g;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element.match(match)) {
      if (sentence.length === 3) {
        let paragraph = document.createElement("p");
        paragraph.textContent = `${sentence.join(".")}.`;
        output.appendChild(paragraph);
        sentence = [];
        sentence.push(element);
      } else {
        sentence.push(element);
      }
    }
  }
  if (sentence.length !== 0) {
    let parag = document.createElement("p");
    parag.textContent = `${sentence.join(".")}.`;
    output.appendChild(parag);
  }
}
