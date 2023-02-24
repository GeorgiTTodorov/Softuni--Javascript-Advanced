function solution() {
  let str = "";

  function append(text) {
    return (str += text);
  }

  function removeStart(n) {
    return (str = str.slice(n));
  }

  function removeEnd(n) {
    return (str = str.slice(0, -n));
  }

  function print() {
    console.log(str);
  }
  const methods = {
    append,
    removeStart,
    removeEnd,
    print,
  };
  return methods;
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
