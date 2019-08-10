const expect = require('chai').expect;
const Warehouse = require('../02.Warehouse/Warehouse.js');

describe('testing Warehouse class', () => {
    it('testing constructor', () => {
        let w = new Warehouse(10);
        expect(w.capacity).to.equal(10);
    });

    it('testing constructor with zero', () => {
        expect(() => new Warehouse(0)).to.throw('Invalid given warehouse space');
    });

    it('testing constructor with negative number', () => {
        expect(() => new Warehouse(-2)).to.throw('Invalid given warehouse space');
    });

    describe('testing addProduct function', () => {
        it('should return add product apple', () => {
            let w = new Warehouse(10);
            expect(w.addProduct('Food', 'apple', 5)).to.deep.equal({ apple: 5 });
        });

        it('should return add product second apples', () => {
            let w = new Warehouse(10);
            w.addProduct('Food', 'apple', 5);
            expect(w.addProduct('Food', 'apple', 5)).to.deep.equal({ apple: 10 });
        });

        it('should return nt enough space', () => {
            let w = new Warehouse(10);
            w.addProduct('Food', 'apple', 8);
            expect(() => w.addProduct('Food', 'apple', 5)).to.throw('There is not enough space or the warehouse is already full');
        });
    });

    describe('testing orderProducts function', () => {
        it('should return ordered products', () => {
            let w = new Warehouse(50);
            w.addProduct('Food', 'Apple', 5);
            w.addProduct('Food', 'Kiwi', 6);
            w.addProduct('Food', 'Tomato', 8);
            expect(w.orderProducts('Food')).to.deep.equal({ Tomato: 8, Kiwi: 6, Apple: 5 });
        });

        // it('should return add product second apples', () => {
        //     let w = new Warehouse(10);
        //     w.addProduct('Food', 'apple', 5);
        //     expect(w.addProduct('Food', 'apple', 5)).to.deep.equal({ apple: 10, });
        // });

       
    });

    it('should return capacity', () => {
        let w = new Warehouse(50);
        w.addProduct('Food', 'Apple', 5);
        w.addProduct('Food', 'Kiwi', 6);
        w.addProduct('Food', 'Tomato', 8);
        expect(w.occupiedCapacity()).to.deep.equal(19);
    });

    it('should return capacity zero', () => {
        let w = new Warehouse(50);
        expect(w.occupiedCapacity()).to.deep.equal(0);
    });

    it('should return empty revision', () => {
        let w = new Warehouse(50);
        expect(w.revision()).to.equal('The warehouse is empty');
    });

    it('should return revision', () => {
        let w = new Warehouse(50);
        w.addProduct('Food', 'Apple', 5);
        w.addProduct('Food', 'Kiwi', 6);
        expect(w.revision()).to.equal('Product type - [Food]\n- Apple 5\n- Kiwi 6\nProduct type - [Drink]');
    });

    it('should return ordered revision', () => {
        let w = new Warehouse(50);
        w.addProduct('Food', 'Apple', 5);
        w.addProduct('Food', 'Kiwi', 6);
        w.orderProducts('Food');
        expect(w.revision()).to.equal('Product type - [Food]\n- Kiwi 6\n- Apple 5\nProduct type - [Drink]');
    });


    it('should return product is exist', () => {
        let w = new Warehouse(50);
        w.addProduct('Food', 'Apple', 5);
        w.addProduct('Food', 'Kiwi', 6);
        w.orderProducts('Food');
        expect(() => w.scrapeAProduct('Drink', 'kola')).to.throw('Drink do not exists');
    });

    it('should return reduce product', () => {
        let w = new Warehouse(50);
        w.addProduct('Food', 'Apple', 5);
        w.addProduct('Food', 'Kiwi', 6);
        w.orderProducts('Food');
        expect(w.scrapeAProduct('Apple', 3)).to.deep.equal({ Kiwi: 6, Apple: 2});
    });

    it('should return reset product', () => {
        let w = new Warehouse(50);
        w.addProduct('Food', 'Apple', 5);
        w.addProduct('Food', 'Kiwi', 6);
        w.orderProducts('Food');
        expect(w.scrapeAProduct('Apple', 6)).to.deep.equal({ Kiwi: 6, Apple: 0});
    });
});