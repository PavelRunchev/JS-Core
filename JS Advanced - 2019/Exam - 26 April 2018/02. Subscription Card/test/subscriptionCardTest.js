const expect = require('chai').expect;
const SubscriptionCard = require('../SubscriptionCard');

describe('we are testing SubscriptionCard class', function() {
	let sc;
	this.beforeEach(function() {
		sc = new SubscriptionCard('Pesho', 'Petrov', '0000DE0');
	});

	describe('we are testing initial parameters', function() {
		//test 4,5
		it('should return initial data for card', function() {
			expect(sc.firstName).to.deep.equal('Pesho');
			expect(sc.lastName).to.deep.equal('Petrov');
			expect(sc.SSN).to.deep.equal('0000DE0');
			expect(sc._subscriptions).to.deep.equal([]);
			expect(sc._subscriptions.length).to.deep.equal(0);
			expect(sc._blocked).to.deep.equal(false);
		});
		// test 1, 2, 3
		it('should return no modify properties', function() {
			sc.firstName = 'Gosho';
			sc.lastName = 'Ivanov';
			sc.SSN = 'sldkfslkldfj';
			expect(sc.firstName).to.deep.equal('Pesho');
			expect(sc.lastName).to.deep.equal('Petrov');
			expect(sc.SSN).to.deep.equal('0000DE0');
			expect(sc.isBlocked).to.equal(false);
			sc.blocked = true;
			expect(sc.isBlocked).to.equal(false);
		});

		//test 7
		it('test block or unblock card', function() {
			sc.block();
			expect(sc.isBlocked).to.equal(true);
			sc.unblock();
			expect(sc.isBlocked).to.equal(false);
		})

		//test 8, 9
		it('added subscription to subscriptions array', function() {
			sc.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
			sc.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
			expect(sc._subscriptions.length).to.deep.equal(2);
			expect(sc._subscriptions[0].line).to.deep.equal('120');
			expect(sc._subscriptions[0].startDate).to.eql(new Date('2018-04-22'));
			expect(sc._subscriptions[0].endDate).to.deep.eql(new Date('2018-05-21'));
			expect(sc.isValid('120', new Date('2018-04-22'))).to.equal(true);
			expect(sc.isValid('120', new Date('2018-05-21'))).to.equal(true);
			expect(sc.isValid('120', new Date('2018-05-22'))).to.equal(false);
		});

		//test 7
		it('return block card is true', function() {
			sc.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
			sc.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
			sc.block();
			expect(sc.isValid('*', new Date('2018-05-25'))).to.equal(false);
		});
	});
});