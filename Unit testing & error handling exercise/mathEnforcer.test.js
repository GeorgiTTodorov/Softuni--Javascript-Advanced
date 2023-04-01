const mathEnforcer = require("../Unit testing & error handling exercise/04.mathEnforcer");
const {expect, assert} = require('chai');
const { addFive, subtractTen, sum } = require("../Unit testing & error handling exercise/04.mathEnforcer");

describe('mathEnforcer tests', function () {
    describe('addFive', function () {
        it('returns undefined if the parameter is not a number', () => {
            expect(addFive('5')).to.undefined
        })
        it('returns the correct result when the parameter is a number', () => {
            expect(addFive(5)).to.equal(10)
        })
        it('works with floating point numbers with a delta of 0.01', () => {
            expect(addFive(5.1)).to.be.closeTo(10.09, 0.01)
        })
        it('works with negative numbers', () => {
            expect(addFive(-5)).to.equal(0)
        })
        it('works with positive numbers', () => {
            expect(addFive(5)).to.equal(10)
        })
        it('doesnt work with floating point numbers with a difference greater than 0.01', () => {
            expect(addFive(5.1)).to.not.be.closeTo(10.06, 0.01)
        })
        it('returns undefined if no parameter is given', () => {
            expect(addFive()).to.undefined
        })
        it('returns a negative number', () => {
            expect(addFive(-10)).to.equal(-5)
        })
    })
    describe('subtractTen', function () {
        it('returns undefined with a parameter that is not a number', () => {
            expect(subtractTen('10')).to.undefined
        })
        it('returns the correct result with the correct parameter', () => {
            expect(subtractTen(10)).to.equal(0)
        })
        it('works with positive numbers', () => {
            expect(subtractTen(11)).to.equal(1)
        })
        it('works with negative numbers', () => {
            expect(subtractTen(-10)).to.equal(-20)
        })
        it('works with floating point numbers with a difference of 0.01', () => {
            expect(subtractTen(10.01)).to.be.closeTo(0, 0.01)
        })
        it('doesnt work with floating point numbers with a difference greater than 0.01', () => {
            expect(subtractTen(10.02)).to.not.be.closeTo(0, 0.01)
        })
        it('returns undefined when no parameter is given', () => {
            expect(subtractTen()).to.undefined
        })
        it('returns negative values', () => {
            expect(subtractTen(-5)).to.equal(-15)
        })
    })
    describe ('sum', function () {
        it('returns undefined when one of the parameters is not a number', () => {
            expect(sum(5,'5')).to.undefined
        })
        it('returns undefined when both parameters are incorrect', () => {
            expect(sum('5','5')).to.undefined
        })
        it('only works with numbers', () => {
            expect(sum([5],null)).to.undefined
        })
        it('returns the sum of the two parameters', () => {
            expect(sum(5,5)).to.equal(10)
        })
        it('works with negative numbers', () => {
            expect(sum(-5,5)).to.equal(0)
        })
        it('sums negative numbers and returns their value', () => {
            expect(sum(-5,-5)).to.equal(-10)
        })
        it('works with floating point numbers with a difference of 0.01', () => {
            expect(sum(5.1,4.98)).to.be.closeTo(10.07, 0.01)
        })
        it('doesnt work with floating point numbers with a difference greater than', () => {
            expect(sum(5.1,4.98)).to.not.be.closeTo(10.06, 0.01)
        })
        it('returns undefined if no parameters are given', () => {
            expect(sum()).to.undefined
        })
    })
})
