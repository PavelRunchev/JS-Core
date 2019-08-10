const expect = require('chai').expect;
const Console = require('../5. C# Console.js');

describe('Testing C# Console functionality', function() {
    //test 1
    it('should return string at input string', function() {
        expect(Console.writeLine('Hello')).to.equal('Hello', 'Correct result!');
    });
    //test 2
    it('should return string at input object', function() {
        expect(Console.writeLine({name: 'Peter'})).to.equal('{"name":"Peter"}', 'Correct result!');
    });
    //test 3
    it('should return TypeError, templateString not is string!', function() {
        expect(() => Console.writeLine(1, 2)).to.throw(TypeError);
    });

    //test 7
    it('should return RangeError, number parameters does not correct to placeholders!', function() {
        expect(() => Console.writeLine("Hello {10} is {11} to {12}",'Steve', 'living', 'Canada', 'happy')).to.throw(RangeError);
    });

    //test 5
    it('should return RangeError, number parameters does not correct!', function() {
        expect(() => Console.writeLine("Hello {0} is {1} to {3}",'Steve', 'living')).to.throw(RangeError);
    });

    //test 4, 6
    it('should return correct result', function() {
        expect(Console.writeLine("Hello {0} is {1} to {2}.",'Steve', 'living', 'Canada')).to.equal('Hello Steve is living to Canada.');
    });
});