let expect = require('chai').expect;
const lookupChar = require("../03.Char Lookup");

describe("Chaer Lookup", function () {
    it("should return space from string", function () {
        expect(lookupChar('hello JS', 5)).to.be.equal(" ");
    });

    it("should return S from string", function () {
        expect(lookupChar('hello JS', 7)).to.be.equal("S");
    });

    it("should return undefined, first parameter is no string", function () {
        expect(lookupChar({name: "Pesho"}, 7)).to.be.equal(undefined);
    });

    it("should return undefined, first parameter is no string", function () {
        expect(lookupChar("Pesho", 7.14)).to.be.equal(undefined);
    });

    it("should return undefined, second parameter is no number", function () {
        expect(lookupChar("this is", "JS")).to.be.equal(undefined);
    });

    it("should return incorect index, second parameter is no number", function () {
        expect(lookupChar("this is", -1)).to.be.equal("Incorrect index");
    });

    it("should return incorect index, second parameter is no number", function () {
        expect(lookupChar("this is", 7)).to.be.equal("Incorrect index");
    });
});