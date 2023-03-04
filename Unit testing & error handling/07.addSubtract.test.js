const {expect, assert} = require('chai')
const { createCalculator } = require('../07.addSubtract')


describe('Main tests', function () {
    let func;
    beforeEach(() => {
        func = createCalculator();
    })
    
    it ('Keeps an internal sum that can be modified from the outside', () =>{
        func.add(5)
        expect(func.get()).to.equal(5)
    })
    it('The add method returns a number', () => {
        func.add('5')
        expect(func.get()).to.equal(5)
    })
    it('The subtract method returns a number', () => {
        func.subtract('5')
        expect(func.get()).to.equal(-5)
    })
    it ('You can add and subtract simutaneosly', () => {
        func.add(5)
        func.subtract(5)
        expect(func.get()).to.equal(0)
    })
})
