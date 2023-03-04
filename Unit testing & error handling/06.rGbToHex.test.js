const { assert, expect } = require("chai");
const rgbToHexColor = require("../06.rGbToHex");

describe("rgbToHexColor tests", function () {
    it('Red value is missing', () => {
        assert.equal(rgbToHexColor(null, 3,5),undefined)
    })
    it('Green value is missing', () => {
        assert.equal(rgbToHexColor(3,null,5), undefined)
    })
    it('Blue value is missing', () => {
        assert.equal(rgbToHexColor(3,5,""), undefined)
    })
    it('Red value is invalid', () => {
        assert.equal(rgbToHexColor(-1, 3,5), undefined)
    })
    it('Green value is invalid', () => {
        assert.equal(rgbToHexColor(3, 267, 5), undefined)
    })
    it('Blue value is invalid', () => {
        assert.equal(rgbToHexColor(3,5, 450), undefined)
    })
    it('Red value is not a number', () => {
        assert.equal(rgbToHexColor('5',3,40), undefined)
    })
    it('Green value is not a number', () => {
        assert.equal(rgbToHexColor(3, '5', 20), undefined)
    })
    it('Blue value is not a number', () => {
        assert.equal(rgbToHexColor(3, 5, '40'), undefined)
    })
    it ('Result returns the same color to string', () => {
        assert.equal(rgbToHexColor(255,0,255), '#FF00FF')
    })
    it ('Red value is 0 and blue value is 255', () => {
        assert.equal(rgbToHexColor(0,5,255), '#0005FF')
    })
    it ('Red value is 255, green value is 0, blue value is 0', () => {
        assert.equal(rgbToHexColor(255, 0, 0), '#FF0000')
    })
    it('Output is not correct', () => {
        assert.equal(rgbToHexColor(2, 0, 256), undefined)
    })
});
