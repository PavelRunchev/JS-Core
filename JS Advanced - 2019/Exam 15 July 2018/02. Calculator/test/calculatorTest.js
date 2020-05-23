const expect = require('chai').expect;
const Calculator = require('../Calculator');

describe('test Calcolator class', function() {
	let cl;
	this.beforeEach(function() {
		cl = new Calculator();
	})
	describe('we are testing initialized property', function() {
		it('should return empty array', function() {
			expect(cl.expenses).to.deep.equal([]);
			expect(cl.expenses.length).to.deep.equal(0);
		});
	});

	describe('we are testing add method', function() {
		it('add new  element to array', function() {
			cl.add(10);
			expect(cl.expenses.length).to.deep.equal(1);
		});
	});

	describe('we are testing divideNums method', function() {
		it('should return correctly result', function() {
			cl.add(10);
			cl.add('s');
			expect(cl.divideNums()).to.equal(10);
		});

		it('should return Cannot divide by zero', function() {
			cl.add('p');
			cl.add(2);
			cl.add(0);
			cl.divideNums();
			expect(cl.divideNums()).to.equal('Cannot divide by zero');
		});

		it('should throw error in array not number', function() {
			cl.add('p');
			expect(() => cl.divideNums()).to.throw(Error, 'There are no numbers in the array!');
		});
	});

	describe('we are testinf toString method', function() {
		it('should return empty list', function() {
			expect(cl.toString()).to.equal('empty array');
		});

		it('should return all elements in array', function() {
			cl.add('sp');
			cl.add(5);
			cl.add(NaN);
			expect(cl.toString()).to.deep.equal('sp -> 5 -> NaN');
		});
	});

	describe('we are testing orderBy method', function() {
		it('should return empty at initial array',function() {
			expect(cl.orderBy()).to.equal('empty');
		});

		it('should return ordered elements that numbers', function() {
			cl.add(2);
			cl.add(1);
			expect(cl.orderBy()).to.equal('1, 2');
		});

		it('should return ordered elements that string', function() {
			cl.add(2);
			cl.add('pp');
			expect(cl.orderBy()).to.equal('2, pp');
		});
	});
});