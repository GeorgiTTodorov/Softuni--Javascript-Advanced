function addRemoveEl(arr) {
  let num = 0;
  let myArr = [];

  for (const el of arr) {
    if (el === "add") {
      num++;
      myArr.push(num);
    } else {
      num++;
      myArr.pop();
    }
  }
  if (myArr.length === 0) {
    return "Empty";
  } else {
    return myArr.join("\n");
  }
}

console.log(addRemoveEl(["add", "add", "add", "add"]));
console.log(addRemoveEl(["add", "add", "remove", "add", "add"]));
