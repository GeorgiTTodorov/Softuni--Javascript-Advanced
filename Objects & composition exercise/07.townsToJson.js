function townsToJson(arr) {
  let result = [];

  for (let index = 1; index < arr.length; index++) {
    const tokens = arr[index].split(/\s*\|\s*/g);
    const towns = tokens[1];
    const latitude = Number(tokens[2]).toFixed(2);
    const longtitude = Number(tokens[3]).toFixed(2);
    let currentObj = {
      Town: towns,
      Latitude: Number(latitude),
      Longitude: Number(longtitude),
    };
    result.push(currentObj);
  }

  console.log(JSON.stringify(result));
}

townsToJson([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
townsToJson([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
