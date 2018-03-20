let expect = require("chai").expect;
const isSymmetric = require("../05.Check for Symmetry.js");

describe("Check for isSymmetric", function(){
    "use strict";
    it("should return true for [1]", function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it("should return false for str", function () {
        expect(isSymmetric('str')).to.be.equal(false);
    });
    it("should return true for [-1, 2, -1]", function () {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });
    it("should return false for [-1, 2, 1]", function () {
        expect(isSymmetric([-1, 2, 1])).to.be.equal(false);
    });
    it("should return false for [1, 2, 3, 4, 2, 1]", function () {
        expect(isSymmetric([1, 2, 3, 4, 2, 1])).to.be.equal(false);
    });
    it("should return false for [1, 2]", function () {
        expect(isSymmetric([1, 2])).to.be.equal(false);
    });
    it("should return true for [1, 2, 3, 3, 2, 1]", function () {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.equal(true);
    });
    it("should return true for [6, \"it\", {b:1}, new Date(), {b:1}, \"it\", 6]", function () {
        expect(isSymmetric([6, "it", {b:1}, new Date(), {b:1}, "it", 6])).to.be.equal(true);
    });
    it("should return false for [6, \"it\", {C:8}, new Date(), {b:1}, \"it\", 6]", function () {
        expect(isSymmetric([6, "ti", {b:1}, new Date(), {b:1}, "it", 6])).to.be.equal(false);
    });
    it("should return false for 1, 2, 2, 1", function () {
        expect(isSymmetric(1, 2, 2, 1)).to.be.equal(false);
    });
});