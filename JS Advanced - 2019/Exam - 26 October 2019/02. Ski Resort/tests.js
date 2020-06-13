let SkiResort = require('./solution');
const expect = require('chai').expect;

describe('tests class SkiResort', function () {
    let sr;
    this.beforeEach(function() {
        sr = new SkiResort('Some');
    });

    describe('we are test initial parameters', function() {
        // no test
        it('should return correctly default properties', function() {
            expect(sr.name).to.deep.equal('Some');
            expect(sr.voters).to.eqls(0);
            expect(sr.hotels).to.eqls([]);
        });
    });

    describe('we are test getter bestHotel', function() {
        //tests 1,2
        it('should return default message', function() {
            expect(sr.bestHotel).to.eqls('No votes yet');
        });

        //test 4
        it('should return the best grde to hotel', function() {
            sr.build('Sun', 10);
            sr.build('Mac', 15);
            sr.leave('Sun', 5, 10);
            expect(sr.bestHotel).to.eqls('Best hotel is Sun with grade 50. Available beds: 15');
        });
    });

    describe('we are test function build', function() {
        //test 7
        it('should return message for corectly added hetel', function() {
            expect(sr.build('Sun', 10)).to.eqls('Successfully built new hotel - Sun');
        });

        //test 5
        it('should throw error that added with empty beds', function() {
            expect(() => sr.build('Sun', 0)).to.throw(Error, 'Invalid input');
        });
    });

    describe('we are test function book', function() {
        //test 10
        it('should return successfully booked', function() {
            sr.build('Sun', 10);
            expect(sr.book('Sun', 5)).to.eqls('Successfully booked');
            expect(sr.hotels[0].beds).to.eqls(5);
        });

        //test 8
        it('should throw error that no such hotel', function() {
            sr.build('Sun', 10);
            expect(() => sr.book('Sunn', 5)).to.throw(Error, 'There is no such hotel');
        });

        //test 9
        it('should throw error that no free space', function() {
            sr.build('Sun', 10);
            sr.book('Sun', 6);
            expect(() => sr.book('Sun', 5)).to.throw(Error, 'There is no free space');
        });
    });

    describe('we are test function leave', function() {
        //test 12
        it('should throw error that no such hotel', function() {
            expect(() => sr.leave('Sun', 5, 10)).to.throw(Error, 'There is no such hotel');
        });

        //test 14
        it('should return leave people from hotel', function() {
            sr.build('Sun', 10);
            sr.book('Sun', 5);
            expect(sr.leave('Sun', 5, 5)).to.equal('5 people left Sun hotel');
        });
    });

    describe('we are test function averageGrade', function() {
        //test 15
        it('should return no votes', function() {
            sr.build('Sun', 10);
            expect(sr.averageGrade()).to.equal('No votes yet');
        });

        //test 16
        it('should return average grade', function() {
            sr.build('Sun', 10);
            sr.build('Mac', 10);
            sr.book('Sun', 5);
            sr.book('Mac', 4);
            sr.leave('Sun', 5, 5);
            sr.leave('Mac', 4, 4);
            expect(sr.averageGrade()).to.equal('Average grade: 4.56');
        });
    });
});
