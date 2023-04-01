const { expect, assert } = require("chai");
const lookupChar = require("../Unit testing & error handling exercise/03.charLookup");

describe("lookupChar tests", function () {
  it("returns undefined if the first parameter is not a string", () => {
    expect(lookupChar(123, 0)).to.undefined;
  });
  it("returns undefined if the second parameter is not a number", () => {
    expect(lookupChar("str", "123")).to.undefined;
  });
  it("returns Incorrect index if the string length is smaller than the given index", () => {
    expect(lookupChar("string", 7)).to.equal("Incorrect index");
  });
  it("returns Incorrect index if the string length is equal to the given index", () => {
    expect(lookupChar("string", 6)).to.equal("Incorrect index");
  });
  it("returns Incorrect index if the index is a negative number", () => {
    expect(lookupChar("string", -1)).to.equal("Incorrect index");
  });
  it("returns undefined with floating point numbers", () => {
    expect(lookupChar("string", 4.5)).to.undefined;
  });
  it("works as expected with the correct types", () => {
    expect(lookupChar("string", 4)).to.equal("n");
  });
});
