let Parser = require('../solution.js');
let expect = require('chai').expect;

describe("MyTests", function() {
    let p;
    beforeEach(function() {
        p = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
    });

    describe('test with instantion', function(){
        //test 1,2,14
        it('inithial log and data array', function() {
            expect(p._log.length).to.deep.equal(0);
            expect(p._data.length).to.deep.equal(3);
        });
    });

    describe('test with getter data', function(){
        it('should return data array', function() {
            expect(p._data).to.deep.equal([ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]);
            p._addToLog('Get Data');
            expect(p._log.length).to.equal(1);
            expect(p._log[0]).to.equal('0: Get Data');
        });

        it('should return data array correctly', function() {
            expect(p.addEntries('Steven:tech-support')).to.equal('Entries added!');
            p.removeEntry('Nancy');
            p.removeEntry('Steven');
            expect(p.data).to.deep.equal([ {"John":"developer"},{"Kate": "HR"} ]);
            expect(p._log.length).to.equal(4);
            expect(p._log[3]).to.equal('3: getData');
        });
    });

    describe('test with addEntries functionality', function() {
        it('should return added entries correctly', function() {
            expect(p.addEntries("Steven:tech-support")).to.equal('Entries added!');
        });

        it('should return added entries correctly and save log', function() {
            p.addEntries("Steven:tech-support");
            expect(p._log.length).to.equal(1);
        });
    });

    describe('test with removeEntries functionality', function() {
        it('should remove by key correctly', function() {
            expect(p.removeEntry("Kate")).to.equal('Removed correctly!');
            expect(p._data.length).to.deep.equal(3);
            expect(p._data[2]["deleted"]).to.deep.equal(true);
        });

        it('should return error for invalid key', function() {
            expect(() => p.removeEntry("RR")).to.Throw(Error,'There is no such entry!');
        });
    });

    //todo print
    describe('test with print functionality', function() {
        it('', function() {
            p.removeEntry('Kate');
            p.removeEntry('Nancy');
            p.addEntries('Steven:tech-support');
            expect(p.print()).to.equal(`id|name|position\n0|John|developer\n1|Steven|tech-support`);
            expect(p._log.length).to.equal(4);
        });
    });

    //todo addToLog
    describe('test with addToLog functionality', function() {
        it('should added log correctly', function() {
           expect(p._addToLog('Hello World')).to.equal('Added to log');
           expect(p._addToLog('Hello World1')).to.equal('Added to log');
           expect(p._log.length).to.equal(2);
           expect(p._log[1]).to.equal('1: Hello World1');
        });
    });
});