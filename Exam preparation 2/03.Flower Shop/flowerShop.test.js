const { expect } = require("chai");
const flowerShop = require("./flowerShop");

describe("flowerShop main tests", function () {
  describe("calcPriceOfFlowers", function () {
    it("The function returns the multiplies price and quantity", () => {
      expect(flowerShop.calcPriceOfFlowers("a", 2, 2)).to.equal(
        "You need $4.00 to buy a!"
      );
    });
    it("Invalid input (flower)", () => {
      expect(() => {
        flowerShop.calcPriceOfFlowers(1, 1, 1);
      }).to.throw();
    });
    it("Invalid input (price)", () => {
      expect(() => {
        flowerShop.calcPriceOfFlowers(1, "1", 1);
      }).to.throw();
    });
    it("Invalid input (quantity)", () => {
      expect(() => {
        flowerShop.calcPriceOfFlowers(1, 1, "1");
      }).to.throw();
    });
    it("result is rounded to the second digit after the decimal point", () => {
      expect(flowerShop.calcPriceOfFlowers("a", 0, 1)).to.equal(
        "You need $0.00 to buy a!"
      );
    });
    it("Invalid input (flower)2", () => {
      expect(() => {
        flowerShop.calcPriceOfFlowers(["a"], 1, 1);
      }).to.throw();
    });
  });
  describe("checkFlowerAvailable", () => {
    // it ('if array is a string', () => {
    //     expect(flowerShop.checkFlowersAvailable('a','a' )).to.equal('The a are available!')
    // })
    // it ('if flower is a string(number)', () => {
    //     expect(flowerShop.checkFlowersAvailable('1',['a','b','c'])).to.equal('The 1 is sold! You need to purchase more')
    // })
    it("returns the flower if present", () => {
      expect(flowerShop.checkFlowersAvailable("a", ["a", "b", "c"])).to.equal(
        "The a are available!"
      );
    });
    it("returns a message if the flower is not present", () => {
      expect(flowerShop.checkFlowersAvailable("d", ["a", "b", "c"])).to.equal(
        "The d are sold! You need to purchase more!"
      );
    });
  });
  describe("sellFlowers", () => {
    it("removes and element from the array", () => {
      expect(flowerShop.sellFlowers(["a", "b", "c"], 1)).to.equal("a / c");
    });
    it("Invalid input (gardenArr)", () => {
      expect(() => {
        flowerShop.sellFlowers("abc", 1);
      }).to.throw();
    });
    it("Invalid input (space)", () => {
      expect(() => {
        flowerShop.sellFlowers(["a", "b", "c"], "1");
      }).to.throw();
    });
    it("Invalid inputs", () => {
      expect(() => {
        flowerShop.sellFlowers(0, "1");
      }).to.throw();
    });
    it("returns the result joined by /", () => {
      expect(flowerShop.sellFlowers(["a", "b", "c"], 2)).to.equal("a / b");
    });
  });
});
