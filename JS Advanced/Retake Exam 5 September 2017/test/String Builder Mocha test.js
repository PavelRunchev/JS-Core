let expect = require('chai').expect;
let StringBuilder = require("../02.String builder");

describe("Unit Test String Builder", function () {
    let myString;
    beforeEach(function () {
        myString = new StringBuilder();
    });
    describe("testing exists function", function () {

        it("test exist append", function () {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.equal(true);
        });

        it("test exist prepend", function () {
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.equal(true);
        });

        it("test exist insertAt", function () {
            expect(Object.getPrototypeOf(myString).hasOwnProperty('insertAt')).to.be.equal(true);
        });

        it("test exist remove", function () {
            expect(Object.getPrototypeOf(myString).hasOwnProperty('remove')).to.be.equal(true);
        });

        it("test exist toString", function () {
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });

    });

    describe("Instantiated with string or without anything", function () {
        it("throw TypeError when append object", function () {
            expect(() =>  myString = new StringBuilder(6)).to.throw(TypeError, 'Argument must be string');
        });

        it("throw TypeError when append object", function () {
            myString = new StringBuilder("Hello");
            expect(myString.toString()).to.be.equal("Hello");
        });
    });

    describe("Testing append function", function () {
        it("test with append empty string", function () {
            expect(myString._stringArray.length).to.be.equal(0);
            expect(myString.toString()).to.be.equal('');
        });
        it("test with one string", function () {
            myString.append("Hello");
            myString.append(" JS");
            myString.append(" Advanced");
            expect(myString._stringArray.length).to.be.equal(17);
            expect(myString.toString()).to.be.equal('Hello JS Advanced');
        });

        it("throw TypeError when append object", function () {
            expect(() => myString.append({})).to.throw(TypeError, 'Argument must be string');
        });

        it("throw TypeError when append number", function () {
            expect(() => myString.append(6)).to.throw(TypeError, 'Argument must be string');
        });

        it("throw TypeError when append array", function () {
            expect(() => myString.append([])).to.throw(TypeError, 'Argument must be string');
        });
    });

    describe("Testing prepend function", function () {
        it("Throw TypeError when prepend object", function () {
            expect(() => myString.prepend({})).to.throw(TypeError, "Argument must be string");
        });

        it("Throw TypeError when prepend number", function () {
            expect(() => myString.prepend(-3.4)).to.throw(TypeError, "Argument must be string");
        });

        it("Throw TypeError when prepend array", function () {
            expect(() => myString.prepend([])).to.throw(TypeError, "Argument must be string");
        });

        it("Throw TypeError with empty params", function () {
            expect(() => myString.prepend()).to.throw(TypeError, "Argument must be string");
        });

        it("testing with empty string prepend function", function () {
            myString.append("JS");
            myString.prepend("Hello ");
            expect(myString._stringArray.length).to.be.equal(8);
            expect(myString.toString()).to.be.equal("Hello JS");
        });

        it("testing with empty string prepend function", function () {
            myString.append("JS");
            myString.prepend("");
            expect(myString.toString()).to.be.equal("JS");
        });
    });

    describe("Testing inserAt function", function () {

        it("Throw TypeError with invalid string", function () {
            myString.append("Hello");
            expect(() => myString.insertAt({}, 1)).to.throw(TypeError, "Argument must be string");
        });

        it("Throw TypeError with invalid string", function () {
            myString.append("Hello");
            expect(() => myString.insertAt(-2, 1)).to.throw(TypeError, "Argument must be string");
        });

        it("Throw TypeError with invalid string", function () {
            myString.append("Hello");
            expect(() => myString.insertAt([], 1)).to.throw(TypeError, "Argument must be string");
        });

        it("test with valid string and index", function () {
            myString.append("H");
            myString.insertAt("JS", 1);
            expect(myString.toString()).to.be.equal('HJS');
        });

        it("test with valid string and index", function () {
            myString.append("Groto");
            myString.insertAt("JS", 2);
            expect(myString._stringArray.length).to.be.equal(7);
            expect(myString.toString()).to.be.equal('GrJSoto');
        });
    });

    describe("Testing remove function", function () {
        it("test remove from string", function () {
            myString.append("Hello");
            myString.remove(0, 3);
            expect(myString._stringArray.length).to.be.equal(2);
            expect(myString.toString()).to.be.equal("lo");
        });
    });
});