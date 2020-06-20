class  Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if(this.allCustomers.some(c => c.personalId === customer.personalId))
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
            
        this.allCustomers.push({ 
            personalId: customer.personalId,
            firstName: customer.firstName,
            lastName: customer.lastName,
            totalMoney: 0,
            transaction: []
        });
        return customer;
    }

    depositMoney(personalId, amount) {
        let currentCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if(!currentCustomer)
            throw new Error('We have no customer with this ID!');

        currentCustomer['totalMoney'] += amount;
        currentCustomer.transaction.push(`${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);
        return `${currentCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let currentCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if(!currentCustomer)
            throw new Error('We have no customer with this ID!');

        if(currentCustomer.totalMoney < amount)
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);

        currentCustomer.totalMoney -= amount;
        currentCustomer.transaction.push(`${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${amount}$!`);
        return `${currentCustomer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const client = this.allCustomers.find(c => c.personalId === personalId);
        if(!client)
            throw new Error('We have no customer with this ID!');

        const transactions = client.transaction
            .map((c, i) => c = `${i+1}. ` + c)
            .reverse()
            .join('\n');
        return `Bank name: ${this._bankName}\n` +
            `Customer name: ${client.firstName} ${client.lastName}\n` +
            `Customer ID: ${client.personalId}\n` + 
            `Total Money: ${client.totalMoney}$\n` +
            'Transactions:\n' + 
            `${transactions}`;
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