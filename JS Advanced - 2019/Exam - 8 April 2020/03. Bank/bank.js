class Bank {
	constructor(bankName) {
		this._bankName = bankName;
		this.allCustomers = [];
	}

	//check for setter - test 2!!!
	set bankName(value) {
		this._bankName = value;
	}

	newCustomer(customer) {
		if(this.allCustomers.some(c => c.firstName === customer.firstName 
			&& c.lastName === customer.lastName 
			&& c.personalId === customer.personalId))
			throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);

		customer.transactions = [];
		this.allCustomers.push(customer);
		return customer;
	}

	depositMoney(personalId, amount) {
		const customerIndex = this.allCustomers.findIndex(c => c.personalId === personalId);
		if(customerIndex === -1) throw new Error('We have no customer with this ID!');

		let customer = this.allCustomers[customerIndex];
		if(!customer.hasOwnProperty('totalMoney')) customer.totalMoney = 0;

		customer.totalMoney += amount;
		customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
		return `${this.allCustomers[customerIndex].totalMoney}$`;
	}

	withdrawMoney(personalId, amount) {
		const customerIndex = this.allCustomers.findIndex(c => c.personalId === personalId);
		if(customerIndex === -1)
			throw new Error('We have no customer with this ID!');

		let customer = this.allCustomers[customerIndex];
		if(customer.totalMoney < amount)
			throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);

		customer.totalMoney -= amount;
		customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
		return `${customer.totalMoney}$`;
	}

	customerInfo(personalId) {
		const customer = this.allCustomers.find(c => c.personalId === personalId);
		if(customer === undefined) throw new Error('We have no customer with this ID!');

		const transactions = customer.transactions
			.map((t, i) => t = `${i + 1}. ` + t)
			.reverse()
			.join('\n');
		const existTransactions = customer.transactions.length > 0 ? '\nTransactions:\n' + transactions : '';

		return `Bank name: ${this._bankName}\n` +
			`Customer name: ${customer.firstName} ${customer.lastName}\n` +
			`Customer ID: ${customer.personalId}\n` +
			`Total Money: ${customer.totalMoney}$` + existTransactions;
	}
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));
bank.depositMoney(6233267, 250);
bank.depositMoney(6233267, 250);
bank.depositMoney(4151596,555);
bank.withdrawMoney(6233267, 125);
console.log(bank.customerInfo(6233267));
