function storeCatalogue(arr) {
  arr.sort((a, b) => a.localeCompare(b));
  let result = {};

  for (let el of arr) {
    let [name, price] = el.split(" : ");
    let firstLetter = name[0];
    if (!result.hasOwnProperty(firstLetter)) {
      result[firstLetter] = {};
    }
    result[firstLetter][name] = price;
  }

  for (const key in result) {
    console.log(key);
    let el = Object.keys(result[key]);
    for (const product of el) {
      console.log(`  ${product}: ${result[key][product]}`);
    }
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
storeCatalogue([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
