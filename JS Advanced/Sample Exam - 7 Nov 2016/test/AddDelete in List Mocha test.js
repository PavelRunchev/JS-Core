let expect = require('chai').expect;
let list = require('../02.AddDelete in List');


describe('list', function () {
    let myList;
    beforeEach(function(){
           myList = list;

    });

    describe("test with add function",function () {
        it("add one element", function () {
            myList.add("Pesho");
            expect(myList.toString()).to.equal("Pesho");
        });

        it("add more elements", function () {
            myList.add("Pesho");
            myList.add(-22);
            myList.add({name: 'Lili'});
            myList.add(['1']);
            expect(myList.toString()).to.equal("Pesho, -22, [object Object], 1");
        });
    });

    describe("test with remove function", function () {
        it("negative index return undefined", function () {
            myList.add("Pesho");
            myList.add(-22);
            expect(myList.delete(-1)).to.undefined;
        });

        it("index is equal with list length return undefined", function () {
            myList.add("Pesho");
            myList.add(-22);
            myList.add({name: 'Lili'});
            myList.add(['1']);
            expect(myList.delete(4)).to.undefined;
        });

        it("remove invalid index return undefined", function () {
            myList.add("Pesho");
            myList.add(-22);
            myList.add({name: 'Lili'});
            myList.add(['1']);
            expect(myList.delete(7)).to.undefined;
        });

        it("remove invalid index return undefined", function () {
            myList.add("Pesho");
            myList.add(-22);
            myList.add({name: 'Lili'});
            myList.add(['1']);
            expect(myList.delete('Pesho')).to.undefined;
        });

        it("remove empty index return undefined", function () {
            myList.add("Pesho");
            myList.add(-22);
            myList.add({name: 'Lili'});
            myList.add(['1']);
            expect(myList.delete()).to.undefined;
        });

        it("remove with valid index", function () {
            myList.add("Pesho");
            myList.add(-22);
            expect(myList.delete(1)).to.be.equal(-22);
        });


        it("remove with valid index", function () {
            myList.add("Pesho");
            myList.add(-22);
            myList.delete(1);
            expect(myList.toString()).to.be.equal("Pesho");
        });
    });
});


//Warning Mocha testing get 100/100 in Judge!!!!
//WebStorm testing not corectly 5 errors!!!