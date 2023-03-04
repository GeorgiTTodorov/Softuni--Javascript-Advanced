// const { describe } = require('mocha');
const { expect } = require('chai');
const isSymmetric = require('../05.isSymetric')

describe('main tests', function () {
    it('returns true with array arguments', () => {
        const data = [1,2,3,4]
        expect(Array.isArray(data)).to.true
    })
    it('returns false with non array arguments', () => {
        const data = {name:'Dutch', age: 42}
        expect(Array.isArray(data)).to.false
    })
    it('returns true if the input array is symmetric', () => {
        const arr = [1,2,2,1];
        expect(isSymmetric(arr)).to.true
    })
    it('returns false if the input array is non symmetric', () => {
        const arr = [1,2,3,1];
        expect(isSymmetric(arr)).to.false
    })
    it('returns false with an array-like input', () => {
        const input = 'abba'
        expect(isSymmetric(input)).to.false
    })
    it ('returns false with wrong arguments', () => {
        const input = 121;
        expect(isSymmetric(input)).to.false;
    })
    it ('returns true with odd array length', () => {
        const arr = [1,2,1]
        expect(isSymmetric(arr)).to.true
    })
    it('returns true with an array of strings', () => {
        const arr = ['same','as','as','same'];
        expect(isSymmetric(arr)).to.true
    })
    it('returns true if array length is 0', () => {
        const arr = [];
        expect(isSymmetric(arr)).to.true
    })

})