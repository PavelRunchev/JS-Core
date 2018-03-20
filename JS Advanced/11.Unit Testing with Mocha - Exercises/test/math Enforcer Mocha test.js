let expect = require('chai').expect;
const mathEnforcer = require("../04.Math Enforcer.js");

describe("Math Enforcer", function () {
    describe("addFive", function () {
        it("should return undefined, parameter is not number!", function () {
            expect(mathEnforcer.addFive('hello JS')).to.be.equal(undefined);
        });

        it("should return undefined, non parameter", function () {
            expect(mathEnforcer.addFive()).to.be.equal(undefined);
        });

        it("should return undefined, parameter is not number!", function () {
            expect(mathEnforcer.addFive({name: 'Pesho'})).to.be.equal(undefined);
        });

        it("should return 12.44, parameter is aggregate with 5", function () {
            expect(mathEnforcer.addFive(7.44)).to.closeTo(12.44, 0.01);
        });

        it("should return 0, parameter is aggregate with 5", function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
    });

    describe("subtractTen", function () {
        it("should return undefined, parameter is not number!", function () {
            expect(mathEnforcer.subtractTen('hello JS')).to.be.equal(undefined);
        });

        it("should return undefined, parameter is not number!", function () {
            expect(mathEnforcer.subtractTen([])).to.be.equal(undefined);
        });

        it("should return undefined, non parameter", function () {
            expect(mathEnforcer.subtractTen()).to.be.equal(undefined);
        });

        it("should return undefined, parameter is not number!", function () {
            expect(mathEnforcer.subtractTen({})).to.be.equal(undefined);
        });

        it("should return 0, from parameter is subtract 10", function () {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });

        it("should return 8.5, from parameter is subtract 10", function () {
            expect(mathEnforcer.subtractTen(1.5)).to.closeTo(-8.5, 0.01);
        });

        it("should return -15, from parameter is subtract 10", function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
    });

    describe("sum", function () {
        it("should return undefined, non parameter", function () {
            expect(mathEnforcer.sum()).to.be.equal(undefined);
        });

        it("should return undefined, first parameter is not number!", function () {
            expect(mathEnforcer.sum({}, 5)).to.be.equal(undefined);
        });

        it("should return undefined, second parameter is not number!", function () {
            expect(mathEnforcer.sum(2, [])).to.be.equal(undefined);
        });

        it("should return 16.8, aggregate numbers (11.6, 5.2)", function () {
            expect(mathEnforcer.sum(11.6, 5.2)).to.closeTo(16.8, 0.01);
        });

        it("should return 6, aggregate numbers (-11, 5)", function () {
            expect(mathEnforcer.sum(-11, 5)).to.be.equal(-6);
        });
    });
});