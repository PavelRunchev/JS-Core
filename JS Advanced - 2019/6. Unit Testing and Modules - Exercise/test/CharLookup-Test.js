const expect = require('chai').expect;
const lookupChar = require('../Char Lookup.js');

describe('Check retrives character at a given index from a string.', function() {
    it('should return undefined whether given object', function() {
        expect(lookupChar({}, 1)).to.be.equal(undefined, 'Function did not return corect result!');
    });

    it('should return undefined whether given array', function() {
        expect(lookupChar([], 1)).to.be.equal(undefined, 'Function did not return corect result!');
    });

    it('should return undefined whether given floating point index', function() {
        expect(lookupChar('Hello', 1.2)).to.be.equal(undefined, 'Function did not return corect result!');
    });

    it('should return undefined whether given object index', function() {
        expect(lookupChar('Hello', {})).to.be.equal(undefined, 'Function did not return corect result!');
    });

    it('should return undefined whether given string index', function() {
        expect(lookupChar('Hello', '3')).to.be.equal(undefined, 'Function did not return corect result!');
    });

    it('should return incorrect index whether negative index', function() {
        expect(lookupChar('Hello', -5)).to.be.equal('Incorrect index', 'Function did not return corect result!');
    });

    it('should return incorrect index whether bigger index', function() {
        expect(lookupChar('Hello', 5)).to.be.equal('Incorrect index', 'Function did not return corect result!');
    });

    it('should return last correct index', function() {
        expect(lookupChar('Hello', 4)).to.be.equal('o', 'Function return corect result!');
    });

    it('should return first correct index', function() {
        expect(lookupChar('Hello', 0)).to.be.equal('H', 'Function return corect result!');
    });
});