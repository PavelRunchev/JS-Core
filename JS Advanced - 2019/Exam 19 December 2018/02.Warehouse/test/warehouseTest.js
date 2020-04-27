const expect = require('chai').expect;
const Warehouse = require('../warehouse');

describe('test with warehouse class', function() {
	describe('test with capacity functionality', function () {
		it('test with positive number', function() {
			wh = new Warehouse(1000);
			expect(wh.capacity).to.deep.equal(1000);
		});

		it('test with zero number', function() {
			expect(() => new Warehouse(0)).to.throw('Invalid given warehouse space');
		});

		it('test with negative number', function() {
			expect(() => new Warehouse(-2)).to.throw('Invalid given warehouse space');
		});
	});

	describe('test with addProduct function', function() {
		it('should return corectly result', function() {
			const wh = new Warehouse(10);
			expect(wh.addProduct('Food', 'chicken', 6)).to.deep.equal({ chicken: 6 });
		});

		it('should return corectly result with more same food', function() {
			const wh = new Warehouse(10);
			wh.addProduct('Food', 'chicken', 4);
			expect(wh.addProduct('Food', 'chicken', 6)).to.deep.equal({ chicken: 10 });
		});

		it('should return throw at without space', function() {
			const wh = new Warehouse(10);
			wh.addProduct('Food', 'chicken', 4);
			expect(() => wh.addProduct('Food', 'chicken', 8)).to.throw('There is not enough space or the warehouse is already full');
		});
	});

	describe('test with orderProducts', function() {
		it('should return ordered products by type', function() {
			let wh = new Warehouse(1000);
			wh.addProduct('Food', 'apple', 10);
			wh.addProduct('Food', 'kiwi', 5);
			wh.addProduct('Food', 'tomato', 8);
			expect(wh.orderProducts('Food')).to.deep.equal({'apple': 10, 'tomato': 8, 'kiwi': 5});
		});

		it('should return empty ordered products by type', function() {
			let wh = new Warehouse(1000);
			expect(wh.orderProducts('Food')).to.deep.equal({});
		});
	});

	describe('test with occupiedCapacity function', function() {
		it('should return correctly occupied capacity', function() {
			let wh = new Warehouse(50);
			wh.addProduct('Food', 'apple', 10);
			wh.addProduct('Food', 'kiwi', 5);
			wh.addProduct('Food', 'tomato', 8);
			expect(wh.occupiedCapacity()).to.deep.equal(23);
		});

		it('should return zero occupied capacity', function() {
			let wh = new Warehouse(50);
			expect(wh.occupiedCapacity()).to.deep.equal(0);
		});
	});

	describe('test with revision functionality', function() {
		it('test at empty stock', function() {
			let wh = new Warehouse(50);
			expect(wh.revision()).to.equal('The warehouse is empty');
		});

		it('should return ordered revision', () => {
			let w = new Warehouse(50);
			w.addProduct('Food', 'Apple', 5);
			w.addProduct('Food', 'Kiwi', 6);
			w.orderProducts('Food');
			expect(w.revision()).to.equal('Product type - [Food]\n- Kiwi 6\n- Apple 5\nProduct type - [Drink]');
		});
	});

	describe('test scrapeAProduct function', function() {
		it('should return no exist product', function() {
			let wh = new Warehouse(50);
			wh.addProduct('Food', 'apple', 10);
			expect(() => wh.scrapeAProduct('kiwi', 5)).to.throw('kiwi do not exists');
		});

		it('should return less quantity to current product', function() {
			let wh = new Warehouse(50);
			wh.addProduct('Food', 'apple', 10);
			expect(wh.scrapeAProduct('apple', 6)).to.deep.equal({ 'apple': 4 });
		});

		it('should return reset quantity to current product', function() {
			let wh = new Warehouse(50);
			wh.addProduct('Food', 'apple', 10);
			expect(wh.scrapeAProduct('apple', 11)).to.deep.equal({ 'apple': 0 });
		});
	});
});

