
let expect = require("chai").expect;
const createCalculator = require("../07.Add Subtract.js");

describe("Add Subtract", function(){
    "use strict";
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });

    it("should return an object", function () {
        expect(typeof calc).to.be.equal('object');
    });

    it("should return 0 after get value", function () {
        let value = calc.get();
        expect(calc.get()).to.be.equal(0);
    });


    it("should return 8 after (3 + 5)", function () {
        calc.add(3); calc.add(5);
        expect(calc.get()).to.be.equal(8);
    });

    it("should return 7 after (3 - 5)", function () {
        calc.add(3); calc.subtract(5);
        expect(calc.get()).to.be.equal(-2);
    });

    it("should return -15 after (-10 - 5)", function () {
        calc.subtract(10); calc.subtract(5); let value = calc.get();
        expect(calc.get()).to.be.equal(-15);
    });


    // problem judge test 7!
    // for test judge program code no cast to number function add() and output // 0101
    // we want result to 11
    it("should return 11 after parse number as string", function () {
        calc.add('10');
        calc.add(1);
        expect(calc.get()).to.equal(11);
    });

    it("should return 4.2 after (5.3 - 1.1)", function () {
        calc.add(5.3); calc.subtract(1.1); let value = calc.get();
        expect(calc.get()).to.be.closeTo(4.2, 0.001);
    });

    it("should return NaN after ('hello')", function () {
        calc.add('hello'); let value = calc.get();
        expect(calc.get()).to.be.NaN;
    });

    it("should return NaN after ('hello')", function () {
        calc.subtract('hello'); let value = calc.get();
        expect(calc.get()).to.be.NaN;
    });
});