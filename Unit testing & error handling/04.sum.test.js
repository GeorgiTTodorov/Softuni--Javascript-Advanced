const {expect} = require('chai');
const sum = require('../04.sum.js');

describe('sum', function () {
    it('sums all the numbers', () => {
        expect(sum([3,4,5])).to.equal(12)
    })
    it ('parses strings of numbers to number', () => {
        expect(sum([3,4,'5'])).to.equal(12)
    })
    it('works only with numbers', () => {
        expect(sum(['true','false', 4])).to.NaN
    })
    it('works with an array of numbers', () => {
        expect(Array.isArray([1,2,3,4])).to.true
    })
})