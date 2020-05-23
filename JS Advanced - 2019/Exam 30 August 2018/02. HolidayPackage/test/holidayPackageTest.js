const expect = require('chai').expect;
const HolidayPackage = require('../HolidayPackage');

describe('we are testing HolidayPackage class', function(){
	let hp;
	this.beforeEach(function() {
		hp = new HolidayPackage('Italy', 'Summer');
	});

	describe('test initial properties', function() {
		it('should return corect inital parametries', function(){
			expect(hp.vacationers).to.deep.equal([]);
			expect(hp.destination).to.deep.equal('Italy');
			expect(hp.season).to.deep.equal('Summer');
			expect(hp.insuranceIncluded).to.deep.equal(false);
		});
	});

	describe('we are testing insuranceIncluded accessor', function(){
		it('should return change result to true', function() {
			hp.insuranceIncluded = true;
			expect(hp.insuranceIncluded).to.equal(true);
		});

		it('should return throw error that not boleon', function() {
			;
			expect(() => hp.insuranceIncluded = 'true').to.throw(Error, 'Insurance status must be a boolean');
		});
	});
	
	describe('test addVacationer method', function() {
		it('should added vacationer to array', function(){
			hp.addVacationer('Ivan Ivanov');
			expect(hp.vacationers.length).to.deep.equal(1);
		});

		it('should throw error that invalid string', function(){
			expect(() => hp.addVacationer('IvanIvanov'))
			.to.deep.throw(Error, 'Name must consist of first name and last name');
		});

		it('should throw error that invalid type', function(){
			expect(() => hp.addVacationer({}))
			.to.deep.throw(Error, 'Vacationer name must be a non-empty string');
		});

		it('should throw error that space string', function(){
			expect(() => hp.addVacationer(' '))
			.to.deep.throw(Error, 'Vacationer name must be a non-empty string');
		});

		it('should throw error that empty string', function(){
			expect(() => hp.addVacationer(''))
			.to.deep.throw(Error, 'Name must consist of first name and last name');
		});
	});

	describe('we are testing showVacationers method', function(){
		it('should return no add vacationers', function() {
			expect(hp.showVacationers()).to.equal('No vacationers are added yet');
		});

		it('should return two vacanioners', function() {
			hp.addVacationer('Ivan Peev');
			hp.addVacationer('Ivo Peev');
			expect(hp.showVacationers()).to.equal('Vacationers:\nIvan Peev\nIvo Peev');
		});
	});

	describe('we are testing generateHolidayPackage method', function(){
		it('should throw error that empty vacantioners', function(){
			expect(() => hp.generateHolidayPackage())
			.to.throw(Error, 'There must be at least 1 vacationer added');
		});

		it('', function() {
			hp.addVacationer('Ivo Peev');
			expect(hp.generateHolidayPackage())
			.to.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvo Peev\nPrice: 600');
		});

		it('should return with insurance included', function() {
			hp.addVacationer('Ivo Peev');
			hp.insuranceIncluded = true;
			expect(hp.generateHolidayPackage())
			.to.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvo Peev\nPrice: 700');
		});

		it('should return without season bonus', function() {
			hp.season = 'Spring';
			hp.addVacationer('Ivo Peev');
			hp.insuranceIncluded = true;
			expect(hp.generateHolidayPackage())
			.to.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvo Peev\nPrice: 500');
		});
	});
});