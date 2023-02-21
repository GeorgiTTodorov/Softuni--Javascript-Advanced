function fruit(type, weightGr, priceKg) {
  const weightInKg = (weightGr / 1000);
  const totalPrice = (weightInKg * priceKg);

  console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);
}

fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
