const expect = require('chai').expect;
const mathEnforcer = require('../Math Enforcer.js');

describe('test an object and return number!', function() {
    describe('addFive functionality!', function() {
        it('should return undefined if input is empty', function() {
            expect(mathEnforcer.addFive()).to.be.equal(undefined, 'Object did not return correct result!');
        });
        it('should return undefined if input is object', function() {
            expect(mathEnforcer.addFive({})).to.be.equal(undefined, 'Object did not return correct result!');
        });

        it('should return undefined if input is string', function() {
            expect(mathEnforcer.addFive('Pesho')).to.be.equal(undefined, 'Object did not return correct result!');
        });

        it('should return correct result if input number', function() {
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5, 'Object return correct result!');
        });

        it('should return correct result if input floating points number', function() {
            expect(mathEnforcer.addFive(1.5)).to.be.equal(6.5, 'Object return correct result!');
        });
    });

    describe('subtractTen functionality!', function() {
        it('should return undefined if input is empty', function() {
            expect(mathEnforcer.subtractTen()).to.be.equal(undefined, 'Object did not return correct result!');
        });
        it('should return undefined if input is object', function() {
            expect(mathEnforcer.subtractTen({})).to.be.equal(undefined, 'Object did not return correct result!');
        });

        it('should return undefined if input is array', function() {
            expect(mathEnforcer.subtractTen([])).to.be.equal(undefined, 'Object did not return correct result!');
        });

        it('should return correct result if input number', function() {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20, 'Object return correct result!');
        });

        it('should return correct result if input floating points number', function() {
            expect(mathEnforcer.subtractTen(1.5)).to.be.closeTo(-8.5, 0.01);
        });
    });

    describe('sum functionality!', function() {
        it('should return undefined if first input is empty', function() {
            expect(mathEnforcer.sum()).to.be.equal(undefined, 'Object did not return correct result!');
        });

        it('should return undefined if first input is object', function() {
            expect(mathEnforcer.sum({}, 5)).to.be.equal(undefined, 'Object did not return correct result!');
        });

        it('should return undefined if first input is array', function() {
            expect(mathEnforcer.sum([], 5)).to.be.equal(undefined, 'Object did not return correct result!');
        });

        it('should return undefined if second input is string', function() {
            expect(mathEnforcer.sum(10, 'Pesho')).to.be.equal(undefined, 'Object did not return correct result!');
        });

        it('should return undefined if second input is array', function() {
            expect(mathEnforcer.sum(10, [])).to.be.equal(undefined, 'Object did not return correct result!');
        });

        it('should return correct result if input floating points number', function() {
            expect(mathEnforcer.sum(1.5, 2.4)).to.be.closeTo(3.9, 0.01);
        });

        it('should return correct result if input number', function() {
            expect(mathEnforcer.sum(-1, 3)).to.be.equal(2, 'Object return correct result!');
        });
    });
});