let expect = require('chai').expect;
const isOddOrEven = require("../02.Even or Odd.js");

describe("isOddOrEven", function () {

    it("should return undefind with number parameter", function () {
       expect(isOddOrEven(10)).to.be.equal(undefined,
           "Function did not return the correct result!");
    });

    it("should return undefind with number parameter", function () {
        expect(isOddOrEven({name: "Poul"})).to.be.undefined;
    });

    it("should return string with odd length", function () {
        expect(isOddOrEven("cat")).to.be.equal('odd');
    });

    it("should return string with even length", function () {
        expect(isOddOrEven("even")).to.be.equal('even');
    });
});

