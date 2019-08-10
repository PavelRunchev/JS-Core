const expect = require('chai').expect;
const StringBuilder = require('../String Builder.js');

describe('test class functionality for String', function() {
    let sb;
    beforeEach(function() {
        sb = new StringBuilder();
    });

     //test 10
     it('should return true, whether method append!', function() {
        expect(StringBuilder.prototype.hasOwnProperty('append')).to.equal(true);
    });  

    it("should return TypeError, when prepend input is object!", function () {
        expect(() => sb.prepend({})).to.throw(TypeError, "Argument must be string");
    });
    
    it('should return default initial string', function() {
        let str = new StringBuilder('Bobby');
        expect(str.toString()).to.equal('Bobby');
    });
    //test 5
    it('should return string', function() {
        str = new StringBuilder('H');    
        str.append(' Q');      
        str.insertAt('Go ', 0);      
        expect(str._stringArray.length).to.equal(6, "Correct length!");
        expect(str.toString()).to.be.equal('Go H Q', "Correct result!");
    });
    //test 9
    it("shoud return part from remove a string", function () {
        sb.append("Hello");
        sb.remove(0, 3);
        expect(sb._stringArray.length).to.be.equal(2);
        expect(sb.toString()).to.be.equal("lo");
    });
});