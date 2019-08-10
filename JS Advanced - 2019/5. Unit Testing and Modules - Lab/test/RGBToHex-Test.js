const expect = require('chai').expect;
const rgbToHexColor = require('../8. RGB to Hex.js');

describe('Test checking rgb to Hex', function() {
    it('Should return undefined wheter invalid red color', function() {
        let result = rgbToHexColor(1.5, 0, 0);
        expect(result).to.be.undefined;
    });

    it('Should return undefined, negative red color range', function() {
        let result = rgbToHexColor(-1, 0, 0);
        expect(result).to.be.undefined;
    });

    it('Should return undefined, bigger red color range', function() {
        let result = rgbToHexColor(256, 0, 0);
        expect(result).to.be.undefined;
    });

    it('Should return undefined wheter invalid green color', function() {
        let result = rgbToHexColor(0, 1.5, 0);
        expect(result).to.be.undefined;
    });

    it('Should return undefined, negative green color range', function() {
        let result = rgbToHexColor(0, -1, 0);
        expect(result).to.be.undefined;
    });

    it('Should return undefined, bigger green color range', function() {
        let result = rgbToHexColor(0, 256, 0);
        expect(result).to.be.undefined;
    });

    it('Should return undefined wheter invalid blue color', function() {
        let result = rgbToHexColor(0, 0, 1.5);
        expect(result).to.be.undefined;
    });

    it('Should return undefined, negative blue color range', function() {
        let result = rgbToHexColor(0, 0, -1);
        expect(result).to.be.undefined;
    });

    it('Should return undefined, bigger blue color range', function() {
        let result = rgbToHexColor(0, 0, 256);
        expect(result).to.be.undefined;
    });

    it('Should return other color', function() {
        let result = rgbToHexColor(255, 158, 170);
        expect(result).to.be.equal('#FF9EAA', 'The function return white color correctly!');
    });

    it('Should return white color', function() {
        let result = rgbToHexColor(255, 255, 255);
        expect(result).to.be.equal('#FFFFFF', 'The function return white color correctly!');
    });

    it('Should return black color', function() {
        let result = rgbToHexColor(0, 0, 0);
        expect(result).to.be.equal('#000000', 'The function return black color correctly!');
    });
});