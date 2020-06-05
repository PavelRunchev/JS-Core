class PaymentProcessor {
	constructor(options) {
		this.options = options;
		this.payments = [];
	}

	get options() {
		return this._options;
	}

	set options(obj) {
		let defaultOption = { types: ["service", "product", "other"], precision: 2 };
		if(obj !== undefined) {
			if(obj.precision !== undefined && typeof(obj.precision) === 'number')
				defaultOption.precision = obj.precision;
			
			if(obj.types !== undefined && Array.isArray(obj.types)) 
				defaultOption.types = obj.types;
		}

		this._options = defaultOption;
	}

	registerPayment(id, name, type, value) {
		if(typeof(id) !== 'string' || id === '' || typeof(name) !== 'string' || name === '' 
		|| typeof(value) !== 'number' 
		|| !this.options.types.includes(type))
			throw new Error('invalid type');

		const paymentExist = this.payments.find(p => p.id === id);
		if(paymentExist !== undefined) {
			throw new Error('ID is exist');
		}

		this.payments.push({id, name, type, value});
	}

	deletePayment(id) {
		const index = this.payments.findIndex(p => p.id === id);
		if(index === -1)
			throw new Error('ID not found');

		const deletePayment = this.payments.splice(index, 1);
	}

	get(id) {
		const index = this.payments.findIndex(p => p.id === id);
		if(index === -1)
			throw new Error('ID not found');
		
		const currPayment = this.payments[index];
		return `Details about payment ID: ${currPayment.id}\n` +
		`- Name: ${currPayment.name}\n` + 
		`- Type: ${currPayment.type}\n` +
		`- Value: ${currPayment.value.toFixed(this.options.precision)}`;
	}

	setOptions(opt) {
		if(opt !== undefined) {
			//test 9 -> set options types and precision 
			if(opt.types !== undefined && Array.isArray(opt.types))
				this.options.types = opt.types;
			if(opt.precision !== undefined && typeof(opt.precision) === 'number')
				this._options.precision = opt.precision;
		} else { 
			throw new Error('invalid options'); 
		}
	}

	toString() {
		const balance = this.payments
			.reduce((prev, current) => current.value + prev, 0)
			.toFixed(this.options.precision);
		return `Summary:\n` + `- Payments: ${this.payments.length}\n` +
		`- Balance: ${balance}`;
	}
}
//the tests
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
generalPayments.deletePayment('0001');


generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));

generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
console.log(generalPayments.options.types);
console.log(generalPayments.options.precision);

console.log(generalPayments.toString());

