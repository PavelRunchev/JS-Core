const expect = require('chai').expect;
const SkiResort = require('../solution.js');

describe('SkiResort test', function () {
    let ski;
    beforeEach(function() {
        ski = new SkiResort('Some');
    });

    describe('test constructor parameters', function() {
        it('should initialize properties correcly', function() {
            expect(ski.name).to.equal('Some');
            expect(ski.voters).to.deep.equal(0);
            expect(ski.hotels).to.deep.equal([]);
        });
    });

    describe('tests with getter bestHotel', function() {
        it('return no votes at default empty hotel', function() {
            expect(ski.bestHotel).to.equal('No votes yet');
            expect(ski.hotels.length).to.equal(0);
        });

        it('return best hotel at votes', function() {
            ski.build('Orlovetz', 30);
            ski.build('Mac', 54);
            ski.leave('Orlovetz', 5, 10);
            expect(ski.bestHotel).to.equal('Best hotel is Orlovetz with grade 50. Available beds: 35');
        });
    });

    describe('tests function build', function() {
        it('should thrown error at empty hotel name', function() {
            expect(() => ski.build('', 30)).to.Throw(Error, "Invalid input");
        });

        it('should thrown error at invalid beds', function() {
            expect(() => ski.build('Orlovetz', 0)).to.Throw(Error, "Invalid input");
        });

        it('should add hotel correctly',function() {
            expect(ski.build('Orlovetz', 30)).to.equal('Successfully built new hotel - Orlovetz');
            expect(ski.hotels.length).to.equal(1);
        });
    });

    describe('tests function book', function() {
        it('should throw error with invalid name in hotel', function() {
            ski.build('Orlovetz', 30);
            expect(() => ski.book('', 5)).to.throw(Error, 'Invalid input');
            expect(() => ski.book('Orlovetz', -1)).to.throw(Error, 'Invalid input');
        });

        it('should throw error with no such name in hotel', function() {
            ski.build('Orlovetz', 30);
            expect(() => ski.book('Mac', 5)).to.throw(Error, 'There is no such hotel');
        });

        it('should throw error with no free beds', function() {
            ski.build('Orlovetz', 10);
            expect(() => ski.book('Orlovetz', 11)).to.throw(Error, 'There is no free space');
        });

        it('should correctly result - Successfully booked', function() {
            ski.build('Orlovetz', 10);
            expect(ski.book('Orlovetz', 10)).to.equal('Successfully booked');
        });
    });

    describe('tests function leave', function() {
        it('should throw error with invalid input', function() {
            ski.build('Orlovetz', 30);
            ski.build('Mac', 54);
            expect(ski.hotels.length).to.be.equal(2);
            ski.book('Orlovetz', 10);
            expect(() => ski.leave('Balkan', 5, 10)).to.throw(Error, 'There is no such hotel');
        });

        it('should return correcly result - people left hotel', function() {
            ski.build('Orlovetz', 30);
            ski.build('Mac', 54);
            expect(ski.hotels.length).to.be.equal(2);
            ski.book('Orlovetz', 10);
            expect(ski.leave('Orlovetz', 10, 10)).to.equal('10 people left Orlovetz hotel');
        });
    });

    describe('tests function averageGrade', function() {
        it('should return message with any votes', function() {
            expect(ski.averageGrade()).to.equal('No votes yet');
        });

        it('should return average grade in all hotels', function() {
            ski.build('Mac', 25);
            ski.build('Orlovetz', 32);
            ski.leave('Mac', 5, 7);
            ski.leave('Orlovetz', 7, 7);
            expect(ski.averageGrade()).to.be.equal('Average grade: 7.00');
            expect(ski.voters).to.equal(12);
        });
    });
});