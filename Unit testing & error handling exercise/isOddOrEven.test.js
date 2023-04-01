const isOddOrEven = require("../Unit testing & error handling exercise/02.evenOrOdd");
const { expect, assert } = require("chai");

describe("isOddOrEven tests", function () {
  it("returns even if the length is even", () => {
    expect(isOddOrEven("string")).to.equal("even");
  });
  it("returns odd if the length is odd", () => {
    expect(isOddOrEven("strin")).to.equal("odd");
  });
  it("returns undefined if the parameter is not a string", () => {
    expect(isOddOrEven(123)).to.undefined;
  });
  it("returns undefined if no parameter is given", () => {
    expect(isOddOrEven()).to.undefined;
  });
  it("returns undefined if the parameter is falsy", () => {
    expect(isOddOrEven(null)).to.undefined;
  });
  it("returns undefined if the parameter is an array", () => {
    expect(isOddOrEven(["this"])).to.undefined;
  });
  it("takes only the first parameter", () => {
    expect(isOddOrEven("this", "odd", "true")).to.equal("even");
  });
  it('workds as expected', () => {
    expect(isOddOrEven("this")).to.equal("even");
    expect(isOddOrEven("odd")).to.equal("odd");
    expect(isOddOrEven("true")).to.equal("even");
  })
});
