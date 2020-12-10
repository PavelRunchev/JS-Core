let { Repository } = require("../solution.js");
const expect = require('chai').expect;

describe("Tests class Repository", function () {
    let repo;

    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    this.beforeEach(function() {
        repo = new Repository(properties);
    });

    describe("tests instantiation with one parameter", function () {
        it("should return corectly result", function () {
            expect(repo.props).to.deep.equal({ name: "string", age: "number", birthday: "object"});
            expect(repo.data).to.deep.equal(new Map());
            expect(repo.nextId()).to.deep.equal(0);
            expect(Object.getPrototypeOf(repo).hasOwnProperty('count')).to.equal(true);
            expect(Object.getPrototypeOf(repo).hasOwnProperty('add')).to.equal(true);
            expect(Object.getPrototypeOf(repo).hasOwnProperty('getId')).to.equal(true);
            expect(Object.getPrototypeOf(repo).hasOwnProperty('update')).to.equal(true);
            expect(Object.getPrototypeOf(repo).hasOwnProperty('del')).to.equal(true);
        });
    });

    describe('tests add functionality', function() {
        it('should add corectly and return id', function() {
            expect(repo.add({ name: "Pesho", age: 22, birthday: new Date(1998, 3, 7)})).to.deep.equal(0);
            expect(repo.add({ name: "Gosho", age: 25, birthday: new Date(1999, 2, 14)})).to.deep.equal(1);
            expect(repo.count).to.deep.equal(2);
        });

        it('should throw error that missing propperty name', function() {
            let entity = {namee: "Pesho",age: 22,birthday: new Date(1998, 0, 7)};
            expect(() => repo.add(entity)).to.throw(Error, 'Property name is missing from the entity!');
        });

        it('should throw error that missing propperty age', function() {
            let entity = {name: "Pesho",agee: 22,birthday: new Date(1998, 0, 7)};
            expect(() => repo.add(entity)).to.throw(Error, 'Property age is missing from the entity!');
        });

        it('should throw error that missing propperty birthday', function() {
            let entity = {name: "Pesho",age: 22,birthdayy: new Date(1998, 0, 7)};
            expect(() => repo.add(entity)).to.throw(Error, 'Property birthday is missing from the entity!');
        });

        it('should throw error that incorrect type name', function() {
            let entity = {name: 22,age: 22,birthday: new Date(1998, 0, 7)};
            expect(() => repo.add(entity)).to.throw(TypeError, 'Property name is not of correct type!');
        });

        it('should throw error that incorrect type age', function() {
            let entity = {name: 'Pesho',age: true,birthday: new Date(1998, 0, 7)};
            expect(() => repo.add(entity)).to.throw(TypeError, 'Property age is not of correct type!');
        });

        it('should throw error that incorrect type birthday', function() {
            let entity = {name: 'Pesho',age: 22,birthday: true};
            expect(() => repo.add(entity)).to.throw(TypeError, 'Property birthday is not of correct type!');
        });
    });

    describe('tests getId functionality', function() {
        it('should return entity that correctly id!', function() {
            let entity = {name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)};
            repo.add(entity);
            expect(repo.getId(0)).to.deep.equal({name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)});
        });
        //test 4
        it('should throw error that invalid id', function() {
            let entity = {name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)};
            repo.add(entity);
            expect(() => repo.getId(1)).to.throw(Error, 'Entity with id: 1 does not exist!');
        });
    });

    describe('tests update functionality', function() {
        it('should throw error that invalid id for update', function() {
            repo.add({name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)});
            let entity = {name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)};
            expect(() => repo.update(1,  entity)).to.throw(Error, 'Entity with id: 1 does not exist!');
        });

        it('should throw error that invalid id', function() {
            repo.add({ name: "Pesho", age: 22, birthday: new Date(1998, 1, 7)});
            repo.add({ name: "Gosho", age: 32, birthday: new Date(2002, 3, 14)});
            expect(() => repo.update(false, {name: "Ani", age: 29, birthday: new Date(2001, 3, 14)}))
                .to.throw(Error, 'Entity with id: false does not exist!');
        });

        it('should update entity with current id', function() {
            repo.add({name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)});
            let entity = {name: "Gosho",age: 25,birthday: new Date(1999, 10, 7)};
            repo.update(0, entity);
            expect(repo.getId(0)).to.deep.equal({name: "Gosho",age: 25,birthday: new Date(1999, 10, 7)});
        });

        it('should throw error that missing type name', function() {
            repo.add({name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)});
            let entity = {namee: "Pesho",age: 22,birthday: new Date(1998, 0, 7)};
            expect(() => repo.update(0, entity)).to.throw(Error, 'Property name is missing from the entity!');
        });

        it('should throw error that missing type age', function() {
            repo.add({name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)});
            let entity = {name: "Pesho",agee: 22,birthday: new Date(1998, 0, 7)};
            expect(() => repo.update(0, entity)).to.throw(Error, 'Property age is missing from the entity!');
        });

        it('should throw error that missing type birthday', function() {
            repo.add({name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)});
            let entity = {name: "Pesho",age: 22,birthdayy: new Date(1998, 0, 7)};
            expect(() => repo.update(0, entity)).to.throw(Error, 'Property birthday is missing from the entity!');
        });

        it('should throw error that invalid type name', function() {
            repo.add({name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)});
            let entity = {name: [],age: 22,birthday: new Date(1998, 0, 7)};
            expect(() => repo.update(0, entity)).to.throw(TypeError, 'Property name is not of correct type!');
        });

        it('should throw error that invalid type age', function() {
            repo.add({name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)});
            let entity = {name: "Gosho",age: [],birthday: new Date(1998, 0, 7)};
            expect(() => repo.update(0, entity)).to.throw(TypeError, 'Property age is not of correct type!');
        });

        it('should throw error that invalid type birthday', function() {
            repo.add({name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)});
            let entity = {name: "Gosho",age: 25,birthday: 22};
            expect(() => repo.update(0, entity)).to.throw(TypeError, 'Property birthday is not of correct type!');
        });
    });

    describe('tests delete functionality', function() {
        //test 8
        it('should throw error that invalid id to delete', function() {
            let entity = {name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)};
            repo.add(entity);
            expect(() => repo.del(1)).to.throw(Error, 'Entity with id: 1 does not exist!');
        });

        //test 6
        it('should delete correctly current entity', function() {
            repo.add({name: "Pesho",age: 22,birthday: new Date(1998, 0, 7)});
            repo.add({name: "Gosho",age: 30,birthday: new Date(1999, 2, 17)});
            repo.del(0);
            repo.del(1);
            //test 6
            expect(repo.count).to.deep.equal(0);
        });
    });
});
