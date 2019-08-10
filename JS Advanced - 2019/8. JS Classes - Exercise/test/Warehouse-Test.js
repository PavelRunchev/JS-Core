let expect = require('chai').expect;
let Vacation = require('../Warehouse.js');

describe('testing warehouse class!', function() {
    describe('should return initial with 200 capacity', function() {
        let vac = new Vacation(200);
        expect(vac.capacity).to.equal(200, 'Correct result');
    });

    describe('should return initial with 1 capacity', function() {
        let vac = new Vacation(1);
        expect(vac.capacity).to.equal(1, 'Correct result');
    });

    describe('should return throw error with 0 capacity', function() {
        expect(() => new Vacation(0)).to.throw('Invalid given warehouse space', 'Correct result');
    });

    describe('should return throw error with string capacity', function() {
        expect(() => new Vacation('Pesho')).to.throw('Invalid given warehouse space', 'Correct result');
    });

    describe('should return throw error with string capacity', function() {
        expect(() => new Vacation({})).to.throw('Invalid given warehouse space', 'Correct result');
    });
});
