let expect = require('chai').expect;
let makeList = require('../02. Add Left Add Right Clear');


describe("Unit Test with List", function () {
     let list;
     beforeEach(function () {
         list = makeList();
     });

     describe("Test with addLeft function", function () {
         it("test valid elements", function () {
             list.addLeft(3.14);
             list.addLeft("Pavel");
             expect(list.toString()).to.be.equal("Pavel, 3.14");
         });

         it("test valid elements", function () {
             list.addLeft(3.14);
             list.addLeft({name: "Pesho"});
             expect(list.toString()).to.be.equal("[object Object], 3.14");
         });
     });

    describe("Test with addRight function", function () {
        it("test valid elements", function () {
            list.addLeft(3.14);
            list.addRight("Pavel");
            expect(list.toString()).to.be.equal("3.14, Pavel");
        });

        it("test valid elements", function () {
            list.addRight(3.14);
            list.addLeft({name: "Pesho"});
            expect(list.toString()).to.be.equal("[object Object], 3.14");
        });
    });

     describe("Test with clear function", function () {
        it("clear all elements", function () {
            list.addLeft("Pesho");
            list.addRight("Gosho");
            list.clear();
            expect(list.toString()).to.be.equal("");
        });

         it("clear all elements", function () {
             list.clear();
             expect(list.toString()).to.be.equal("");
         });
    });
});
