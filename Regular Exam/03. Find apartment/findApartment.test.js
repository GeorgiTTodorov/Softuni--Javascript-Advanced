const { expect } = require("chai");
const findNewApartment = require("./findApartment");

describe("findNewApartment tests", function () {
  describe("isGoodLocation", function () {
    it("returns a message if location is not equal to Sofia, Plovdiv or Varna", () => {
      expect(findNewApartment.isGoodLocation("Burgas", true)).to.equal(
        "This location is not suitable for you."
      );
    });
    it("returns a message if nearPublicTransportation is false", () => {
      expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal(
        "There is no public transport in area."
      );
    });
    it("returns a message if the above criteria are not met", () => {
      expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal(
        "You can go on home tour!"
      );
    });
    it("throws an error if invalid input (city) not of type string", () => {
      expect(() => {
        findNewApartment.isGoodLocation(1, true);
      }).to.throw();
    });
    it("throws an error if invalid input (nearPublicTransportation) not of type boolean", () => {
      expect(() => {
        findNewApartment.isGoodLocation("Sofia", "false");
      }).to.throw();
    });
  });

  describe("isLargeEnough", function () {
    it("throws an error for invalid input array", () => {
      expect(() => {
        findNewApartment.isLargeEnough("123", 1);
      }).to.throw();
    });
    it("throws an error for invalid input number", () => {
      expect(() => {
        findNewApartment.isLargeEnough(["1", "2", "3"], "1");
      }).to.throw();
    });
    it("throws an error for array is empty", () => {
      expect(() => {
        findNewApartment.isLargeEnough([], 1);
      }).to.throw();
    });
    it("adds new elements to the array", () => {
      expect(findNewApartment.isLargeEnough([1, 2, 3], 3)).to.equal("3");
    });
  });
  describe("isItAffordable", function () {
    it("returns a message when budget is lower than price", () => {
      expect(findNewApartment.isItAffordable(3, 1)).to.equal(
        "You don't have enough money for this house!"
      );
    });
    it("returns a message if budget is bigger or qeual to price", () => {
      expect(findNewApartment.isItAffordable(1, 1)).to.equal(
        "You can afford this home!"
      );
      expect(findNewApartment.isItAffordable(1, 2)).to.equal(
        "You can afford this home!"
      );
    });
    it("throws an error if budget in Nan", () => {
      expect(() => {
        findNewApartment.isItAffordable(1, "3");
      }).to.throw();
    });
    it("throws an error if price is Nan ", () => {
      expect(() => {
        findNewApartment.isItAffordable("1", 3);
      }).to.throw();
    });
    it("throws an error if price is below or equal to 0 ", () => {
      expect(() => {
        findNewApartment.isItAffordable(0, 3);
      }).to.throw();
      expect(() => {
        findNewApartment.isItAffordable(-1, 3);
      }).to.throw();
    });
    it("throws an error if budget is below or equal to 0 ", () => {
      expect(() => {
        findNewApartment.isItAffordable(1, 0);
      }).to.throw();
      expect(() => {
        findNewApartment.isItAffordable(1, -1);
      }).to.throw();
    });
  });
});
