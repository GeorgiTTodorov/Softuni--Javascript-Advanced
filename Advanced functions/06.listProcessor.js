function listProcessor(arr) {
  let result = [];
  function add(str) {
    result.push(str);
  }
  function remove(str) {
    result.splice(result.indexOf(str), 1);
  }
  function print() {
    console.log(result.join(","));
  }

  for (const el of arr) {
    let [command, str] = el.split(" ");
    switch (command) {
      case "add":
        add(str);
        break;
      case "remove":
        remove(str);
        break;
      case "print":
        print();
        break;
    }
  }
  const methods = {
    add,
    remove,
    print,
  };
  return methods;
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
