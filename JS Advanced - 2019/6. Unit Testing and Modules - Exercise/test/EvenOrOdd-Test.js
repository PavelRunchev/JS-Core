const expect = require('chai').expect;
const isOddOrEven = require('../Even or Odd.js');

describe('Check whether string length is even or odd!', function () {
    it('should return undefined at number', function() {
        expect(isOddOrEven(9)).to.be.equal(undefined, "Function did not return correct result!");
    });

    it('should return undefined at object', function() {
        expect(isOddOrEven({})).to.be.equal(undefined, "Function did not return correct result!");
    });

    it('should return odd length in the string', function() {
        expect(isOddOrEven('Hello')).to.be.equal('odd', "Function return correct result!");
    });

    it('should return even length in the string', function() {
        expect(isOddOrEven('ww')).to.be.equal('even', "Function return correct result!");
    });
});