let expect = require('chai').expect;
let Sumator = require("../02.Sumator Class.js");

describe("Unit Testing from Sumator class", function () {
    let mySumator;
    beforeEach(function () {
        mySumator = new Sumator();
    });

    describe("Testing for exists function", function () {
       it("test for add function", function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
       });

        it("test for sumNums function", function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        });

        it("test for removeByFilter function", function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        });

        it("test for toString function", function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });

    describe("Testing with add function", function () {
        it("test with one element", function () {
            mySumator.add("Pesho");
            expect(mySumator.toString()).to.be.equal("Pesho");
        });

        it("test with one element", function () {
            mySumator.add(5);
            mySumator.add("Gosho");
            mySumator.add([1]);
            mySumator.add({name: "Pesho"});
            expect(mySumator.toString()).to.be.equal('5, Gosho, 1, [object Object]');
        });
    });

    describe("Testing with sumNums function", function () {
        it("test with empty array", function () {
            expect(mySumator.sumNums()).to.be.equal(0);
        });

        it("test with more elements", function () {
            mySumator.add(11);
            mySumator.add(5.5);
            mySumator.add(-11);
            expect(mySumator.sumNums()).to.be.equal(5.5);
        });

        it("test with any elements", function () {
            mySumator.add("Hello");
            mySumator.add(5.5);
            mySumator.add({name: 'Pesho'});
            mySumator.add(1.5);
            expect(mySumator.sumNums()).to.be.equal(7);
        });
    });

    describe("Testing with removeByFilter function", function () {
        it("remove elements by filter criteria", function () {
           mySumator.add(2);
           mySumator.add(3);
           mySumator.add(4);
           mySumator.removeByFilter(x => x % 2 !== 0);
           expect(mySumator.data.join(", ")).to.be.equal('2, 4');
        });

        it("remove elements by biggest from 10", function () {
            mySumator.add(11);
            mySumator.add(3);
            mySumator.add(21);
            mySumator.add(10);
            mySumator.removeByFilter(x => x > 10);
            expect(mySumator.data.join(", ")).to.be.equal('3, 10');
        });
    });

    describe("Testing with toString function", function () {
        it("printig with empty array", function () {
            expect(mySumator.toString()).to.be.equal('(empty)') ;
        });

        it("printig array with the elements", function () {
            mySumator.add(100);
            mySumator.add("Developer");
            mySumator.add({name: "Pavel"});
            mySumator.add(() => 10 % 2 === 0);
            expect(mySumator.toString()).to.be.equal("100, Developer, [object Object], () => 10 % 2 === 0") ;
        });
    });
});