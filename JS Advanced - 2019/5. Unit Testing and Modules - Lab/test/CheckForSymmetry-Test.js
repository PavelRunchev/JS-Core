const expect = require('chai').expect;
const isSymmetric = require('../5. Check For Symmetry.js');

describe("Checking the array whether is symmetric!", function() {
    it('Should return false, whether object input!', function() {
        let result = isSymmetric({});
        expect(result).to.be.equal(false, 'The function is not correct input!');
    });

    it('Should return false, whether not symmetric array!', function() {
        let result = isSymmetric([1, 2, 3, 4]);
        expect(result).to.be.equal(false, 'The function is not symetric!');
    });

    it('Should return true, whether one element array!', function() {
        let result = isSymmetric([5]);
        expect(result).to.be.equal(true, 'The function is a symetric!');
    });

    it('Should return true, whether string array!', function() {
        let result = isSymmetric(['S', 'T', 'S']);
        expect(result).to.be.equal(true, 'The function is a symetric!');
    });

    it('Should return true in array!', function() {
        let result = isSymmetric([{}, 'T', {}]);
        expect(result).to.be.equal(true, "The function a symetric!");
    });
});