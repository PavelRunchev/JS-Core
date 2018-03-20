let expect = require('chai').expect;
const rgbToHexColor = require("../06.RGB to Hex.js");


describe("rgbToHexColor(red, green, blue)", function(){
    describe("Nominal cases(valid input)", function () {
        it("should return #FF9EAA on (255, 158, 170)", function () {
            let hex = rgbToHexColor(255, 158, 170);
            expect(hex).to.be.equal('#FF9EAA');
        });
        it("should return #0C0D0E for (12, 13, 14)", function () {
            expect(rgbToHexColor(12, 13, 14)).to.be.equal("#0C0D0E");
        });
        it("should return #000000 for (0, 0, 0)", function () {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
        });
        it("should return #FFFFFF for (255, 255, 255)", function () {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
        });
    });
    describe("Undefined cases(invalid input)", function () {
        it("should return undefined on (256, 255, 255)", function () {
            let hex = rgbToHexColor(256, 255, 255);
            expect(hex).to.be.equal(undefined);
        });
        it("should return undefined on (255, 256, 255)", function () {
            let hex = rgbToHexColor(255, 256, 255);
            expect(hex).to.be.equal(undefined);
        });
        it("should return undefined on (255, 255, 256)", function () {
            let hex = rgbToHexColor(255, 255, 256);
            expect(hex).to.be.equal(undefined);
        });
        it("should return undefined on (-1, 0, 0)", function () {
            let hex = rgbToHexColor(-1, 0, 0);
            expect(hex).to.be.equal(undefined);
        });
        it("should return undefined on (0, -1, 0)", function () {
            let hex = rgbToHexColor(0, -1, 0);
            expect(hex).to.be.equal(undefined);
        });
        it("should return undefined on (0, 0, -1)", function () {
            let hex = rgbToHexColor(0, 0, -1);
            expect(hex).to.be.equal(undefined);
        });

    });
});
