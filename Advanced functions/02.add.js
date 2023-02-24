function solution(x) {
  let num = x;

  const inner = (y) => {
    return num + y;
  };

  return inner;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
