const expect = require('chai').expect;
const PaymentPackage = require('../Payment Package.js');

describe('Test functionality to class Payment Package', function() {

    describe('testing Name property', function() {
        it('should return Error at not name', function() {
            expect(() => new PaymentPackage()).to.throw(Error, 'Name must be a non-empty string');
        });
        it('should return Error at empty name', function() {
            expect(() => new PaymentPackage('', 5)).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should return Error at object name' , function() {
            expect(() => new PaymentPackage({}, 5)).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should return Error at number name' , function() {
            expect(() => new PaymentPackage(-5, 5)).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should return Error at set empty name' , function() {
            let package = new PaymentPackage('Gosho', 250);
            expect(() => package.name = '').to.throw(Error, 'Name must be a non-empty string');
        });

        it('should return Error at set negative number in name' , function() {
            let package = new PaymentPackage('Gosho', 250);
            expect(() => package.name = -1).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should return Error at set array in name' , function() {
            let package = new PaymentPackage('Gosho', 250);
            expect(() => package.name = []).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should return Error at set object in name' , function() {
            let package = new PaymentPackage('Gosho', 250);
            expect(() => package.name = {}).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should return name', function() {
            let package = new PaymentPackage('Ivan', 200);
            expect(package.name).to.be.equal('Ivan', "Correct result!");
        });

        it('should return empty name', function() {
            let package = new PaymentPackage(' ', 200);
            expect(package.name).to.be.equal(' ', "Correct result!");
        });

        it('should return set name', function() {
            let package = new PaymentPackage('Ivan', 200);
            package.name = "Sisa"
            expect(package.name).to.be.equal('Sisa', "Correct result!");
        });
    });

    describe('testing Value property', function() {
        it('should return Error at empty values', function() {
            expect(() => new PaymentPackage()).to.throw(Error, 'Name must be a non-empty string');
        });
        it('should return Error at empty value', function() {
            expect(() => new PaymentPackage('Peter')).to.throw(Error, 'Value must be a non-negative number');
        });
        it('should return Error at negative value', function() {
            expect(() => new PaymentPackage('Peter', -5)).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should return Error at object value' , function() {
            expect(() => new PaymentPackage('Peter', {})).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should return Error at array value' , function() {
            expect(() => new PaymentPackage('Peter', [])).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should return Error at string value' , function() {
            expect(() => new PaymentPackage('Peter', 'W')).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should return Error at set negative value' , function() {
            let package = new PaymentPackage('Sasho', 0);
            expect(() => package.value = -1).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should return Error at set string value' , function() {
            let package = new PaymentPackage('Sasho', 0);
            expect(() => package.value = 'W').to.throw(Error, 'Value must be a non-negative number');
        });

        it('should return Error at set object value' , function() {
            let package = new PaymentPackage('Sasho', 0);
            expect(() => package.value = {}).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should return Error at set array value' , function() {
            let package = new PaymentPackage('Sasho', 0);
            expect(() => package.value = []).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should return value', function() {
            let package = new PaymentPackage('Ivan', 0);
            expect(package.value).to.be.equal(0, "Correct result!");
        });

        it('should return floating points value', function() {
            let package = new PaymentPackage('Ivan', 33.33);
            expect(package.value).to.be.equal(33.33, "Correct result!");
        });

        it('should return set value', function() {
            let package = new PaymentPackage('Ivan', 2);
            package.value = 0.5
            expect(package.value).to.be.equal(0.5, "Correct result!");
        });

        it('should return set zero value', function() {
            let package = new PaymentPackage('Ivan', 2);
            package.value = 0
            expect(package.value).to.be.equal(0, "Correct result!");
        });
    });

    describe('testing VAT property', function() {
        it('should return Error at string VAT', function() {
            let pp = new PaymentPackage('Peter', 200);
            expect(() => pp.VAT = '50').to.throw(Error, 'VAT must be a non-negative number');
        });

        it('should return Error at object VAT' , function() {
            let pp = new PaymentPackage('Peter', 200);
            expect(() => pp.VAT = {}).to.throw(Error, 'VAT must be a non-negative number');
        });

        it('should return Error at array VAT' , function() {
            let pp = new PaymentPackage('Peter', 200);
            expect(() => pp.VAT = []).to.throw(Error, 'VAT must be a non-negative number');
        });

        it('should return Error at negative VAT' , function() {
            let pp = new PaymentPackage('Peter', 200);
            expect(() => pp.VAT = -1).to.throw(Error, 'VAT must be a non-negative number');
        });

        it('should return VAT', function() {
            let pp = new PaymentPackage('Ivan', 200);
            pp.VAT = 99.6;
            expect(pp.VAT).to.be.equal(99.6, "Correct result!");
        });

        it('should return default VAT', function() {
            let pp = new PaymentPackage('Ivan', 200);
            expect(pp.VAT).to.be.equal(20, "Correct result!");
        });

        it('should return set zero VAT', function() {
            let pp = new PaymentPackage('Ivan', 200);
            pp.VAT = 0;
            expect(pp.VAT).to.be.equal(0, "Correct result!");
        });
    });

    describe('testing Active property', function() {
        it('should return Error at empty string active', function() {
            pp = new PaymentPackage('Peter', 55);
            expect(() => pp.active = 'hhh').to.throw(Error, 'Active status must be a boolean');
        });

        it('should return Error at number active', function() {
            pp = new PaymentPackage('Peter', 55);
            expect(() => pp.active = -2).to.throw(Error, 'Active status must be a boolean');
        });

        it('should return Error at array active', function() {
            pp = new PaymentPackage('Peter', 55);
            expect(() => pp.active = []).to.throw(Error, 'Active status must be a boolean');
        });

        it('should return Error at object active', function() {
            pp = new PaymentPackage('Peter', 55);
            expect(() => pp.active = {}).to.throw(Error, 'Active status must be a boolean');
        });

        it('should return false active', function() {
            pp = new PaymentPackage('Peter', 55);
            expect(pp.active = false).to.equal(false, "Correct result");
        });
        
        it('should return true active', function() {
            pp = new PaymentPackage('Peter', 55);
            pp.active = true;
            expect(pp.active).to.equal(true, "Correct result");
        });

        it('should return true by default active', function() {
            pp = new PaymentPackage('Peter', 55);
            expect(pp.active = true).to.equal(true, "Correct result");
        });
    });

    describe('testing ToString property', function() {
        it('should return package with true active', function() {
            pp = new PaymentPackage('Peter', 55.5);
            pp.VAT = 44;
            expect(pp.toString()).to.equal('Package: Peter\n- Value (excl. VAT): 55.5\n- Value (VAT 44%): 79.92', "Correct result");
        });

        it('should return package with false active', function() {
            pp = new PaymentPackage('Peter', 55);
            pp.VAT = 100;
            pp.active = false;
            expect(pp.toString()).to.equal('Package: Peter (inactive)\n- Value (excl. VAT): 55\n- Value (VAT 100%): 110', "Correct result");
        });

        it('should return package with false active and default VAT', function() {
            pp = new PaymentPackage('Peter', 55);
            pp.active = false;
            expect(pp.toString()).to.equal('Package: Peter (inactive)\n- Value (excl. VAT): 55\n- Value (VAT 20%): 66', "Correct result");
        });

        it('should return package with true active and default VAT', function() {
            pp = new PaymentPackage('Peter', 55.5);
            expect(pp.toString()).to.equal('Package: Peter\n- Value (excl. VAT): 55.5\n- Value (VAT 20%): 66.6', "Correct result");
        });
    });
});