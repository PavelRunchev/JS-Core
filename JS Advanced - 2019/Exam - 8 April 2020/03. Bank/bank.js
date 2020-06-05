class Bank {
	constructor(bankName) {
		this._bankName = bankName;
		this.allCustomers = [];
	}

	//No Getter - test 2!!!
	set bankName(value) {
		this._bankName = value;
	}

	newCustomer(customer) {
		const existCustomur = this.allCustomers.find(c => c.personalId === customer.personalId);
		if(existCustomur)
			throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);

		this.allCustomers.push(customer);
		return customer;
	}

	depositMoney(personalId, amount) {
		let existPersonalId = this.allCustomers.find(c => c.personalId === personalId);
		if(!existPersonalId)
			throw new Error('We have no customer with this ID!');

		if(!existPersonalId.hasOwnProperty('totalMoney'))
			existPersonalId['totalMoney'] = 0;

		if(!existPersonalId.hasOwnProperty('transaction'))
			existPersonalId['transaction'] = [];


		existPersonalId['totalMoney'] += amount;
		existPersonalId.transaction
			.push(`${existPersonalId.firstName} ${existPersonalId.lastName} made deposit of ${amount}$!`);
		return `${existPersonalId['totalMoney']}$`;
	}

	withdrawMoney(personalId, amount) {
		let existPersonalId = this.allCustomers.find(c => c.personalId === personalId);
		if(!existPersonalId)
			throw new Error('We have no customer with this ID!');

		if(!existPersonalId.hasOwnProperty('totalMoney'))
			existPersonalId['totalMoney'] = 0;

		if(!existPersonalId.hasOwnProperty('transaction'))
			existPersonalId['transaction'] = [];

		if(existPersonalId['totalMoney'] < amount) 
			throw new Error(`${existPersonalId.firstName} ${existPersonalId.lastName} does not have enough money to withdraw that amount!`);


		existPersonalId['totalMoney'] -= amount;
		existPersonalId.transaction.push(`${existPersonalId.firstName} ${existPersonalId.lastName} withdrew ${amount}$!`);
		return `${existPersonalId['totalMoney']}$`;
	}

	customerInfo(personalId) {
		let existPersonalId = this.allCustomers.find(c => c.personalId === personalId);
		if(!existPersonalId)
			throw new Error('We have no customer with this ID!');

		const transaction = existPersonalId.transaction
			.map((t, i) => t = `${i + 1}. ` + t)
			.reverse()
			.join('\n');

		return `Bank name: ${this._bankName}\n` +
			`Customer name: ${existPersonalId.firstName} ${existPersonalId.lastName}\n` + 
			`Customer ID: ${existPersonalId.personalId}\n` +
			`Total Money: ${existPersonalId.totalMoney}$\n` +
			`Transactions:\n` + 
			`${transaction}`;
	}
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));



