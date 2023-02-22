function sortAnArrayBy2Criteria(strings) {
  strings.sort((a, b) => a.length - b.length || a.localeCompare(b));

  strings.forEach((el) => {
    console.log(el);
  });
}

sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
