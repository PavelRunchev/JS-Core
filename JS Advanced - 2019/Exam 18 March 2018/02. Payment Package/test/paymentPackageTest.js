const expect = require('chai').expect;
const PaymentPackage = require('../paymentPackage');

describe('we are testing paymentPackage class', function() {
	let pp;
	beforeEach(function() {
		pp = new PaymentPackage('Service', 1500);
	});

	describe('we are testing initial parameters', function() {
		//test 6
		it('should return corectly result that normal name and value', function() {
			expect(pp.name).to.deep.equal('Service');
			expect(pp.value).to.deep.equal(1500);
			expect(pp.VAT).to.eql(20);
			expect(pp.active).to.eql(true);
		});
	});

	describe('we are testing name accessor', function() {
		it('should return throw that invalid name with empty string', function() {
			expect(() => new PaymentPackage('', 1500)).to.throw(Error, 'Name must be a non-empty string');
		});

		it('should return throw that invalid name with null', function() {
			expect(() => new PaymentPackage(null, 1500)).to.throw(Error, 'Name must be a non-empty string');
		});

		it('should return new set name to Name accessor', function() {
			pp.name = 'HP Service';
			expect(pp.name).to.eql('HP Service');
		});
	});

	describe('we are testing value accessor', function() {
		it('should return throw that invalid value with negative number', function() {
			expect(() => new PaymentPackage('Service', -1)).to.throw(Error, 'Value must be a non-negative number');
		});

		it('should return throw that set null to Value', function() {
			expect(() => new PaymentPackage('Service', null)).to.throw(Error, 'Value must be a non-negative number');
		});

		//test 7
		it('should return corectly result that new set zero value', function() {
			pp.value = 0;
			expect(pp.value).to.deep.equal(0);
		});
	});

	describe('we are testing VAT accessor', function() {
		//test 3
		it('should return throw error that set negative number to VAT', function() {
			expect(()=> pp.VAT = -1).to.throw(Error, 'VAT must be a non-negative number');
		});

		// no test to judge
		it('should return throw error that set boolean to VAT', function() {
			expect(()=> pp.VAT = false).to.throw(Error, 'VAT must be a non-negative number');
		});

		// no test to judge
		it('should return new set zero to VAT', function() {
			pp.VAT = 0;
			expect(pp.VAT).to.equal(0);
		});
	});

	describe('we are testing active accessor', function() {
		//test 4
		it('should return throw error that set number to Active', function() {
			expect(()=> pp.active = null).to.throw(Error, 'Active status must be a boolean');
		});

		// no test to judge!
		it('should return False that set boolean false to Active', function() {
			pp.active = false;
			expect(pp.active).to.eql(false);
		});
	});

	describe('we are testing method toString', function() {
		//test 9
		it('should return corctly result without active', function() {
			pp.active = false;
			expect(pp.toString()).to.equal('Package: Service (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
		});
	});
});