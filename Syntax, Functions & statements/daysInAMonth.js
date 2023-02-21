function daysInAMonth(month, year) {
  let date = new Date(year, month, 0);
  let numOfDays = date.getDate();

  console.log(numOfDays);
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);
