let Parser = require("../solution.js");
let expect = require("chai").expect;

describe("MyTests", () => {
    let p;
    beforeEach(function() {
        p = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
    });

    describe('we are testing constructor', function() {
        it('should return initial values', function() {
            expect(p._data.length).to.deep.equal(3);
            expect(p._log).to.deep.equal([]);
            expect(p._data).to.deep.equal([ { Nancy: 'architect' },{ John: 'developer' },{ Kate: 'HR' }, ]);
        });
    });

    describe('we are testing function addEntries', function() {
        it('should return message that correctly added entry', function() {
            expect(p.addEntries("Steven:tech-support Edd:administrator")).to.equal('Entries added!');
            expect(p._log[0]).to.deep.equal('0: addEntries');
            expect(p._data[3]).to.deep.equal({ "Steven":"tech-support" });
            expect(p._data[4]).to.deep.equal({ "Edd":"administrator" });
        });
    });

    describe('we are testing function removeEntry', function() {
        it('should return message correctly removed entry', function() {
            expect(p.removeEntry('Kate')).to.equal('Removed correctly!');
            expect(p._log[0]).to.deep.equal('0: removeEntry');
            expect(p.data).to.deep.equal([ { Nancy: 'architect' },{ John: 'developer' } ]);
        });

        it('should throw error that invalid key to remove entry', function() {
            expect(() => p.removeEntry('KK')).to.throw(Error, 'There is no such entry!');
        });
    });

    describe('we are testing function addToLog', function() {
        it('should return correctly message from log array', function() {
            p._addToLog('Emplooy');
            p._addToLog('Worker');
            expect(p._addToLog('Vacation')).to.equal('Added to log');
            expect(p._log[2]).to.deep.equal('2: Vacation');
            expect(p._log.length).to.deep.equal(3);
        });
    });

    describe('we are testing function print', function() {
        it('should return print data', function() {
            p.removeEntry('Kate');
            expect(p.print()).to.equal('id|name|position\n0|Nancy|architect\n1|John|developer');
            expect(p._log[1]).to.deep.equal('1: print');
            expect(p._log.length).to.deep.equal(2);
        });
    });
});