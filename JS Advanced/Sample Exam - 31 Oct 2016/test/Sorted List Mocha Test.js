let expect = require('chai').expect;
let SortedList = require('../02.Sorted List');

describe("Unit Tests Sorted List", function () {
    let myList;
    beforeEach(function () {
       myList = new SortedList();
    });
    describe("Test for functions", function () {
        it("testing for add function exist", function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        });

        it("testing for remove function exist", function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        });

        it("testing for get function exist", function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        });

        it("testing for size function exist", function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });
    });

    describe("Test for add function", function () {
        it("should testing with one element in collection", function () {
            myList.add(10);
            expect(myList.list.join(", ")).to.equal("10", "List did not add correctly!");
        });

        it("should testing with more elements in collection", function () {
            myList.add(10);
            myList.add(7);
            myList.add(2);
            myList.add(3);
            expect(myList.list.join(", ")).to.equal("2, 3, 7, 10", "List did not add correctly!");
        });
    });

    describe("Test for remove function", function () {
        it("should testing with empty array", function () {
            expect(() => myList.remove(0)).throw(Error, "Collection is empty.");
        });

        it("testing with negative index to remove from collection", function () {
            myList.add(11);
            myList.add(9);
            expect(() => myList.remove(-1)).throw(Error, "Index was outside the bounds of the collection.");
        });

        it("testing with index equal from length of collection", function () {
            myList.add(11);
            myList.add(9);
            expect(() => myList.remove(2)).throw(Error, "Index was outside the bounds of the collection.");
        });

        it("testing with index biggest from length of collection", function () {
            myList.add(11);
            myList.add(9);
            expect(() => myList.remove(3)).throw(Error, "Index was outside the bounds of the collection.");
        });

        it("testing with valid index (should remove element from the collection", function () {
            myList.add(11);
            myList.add(9);
            myList.add(1);
            myList.remove(2);
            expect(myList.list.join(", ")).to.equal("1, 9", "add element not correctly!");
        });
    });

    describe("Test for get function", function () {
        it("testing with index biggest from length of collection", function () {
            myList.add(11);
            myList.add(9);
            expect(() => myList.get(4)).throw(Error, "Index was outside the bounds of the collection.");
        });

        it("testing with valid index", function () {
            myList.add(11);
            myList.add(9);
            expect(myList.get(1)).to.equal(11);
        });
    });

    describe("Test for size function", function () {
        it("Testing with any elements (should return size in the collection)", function () {
            myList.add(3);
            myList.add(4);
            myList.add(3);
            expect(myList.size).to.equal(3, "size is not correctly!");
        });
    });
});