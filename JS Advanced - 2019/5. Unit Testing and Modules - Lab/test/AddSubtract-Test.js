const expect = require('chai').expect;
let createCalculator = require('../7. Add Subtract.js');

describe('Test Add, Subtract functionality in array', function() {
    let calculate;
    this.beforeEach(function() {
        calculate = createCalculator();
    });

    it("should return an object", function () {
        expect(typeof calculate).to.be.equal('object');
    });

    it('Should return zero by default in get module', function() {
        expect(calculate.get()).to.be.equal(0);
    });

    it('Should return negtive integer to subtract module', function() {
        calculate.subtract(2);
        expect(calculate.get()).to.be.equal(-2);
    });

    it('Should return positive integer to add module', function() {
        calculate.add(1);
        expect(calculate.get()).to.be.equal(1);
    });

    it('Should return number from manipulation commands', function() {
        calculate.add(1);
        calculate.add(10.5);
        calculate.subtract(1.5);
        expect(calculate.get()).to.be.equal(10);
    });

    
    it('Should return floating point number from manipulation commands', function() {
        calculate.add(1.3);
        calculate.add(1.3);
        calculate.subtract(1.3);
        expect(calculate.get()).to.be.equal(1.3);
    });

    it('Should return positive integer to be parsed number in add module', function() {
        calculate.add('1');
        expect(calculate.get()).to.be.equal(1);
    });

    it('Should return NaN to subtract module', function() {
        calculate.subtract('www');
        expect(calculate.get()).to.be.NaN;
    });

    it('Should return NaN to add module', function() {
        calculate.add('www');
        expect(calculate.get()).to.be.NaN;
    });
});