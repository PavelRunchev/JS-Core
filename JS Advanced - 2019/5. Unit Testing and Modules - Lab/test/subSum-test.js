let expect = require('chai').expect;
let result = require("../1. Sub Sum.js");

describe("Sub Sum - get sum array of numbers", function() {
    it("should return all elements in array, Test1!", function() {
        expect(result([10, 20, 30, 40, 50, 60], 3, 300)).to.be.equal(150);
    });

    it("should return all elements in array, Test2!", function() {       
        expect(result([5, 1, 3], -1, 2)).to.be.equal(9);
    });

    it("should return all elements in array, Test3!", function() {
        expect(result([5, 1, 3], 0, 2)).to.be.equal(9);
    });

    it("should return all elements in array, Test4!", function() {
        expect(result([], 0, 0)).to.be.equal(0);
    });

    it("should return Nan, second element is type string!", function() {
        expect(result([5, "az", 3, 7], 0, 2)).to.be.NaN
    });

    it("should return Nan, second element is type object!", function() {
        expect(Number.isNaN(result([5, {}, 3, 7], 0, 2))).to.be.true;
    });
});
