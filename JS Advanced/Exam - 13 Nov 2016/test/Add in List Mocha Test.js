let expect = require('chai').expect;
let createList = require('../02.Unit Testing');

describe("Unit testing in List", function () {
    let list;
    beforeEach(function () {
        list = createList();
    });

    describe("Testing with add function", function () {
        it("test with empty array", function () {
            expect(list.toString()).to.be.equal('');
        });

        it("test with more elements", function () {
            list.add('6');
            list.add('9');
            list.add('2');
            expect(list.toString()).to.be.equal('6, 9, 2');
        });
    });

    describe("Testing with shiftLeft function", function () {
        it("test with one element", function () {
            list.add('2');
            expect(list.toString()).to.be.equal("2");
        });

        it("test with one shiftLeft", function () {
            list.add('2');
            list.add('4');
            list.add('1');
            list.add('6');
            list.shiftLeft();
            expect(list.toString()).to.be.equal("4, 1, 6, 2");
        });

        it("test with more shiftLeft", function () {
            list.add('2');
            list.add('4');
            list.add('1');
            list.add('6');
            list.shiftLeft();
            list.shiftLeft();
            list.shiftLeft();
            list.shiftLeft();
            expect(list.toString()).to.be.equal("2, 4, 1, 6");
        });
    });

    describe("Testing with shiftRight function", function () {
        it("test with one element", function () {
            list.add('Pesho');
            expect(list.toString()).to.be.equal('Pesho');
        });

        it("test with one shiftRight", function () {
            list.add('2');
            list.add('4');
            list.add('1');
            list.add('Gosho');
            list.shiftRight();
            expect(list.toString()).to.be.equal("Gosho, 2, 4, 1");
        });

        it("test with more shiftLeft", function () {
            list.add('2');
            list.add('4');
            list.add('1');
            list.add('6');
            list.shiftRight();
            list.shiftRight();
            list.shiftRight();
            list.shiftRight();
            expect(list.toString()).to.be.equal("2, 4, 1, 6");
        });
    });

    describe("Testing with swap function", function () {
        describe("test with index1", function () {
            it("should return False (index1 is string)", function () {
                list.add('5');
                list.add('1');
                list.swap('Pesho', 1);
                expect(list.swap()).to.be.equal(false);
            });

            it("should return False (index1 is negative)", function () {
                list.add('5');
                list.add('1');
                list.swap(-2, 1);
                expect(list.swap()).to.be.equal(false);
            });

            it("should return False (index1 is equal from array length)", function () {
                list.add('5');
                list.add('1');
                list.swap(2, 1);
                expect(list.swap()).to.be.equal(false);
            });

            it("should return False (index1 is bigest from array length)", function () {
                list.add('5');
                list.add('1');
                list.swap(4, 1);
                expect(list.swap()).to.be.equal(false);
            });

            it("should return elements (index1 is string)", function () {
                list.add('5');
                list.add('1');
                list.swap('Pesho', 1);
                expect(list.toString()).to.be.equal('5, 1');
            });

            it("should return elements (index1 is negative)", function () {
                list.add('5');
                list.add('1');
                list.swap(-2, 1);
                expect(list.toString()).to.be.equal('5, 1');
            });

            it("should return elements (index1 is equal from array length)", function () {
                list.add('5');
                list.add('1');
                list.swap(2, 1);
                expect(list.toString()).to.be.equal('5, 1');
            });

            it("should return elements (index1 is biggest from array length)", function () {
                list.add('5');
                list.add('1');
                list.swap(4, 1);
                expect(list.toString()).to.be.equal('5, 1');
            });
        });

        describe("test with index2", function () {
            it("should return False (index2 is string)", function () {
                list.add('5');
                list.add('1');
                list.swap(0, 'Pesho');
                expect(list.swap()).to.be.equal(false);
            });

            it("should return False (index2 is negative)", function () {
                list.add('5');
                list.add('1');
                list.swap(0, -2);
                expect(list.swap()).to.be.equal(false);
            });

            it("should return False (index2 is equal from array length)", function () {
                list.add('5');
                list.add('1');
                list.swap(0, 2);
                expect(list.swap()).to.be.equal(false);
            });

            it("should return False (index2 is bigest from array length)", function () {
                list.add('5');
                list.add('1');
                list.swap(0, 4);
                expect(list.swap()).to.be.equal(false);
            });

            it("should return elements (index2 is string)", function () {
                list.add('5');
                list.add('1');
                list.swap(0, "Pesho");
                expect(list.toString()).to.be.equal('5, 1');
            });

            it("should return elements (index2 is negative)", function () {
                list.add('5');
                list.add('1');
                list.swap(0, -1);
                expect(list.toString()).to.be.equal('5, 1');
            });

            it("should return elements (index2 is equal from array length)", function () {
                list.add('5');
                list.add('1');
                list.swap(0, 2);
                expect(list.toString()).to.be.equal('5, 1');
            });

            it("should return elements (index2 is biggest from array length)", function () {
                list.add('5');
                list.add('1');
                list.swap(0, 4);
                expect(list.toString()).to.be.equal('5, 1');
            });
        });

        describe("both indexes with equals", function () {
            it("index1 is equal index2", function () {
                expect(list.swap(0, 0)).to.be.equal(false);
            });
            it("index1 is equal index2", function () {
                list.add('4');
                list.add('Gosho');
                list.add('11');
                expect(list.swap(0, 0)).to.be.equal(false);
            });

            it("index1 is equal index2", function () {
                list.add('4');
                list.add('Gosho');
                list.add('11');
                list.swap(0, 0);
                expect(list.toString()).to.be.equal('4, Gosho, 11');
            });

            it("index1 is biggest from index2", function () {
                list.add('4');
                list.add('Gosho');
                list.add('11');
                expect(list.swap(1, 0)).to.be.equal(true);
            });
        });

        it("test with valid indexes", function () {
            list.add("33.4");
            list.add("11");
            list.add("0.16");
            expect(list.swap(0, 2)).to.be.equal(true);
        });

        it("test with valid indexes", function () {
            list.add("33.4");
            list.add("11");
            list.add("0.16");
            list.swap(0, 2);
            expect(list.toString()).to.be.equal('0.16, 11, 33.4');
        });
    });
});
