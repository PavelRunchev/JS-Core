const expect = require('chai').expect;
const PizzUni = require('../2. PizzUni/02. PizzUni.js');

describe('Testing PizzUni', function() {
    let pz;
    this.beforeEach(function() {
        pz =  new PizzUni();
    });

    describe('testing makeAnOrder function', function() {
        //test 6
        it('should return Error at not correct order!', function() {
            pz.registerUser('pesho@gmail.bg');
            expect(() => pz.makeAnOrder('pesho@gmail.bg', 'Corleone', 'Fanta')).to.throw('You must order at least 1 Pizza to finish the order.');
        });

        //test 8
        it('should return added order in orderHistory to registeredUser!', function() {
            pz.registerUser('pesho@gmail.bg');
            pz.makeAnOrder('pesho@gmail.bg', 'Italian Style', 'Fanta');
            expect(pz.registeredUsers[0].orderHistory[0]).to.deep.equal({ orderedPizza: 'Italian Style', orderedDrink: 'Fanta'});
        });

        //test 10
        it('should return number orders!', function() {
            pz.registerUser('pesho@gmail.bg');
            expect(pz.makeAnOrder('pesho@gmail.bg', 'Italian Style', 'Fanta')).to.equal(0, 'return 1 order with index array!!!');
        });
    });

    describe('testing completedOrder function', function() {
        //test 14, 15
        it('should return status copleted with email pesho@gmail', function() {
            pz.registerUser('pesho@gmail.bg');
            pz.registerUser('gosho@gmail.bg');
            pz.registerUser('ani@gmail.bg');
            pz.makeAnOrder('pesho@gmail.bg', 'Italian Style', 'Fanta');
            pz.makeAnOrder('gosho@gmail.bg', 'Italian Style', 'Fanta');
            pz.makeAnOrder('ani@gmail.bg', 'Italian Style', 'Fanta');
            expect(pz.completeOrder()).to.deep.equal({orderedPizza: 'Italian Style', orderedDrink: 'Fanta', email: 'pesho@gmail.bg', status: 'completed'});
        });
    });

    describe('testing details about my order', function() {
        //test 9, 12
        it('should return completed status for current ID', function() {
            pz.registerUser('pesho@gmail.bg');
            pz.registerUser('gosho@gmail.bg');
            pz.registerUser('ani@gmail.bg');
            pz.makeAnOrder('pesho@gmail.bg', 'Italian Style', 'Fanta');
            pz.makeAnOrder('gosho@gmail.bg', 'Italian Style', 'Fanta');
            pz.makeAnOrder('ani@gmail.bg', 'Italian Style', 'Fanta');
            pz.completeOrder();
            expect(pz.detailsAboutMyOrder(0)).to.equal('Status of your order: completed');
        });

        //test 11
        it('should return undefined', function() {
            expect(pz.detailsAboutMyOrder(0)).to.equal(undefined);
        });
    });
});