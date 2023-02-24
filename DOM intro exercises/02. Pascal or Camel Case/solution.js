function solve() {
  const input = document.getElementById("text").value;
  const currentCase = document.getElementById("naming-convention").value;
  const resultElement = document.getElementById("result");

  const toPascal = (text) =>
    text
      .split(" ")
      .map((a) => a[0].toUpperCase() + a.slice(1).toLowerCase())
      .join("");

  const toCamelCase = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  };

  if (currentCase === "Pascal Case") {
    resultElement.textContent = toPascal(input);
  } else if (currentCase === "Camel Case") {
    resultElement.textContent = toCamelCase(input);
  } else {
    resultElement.textContent = "Error!";
  }
}

solve("this is an example", "Camel Case");
solve("secOND eXamPLE", "Pascal Case");
