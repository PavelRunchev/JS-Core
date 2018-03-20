
let expect = require("chai").expect;
const sum = require("../04.Sum of Numbers");

describe("Sum of Numbers", function(){
    "use strict";
    it("should return 3 for [1, 2]", function () {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return 0 for []", function () {
        expect(sum([])).to.be.equal(0);
    });
    it("should return 1 for [1]", function () {
        expect(sum([1])).to.be.equal(1);
    });
    it("should return 3 for [1.5, -2, 3.5]", function () {
        expect(sum([1.5, -2, 3.5])).to.be.equal(3);
    });
    it("should return NaN for string", function () {
        expect(sum(['string'])).to.be.NaN;
    });
});