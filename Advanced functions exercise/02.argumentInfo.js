function argumentInfo(...arg) {
  let obj = {};
  arg.forEach((el) => {
    const type = typeof el;
    console.log(`${type}: ${el}`);
    if (!obj.hasOwnProperty(type)) {
      obj[type] = 1;
    } else {
      obj[type] += 1;
    }
  });
  let arr = Object.entries(obj).sort((a, b) => {
    return b[1] - a[1];
  });
  for (const [key, value] of arr) {
    console.log(`${key} = ${value}`);
  }
}

argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
argumentInfo({ name: "bob" }, 3.333, 9.999);
