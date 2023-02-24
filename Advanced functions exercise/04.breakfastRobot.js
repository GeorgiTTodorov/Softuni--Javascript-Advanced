function solution() {
  // •	apple - made with 1 carbohydrate and 2 flavour
  // •	lemonade - made with 10 carbohydrate and 20 flavour
  // •	burger - made with 5 carbohydrate, 7 fat and 3 flavour
  // •	eggs - made with 5 protein, 1 fat and 1 flavour
  // •	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };
  let obj = { carbohydrate: 0, flavour: 0, fat: 0, protein: 0 };
  function manager(str) {
    let [command, action, quantity] = str.split(" ");
    quantity = Number(quantity);
    if (command === "prepare") {
      let recipe = recipes[action];
      for (const key in recipe) {
        if (recipe[key] * quantity > obj[key]) {
          return `Error: not enough ${key} in stock`;
        }
      }
      for (const key in recipe) {
        obj[key] -= recipe[key] * quantity;
      }
      return "Success";
    } else if (command === "restock") {
      obj[action] += quantity;
      return "Success";
    } else if (command === "report") {
      return `protein=${obj["protein"]} carbohydrate=${obj["carbohydrate"]} fat=${obj["fat"]} flavour=${obj["flavour"]}`;
    }
  }

  return manager;
}

let manager = solution();
// console.log(manager("restock flavour 50")); // Success
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock
// console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in stock
// console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock
// console.log(manager("prepare burger 1")); // Error: not enough carbohydrate in stock
// console.log(manager("report")); // Error: not enough carbohydrate in stock

console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
