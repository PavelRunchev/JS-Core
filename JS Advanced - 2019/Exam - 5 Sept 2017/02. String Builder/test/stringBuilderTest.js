const expect = require('chai').expect;
const StringBuilder = require('../string-builder');

describe('we are testing StringBuilder class', function() {
	let sb;
	beforeEach(function() {
		sb = new StringBuilder('Stela');
	});

	describe('test initial property', function() {
		//test 10
		it('has functions attached to prototype', function () {
			expect(Object.getPrototypeOf(sb).hasOwnProperty('append')).to.equal(true);
		});

		it('initialize with empty parameter', function() {
			let st = new StringBuilder();
			expect(st._stringArray.length).to.deep.equal(0);
			expect(st.toString()).to.equal('');
		});

		it('initialize with string parameter', function() {
			expect(sb._stringArray.length).to.deep.equal(5);
		});

		it('should throw error that difference from a string', function() {
			expect(() => new StringBuilder(5)).to.throw(TypeError, 'Argument must be string');
		});
	});

	describe('we are testing function append', function() {
		it('should return added string to storage', function() {
			sb.append(' is crazy');
			expect(sb.toString()).to.equal('Stela is crazy');
			expect(sb._stringArray.length).to.deep.equal(14);
		});

		it('should throw error that append boolean', function() {
			expect(() => sb.append(true)).to.throw(TypeError, 'Argument must be string');
		});
	});

	describe('we are testing function prepend', function() {
		it('should return added in begin string to storage', function() {
			sb.prepend('The ');
			expect(sb.toString()).to.equal('The Stela');
			expect(sb._stringArray.length).to.deep.equal(9);
		});

		it('should throw error that prepend object', function() {
			expect(() => sb.prepend({})).to.throw(TypeError, 'Argument must be string');
		});
	});

	describe('we are testing function insertAt', function() {
		it('should return inserted string to storage', function() {
			sb.append('born');
			sb.insertAt(' is ', 5);
			expect(sb.toString()).to.equal('Stela is born');
			expect(sb._stringArray.length).to.deep.equal(13);
		});

		it('should throw error that insertAt object', function() {
			expect(() => sb.insertAt({}, 4)).to.throw(TypeError, 'Argument must be string');
		});
	});

	describe('we are testing function insertAt', function() {
		it('should return inserted string to storage', function() {
			sb.append('born');
			sb.insertAt(' is ', 5);
			expect(sb.toString()).to.equal('Stela is born');
			expect(sb._stringArray.length).to.deep.equal(13);
		});

		it('should throw error that insertAt object', function() {
			expect(() => sb.insertAt({}, 4)).to.throw(TypeError, 'Argument must be string');
		});
	});

	describe('we are testing function remove', function() {
		it('should return inserted string to storage', function() {
			sb.append('born');
			sb.insertAt(' is ', 5);
			sb.remove(5, 3);
			expect(sb.toString()).to.equal('Stela born');
			expect(sb._stringArray.length).to.deep.equal(10);
		});
	});
});