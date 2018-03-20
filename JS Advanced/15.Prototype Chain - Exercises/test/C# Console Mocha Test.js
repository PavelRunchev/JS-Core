let expect = require('chai').expect;
const Console = require('../05.C# Console').Console;

describe("C# Console Tests", function () {

    it("should return single string",function () {
        let string = "Hello";
        expect(Console.writeLine(string)).to.be.equal(string);
    });

    it("should return object",function () {
        let object = {name: "Pesho", age: 39};
        expect(Console.writeLine(object)).to.be.equal(JSON.stringify(object));
    });

    it("should return valid arguments",function () {
        expect(Console.writeLine("{0} + {1} = {2}", 2, 3, 5)).to.be.equal("2 + 3 = 5");
    });

    it("should return TepeError for null arguments",function () {
        expect(() => Console.writeLine()).to.throw(TypeError);
    });

    it("should return TepeError first argument is not string",function () {
        expect(() => Console.writeLine(2, 3, 7)).to.throw(TypeError);
    });

    it("should return RangeError",function () {
        expect(() => Console.writeLine("{0) + {1}", 2, 3, 7)).to.throw(RangeError);
    });

    it("should return RangeError",function () {
        expect(() => Console.writeLine("{0) + {0}", 2, 3)).to.throw(RangeError);
    });

    it("should return RangeError",function () {
        expect(() => Console.writeLine("{0) + {1} = {2}", 2, 3)).to.throw(RangeError);
    });

    it("should return RangeError is recognize the placeholder number",function () {
        expect(() => Console.writeLine("{13}", 1)).to.throw(RangeError);
    });
});