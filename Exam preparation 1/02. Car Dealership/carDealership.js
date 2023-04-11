class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }
  addCar(model, horsepower, price, mileage) {
    if (
      model == "" ||
      (!Number.isInteger(horsepower) && horsepower < 0) ||
      price < 0 ||
      mileage < 0
    ) {
      throw new Error("Invalid input!");
    }
    this.availableCars.push({ model, horsepower, price, mileage });
    console.log(this.availableCars);
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }
  sellCar(model, desiredMileage) {
    for (const el of this.availableCars) {
      const diff = el.mileage - desiredMileage;
      const index = this.availableCars.indexOf(el);
      if (el.model === model) {
        if (diff <= 0) {
        } else if (diff <= 40000) {
          el.price -= el.price * 0.05;
        } else if (diff > 40000) {
          el.price -= el.price * 0.1;
        }
        this.soldCars.push({
          model: el.model,
          horsepower: el.horsepower,
          soldPrice: el.price,
        });
        this.availableCars.splice(index, 1);
        this.totalIncome += el.price;
        return `${model} was sold for ${el.price.toFixed(2)}$`;
      }
    }
    throw new Error(`${model} was not found!`);
  }
  currentCar() {
    let result = `-Available cars:`;
    for (const el of this.availableCars) {
      result += `\n---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(
        2
      )} km - ${el.price.toFixed(2)}$`;
    }
    return result;
  }
  salesReport(criteria) {
    if (criteria == "horsepower" || criteria == "model") {
      let sorted = this.soldCars.sort((a, b) => {
        return criteria === "horsepower"
          ? b.horsepower - a.horsepower
          : a.model.localeCompare(b.model);
      });
      let result = `-${
        this.name
      } has a total income of ${this.totalIncome.toFixed(2)}$\n-${
        this.soldCars.length
      } cars sold:`;
      for (const el of sorted) {
        result += `\n---${el.model} - ${
          el.horsepower
        } HP - ${el.soldPrice.toFixed(2)}$`;
      }
      
      return result;
    } else {
      throw new Error("Invalid criteria!");
    }
  }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.sellCar('Toyota Corolla', 200000));
// console.log(dealership.sellCar('Mercedes C63', 200000));
// // console.log(dealership.currentCar());
// // console.log(dealership.addCar('', 120, 4900, 240000));
// console.log(dealership.salesReport('horsepower'))

let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.currentCar());
console.log(dealership.salesReport("horsepower"));
