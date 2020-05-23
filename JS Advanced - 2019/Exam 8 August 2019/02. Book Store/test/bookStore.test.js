const expect = require('chai').expect;
const BookStore = require('../02. Book Store.js');


describe('Book Store testing', function() {
    let store;
    beforeEach(function() {
        store = new BookStore('Store');
    })
    describe('constructor parametar tests', function() {
        it('should initialize properties correctly', function(){
            expect(store.name).to.be.equal('Store');
            expect(store.books).to.deep.equal([]);
            expect(store.workers).to.deep.equal([]);
        });
    });

    describe('tests with add books in store', function() {
        it('add two book in store', function() {
            store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling']);
            store.hire('Ina', 'seller');
            expect(store.books.length).to.equal(2);
            store.sellBook('Inferno', 'Ina');
            expect(store.books[0]).to.deep.equal({ title: 'Harry Potter', author: 'J.Rowling'});
            expect(store.books.length).to.equal(1);
        });

        //test 4
        it('add one book in store', function() {
            expect(store.stockBooks(['Inferno-Dan Braun'])).to.deep.equal([{ title: 'Inferno', author: 'Dan Braun'}]);
            expect(store.books.length).to.equal(1);

        });
    });

    describe('test hire positions', function() {
        it('worker is start employee', function() {
            expect(store.hire('George', 'seller')).to.equal('George started work at Store as seller');
            store.hire('Ina', 'seller');
            store.hire('Tom', 'juniorSeller');
            expect(store.workers.length).to.equal(3);
        });

        it('worker is start employee and test with object', function() {
            store.hire('George', 'seller');
            expect(store.workers.length).to.equal(1);
            expect(store.workers[0]).to.deep.equal({name: 'George', position: 'seller', booksSold: 0 });
        });

        it('worker is already hired', function() {
            store.hire('George', 'seller');
            expect(() => store.hire('George', 'seller')).to.throw(Error, `This person is our employee`);
        });
    });

    describe('tests fire employeer', function() {
        it('do not worker name', function() {
            expect(() => store.fire('Stamat')).to.throw(Error, `Stamat doesn't work here`);
        });

        it('That worker is fired!', function() {
            store.hire('Stamat', 'seller');
            expect(store.fire('Stamat')).to.equal(`Stamat is fired`);
            expect(store.workers.length).to.equal(0);
        });
    });

    describe('tests sellBook', function() {
        it('book is not found', function() {
            expect(() => store.sellBook('Trol', 'Pesho')).to.throw(Error, 'This book is out of stock');
        });

        it('worker is not found', function() {
            store.stockBooks(['Inferno-Dan Braun']);
            expect(() => store.sellBook('Inferno', 'Pesho')).to.throw(Error, 'Pesho is not working here');
        });

        it('successfully sold book', function() {
            store.stockBooks(['Inferno-Dan Braun']);
            store.hire('Pesho', 'seller');
            store.sellBook('Inferno', 'Pesho');
            expect(store.workers.length).to.equal(1);
            expect(store.books.length).to.equal(0);
            expect(store.workers[0].booksSold).to.equal(1);
        });
    });

    describe('test print ll workers', function() {
        it('test with empty workers', function() {
            expect(store.printWorkers()).to.equal('');
        });

        it('print two workers', function() {
            store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling']);
            store.hire('Ina', 'seller');
            store.hire('Tom', 'juniorSeller');
            store.sellBook('Inferno', 'Ina');
            expect(store.printWorkers()).to.equal('Name:Ina Position:seller BooksSold:1\nName:Tom Position:juniorSeller BooksSold:0');
        });
    });
});