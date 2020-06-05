const expect = require('chai').expect;
const { Repository } = require("../solution.js");

describe("Tests class Repository", function () {
    let r;

    this.beforeEach(function() {
        r = new Repository({ name: "string", age: "number", birthday: "object" });
    });
    describe("tests initial parameters", function () {
        it("return correctly result that instance with one parameter", function () {
            expect(r.props).to.deep.equal({ name: "string", age: "number", birthday: "object" });
            expect(r.data).deep.equal(new Map());
            expect(Object.getPrototypeOf(r).hasOwnProperty('count')).to.equal(true);
            expect(Object.getPrototypeOf(r).hasOwnProperty('add')).to.equal(true);
            expect(Object.getPrototypeOf(r).hasOwnProperty('getId')).to.equal(true);
            expect(Object.getPrototypeOf(r).hasOwnProperty('update')).to.equal(true);
            expect(Object.getPrototypeOf(r).hasOwnProperty('del')).to.equal(true);
        });

        it('should return count added entities', function() {
            expect(r.count).to.equal(0);
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(r.count).to.equal(2);
            expect(r.nextId()).to.deep.equal(2);
        });
    });

    describe('tests add function', function() {
        it('should return correctly second added id', function() {
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)})).to.equal(1);
            expect(r.nextId()).to.deep.equal(2);
        });

        it('should throw error why is missing property name', function() {
            expect(() => r.add({ Name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)}))
                .to.throw(Error, 'Property name is missing from the entity!');
            expect(r.nextId()).to.deep.equal(0);
        });

        it('should throw error why is missing property age', function() {
            expect(() => r.add({ name: "Gosho", Age: 32, birthday: new Date(2002, 3, 14)}))
                .to.throw(Error, 'Property age is missing from the entity!');
        });

        it('should throw error why is missing property birthday', function() {
            expect(() => r.add({ name: "Gosho", age: 32, birthdayyy: new Date(2002, 3, 14)}))
                .to.throw(Error, 'Property birthday is missing from the entity!');
        });

        it('should throw error why is incorect type property birthday', function() {
            expect(() => r.add({ name: "Gosho", age: 32, birthday: 25}))
                .to.throw(TypeError, 'Property birthday is not of correct type!');
        });

        it('should throw error why is incorect type property age', function() {
            expect(() => r.add({ name: "Gosho", age: true, birthday: new Date(2002, 3, 14)}))
                .to.throw(TypeError, 'Property age is not of correct type!');
        });

        it('should throw error why is incorect type property name', function() {
            expect(() => r.add({ name: false, age: 25, birthday: new Date(2002, 3, 14)}))
                .to.throw(TypeError, 'Property name is not of correct type!');
        });
    });

    describe('tests getId function', function() {
        //test 4
        it('should throw invalid get id', function() {
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(() => r.getId(5)).to.throw(Error, 'Entity with id: 5 does not exist!');
        });
    });

    describe('tests update function', function() {
        it('should update correctly old id and return new value', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            r.update(1, { name: "Ani", age: 29, birthday: new Date(2001, 3, 14)});
            expect(r.getId(1)).to.deep.equal({ name: "Ani", age: 29, birthday: new Date(2001, 3, 14)});
        });

        it('should throw error that invalid id', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(() => r.update(-1, {name: "Ani", age: 29, birthday: new Date(2001, 3, 14)}))
                .to.throw(Error, 'Entity with id: -1 does not exist!');
        });

        it('should throw error that invalid id', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(() => r.update(false, {name: "Ani", age: 29, birthday: new Date(2001, 3, 14)}))
                .to.throw(Error, 'Entity with id: false does not exist!');
        });

        it('should throw error that invalid new data', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(() => r.update(1, false))
                .to.throw(Error, 'Property name is missing from the entity!');
        });

        it('should throw error that invalid new data', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(() => r.update(1, {Name: "Ani", age: 29, birthday: new Date(2001, 3, 14)}))
                .to.throw(Error, 'Property name is missing from the entity!');
        });

        it('should throw error that invalid new data incorect type', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(() => r.update(1, {name: false, age: 29, birthday: new Date(2001, 3, 14)}))
                .to.throw(Error, 'Property name is not of correct type!');
        });

        it('should throw error that invalid new data age property', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(() => r.update(1, {name: "Ani", Age: 29, birthday: new Date(2001, 3, 14)}))
                .to.throw(Error, 'Property age is missing from the entity!');
        });

        it('should throw error that invalid new data incorect type age', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(() => r.update(1, {name: 'Ani', age: true, birthday: new Date(2001, 3, 14)}))
                .to.throw(Error, 'Property age is not of correct type!');
        });

        it('should throw error that invalid new data birthday property', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(() => r.update(1, {name: "Ani", age: 29, Birthday: new Date(2001, 3, 14)}))
                .to.throw(Error, 'Property birthday is missing from the entity!');
        });

        it('should throw error that invalid new data incorect type birthday', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(() => r.update(1, {name: 'Ani', age: 29, birthday: false}))
                .to.throw(Error, 'Property birthday is not of correct type!');
        });
    });

    describe('tests del function', function() {
        it('should remove corrently id from store', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            r.del(1);
            r.del(0);
            expect(r.count).to.equal(0);
        });

        //test 8
        it('should throw error that invalid id', function() {
            expect(() => r.del(1)).to.throw(Error, 'Entity with id: 1 does not exist!');
        })
    });

    //test 6
    describe('tests with new set props', function() {
        it('should remove corrently id from store', function() {
            r.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            r.props = { Name: "string", Age: "number", Birthday: "boolean" };
            r.add({ Name: "Gosho", Age: 32, Birthday: true });
            expect(r.count).to.equal(2);
            expect(r.getId(1)).to.deep.equal({ Name: "Gosho", Age: 32, Birthday: true });
            r.update(1, { Name: "Ani", Age: 28, Birthday: false });
            expect(r.getId(1)).to.deep.equal({ Name: "Ani", Age: 28, Birthday: false });
            expect(r.count).to.equal(2);
        });
    });
});
