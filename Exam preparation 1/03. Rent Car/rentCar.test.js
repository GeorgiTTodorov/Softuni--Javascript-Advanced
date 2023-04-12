const { expect, assert } = require("chai");
const rentCar = require("./rentCar");

describe("rentCar tests", function () {
  describe("searchCar", function () {
    it("returns 1 car", () => {
      const shop = ["a", "b", "c"];
      const model = "a";
      expect(rentCar.searchCar(shop, model)).to.equal(
        "There is 1 car of model a in the catalog!"
      );
    });
    it("returns 2 cars", () => {
      const shop = ["a", "b", "a"];
      const model = "a";
      expect(rentCar.searchCar(shop, model)).to.equal(
        "There is 2 car of model a in the catalog!"
      );
    });
    it("throws an error if shop is a string", () => {
      const shop = "abc";
      const model = "a";
      expect(() => {
        rentCar.searchCar(shop, model);
      }).to.throw("Invalid input!");
    });
    it("throws an error if shop is a number", () => {
      expect(() => {
        rentCar.searchCar(1, "a");
      }).to.throw("Invalid input!");
    });
    it("throws an error if model is a number", () => {
      expect(() => {
        rentCar.searchCar(["a", "b", "1"], 1);
      }).to.throw("Invalid input!");
    });
    it("returns no models found", () => {
      expect(() => {
        rentCar.searchCar(["a", "b", "c"], "d");
      }).to.throw("There are no such models in the catalog!");
    });
  });
  describe("calculatePriceOfCar", function () {
    it("Invalid input model (number)", () => {
      expect(() => {
        rentCar.calculatePriceOfCar(1, 1);
      }).to.throw("Invalid input!");
    });
    it("Invalid input days (string)", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("1", "1");
      }).to.throw("Invalid input!");
    });
    it("returns the correct result", () => {
      expect(rentCar.calculatePriceOfCar("Volkswagen", 1)).to.equal(
        "You choose Volkswagen and it will cost $20!"
      );
    });
    it("throws an error if no such model is found", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("Citroen", 2);
      }).to.throw("No such model in the catalog!");
    });
  });
  describe("checkBudget", function () {
    it("Invalid input costPerDay", () => {
      expect(() => {
        rentCar.checkBudget("1", 1, 1);
      }).to.throw("Invalid input!");
    });
    it("Invalid input days", () => {
      expect(() => {
        rentCar.checkBudget(1, "1", 1);
      }).to.throw("Invalid input!");
    });
    it("Invalid input budget", () => {
      expect(() => {
        rentCar.checkBudget(1, 1, "1");
      }).to.throw("Invalid input!");
    });
    it("returns the correct result when the budget is equal to the cost", () => {
      expect(rentCar.checkBudget(1, 1, 1)).to.equal("You rent a car!");
    });
    it("returns the correct result when the budget is bigger than the cost", () => {
      expect(rentCar.checkBudget(1, 1, 3)).to.equal("You rent a car!");
    });
    it("returns a message when the budget is less than the cost", () => {
      expect(rentCar.checkBudget(3, 1, 1)).to.equal(
        "You need a bigger budget!"
      );
    });
    it("returns a message when the days are more", () => {
      expect(rentCar.checkBudget(1, 3, 1)).to.equal(
        "You need a bigger budget!"
      );
    });
  });
});
