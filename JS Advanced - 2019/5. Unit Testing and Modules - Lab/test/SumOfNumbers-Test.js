const expect = require('chai').expect;
const sum = require('../4. Sum Of Numbers');

describe('Calculate elements in array', function() {
    it("should return sum to all elements in array!", function() {
        let result = sum([10, 20, 30, 40]);
        expect(result).to.be.equal(100, 'The funtion is return corect result!');
    });

    it("should return zero at empty array!", function() {
        let result = sum([]);
        expect(result).to.be.equal(0, 'The funtion is return zero result!');
    });

    it("should return NaN at elements not number array!", function() {
        let result = sum(['s']);
        expect(result).to.be.NaN;
    });
});