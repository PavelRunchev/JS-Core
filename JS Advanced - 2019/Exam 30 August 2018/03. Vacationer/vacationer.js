class Vacationer {
	constructor(fullName, creditCard) {
		this.fullName = fullName;
		this.idNumber = this.idNumber;
		this.creditCard = creditCard;
		this.wishList = [];
	}

	get fullName() {
		return this._fullName;
	}

	set fullName(value) {
		if(value.length !== 3) throw new Error('Name must include first name, middle name and last name');

		for (let name of value) {
			let validName = checkForValidName(name);
			if(validName === false) throw new Error('Invalid full name');
			if(!RegExp('^[A-Za-z]+$', 'g').test(name)) throw new Error('Invalid full name');
		}

		let obj = { firstName: value[0], middleName: value[1], lastName: value[2] };
		this._fullName = obj;

		function checkForValidName(name) {
			let check = true;
			let firstLetter = name.slice(0, 1);
			let otherLetters = [...name.slice(1)];
			if(firstLetter ==! firstLetter.toUpperCase()) check = false;
			// or find method
			if(otherLetters.some(l => l === l.toUpperCase())) check = false;
	
			return check;
		}
	}

	get idNumber() {
		return this._idNumber;
	}

	set idNumber(value) {
		this._idNumber = this.generateIDNumber();
	}

	get creditCard() {
		return this._creditCard;
	}

	set creditCard(value) {
		if(value === undefined) {
			this._creditCard = { cardNumber: 1111, expirationDate: '', securityNumber: 111 };
		} else {
			if(value.length !==3 ) { 
				throw new Error('Missing credit card information');
			}
	
			if(typeof(value[0]) !== 'number' || typeof(value[2]) !== 'number') {
				throw new Error('Invalid credit card details');
			}

			this._creditCard = { 
				cardNumber: value[0], 
				expirationDate: value[1], 
				securityNumber: value[2] 
			};
		}
	}

	generateIDNumber() {
		let firstNameFirstLetter = this._fullName['firstName'].slice(0, 1).charCodeAt();
		let middleNameLength = this._fullName['middleName'].length;
		let lastNameEndLetter = this._fullName['lastName'].slice(-1);
		let id = 231 * firstNameFirstLetter + 139 * middleNameLength;
		id = ['a', 'e', 'o', 'i', 'u'].includes(lastNameEndLetter) ? id + '8' : id + '7';

		return id;
	}

	addCreditCardInfo(input) {
		if(input.length !==3 ) { 
			throw new Error('Missing credit card information');
		}

		if(typeof(input[0]) !== 'number' || typeof(input[2]) !== 'number') {
			throw new Error('Invalid credit card details');
		}

		this._creditCard['cardNumber'] = input[0];
		this._creditCard['expirationDate'] = input[1];
		this._creditCard['securityNumber'] = input[2];
	}

	addDestinationToWishList(destination) {
		if(this.wishList.includes(destination)) {
			throw new Error('Destination already exists in wishlist');
		}

		this.wishList.push(destination);
		this.wishList.sort((a, b) => a.length - b.length);
	}

	getVacationerInfo() {
		let output = `Name: ${this._fullName.firstName} ${this._fullName.middleName} ${this._fullName.lastName}\n`;
		output += `ID Number: ${this.idNumber}\n`;
		output += `Wishlist:\n`;
		output += this.wishList.length > 0 ? this.wishList.join(', ') + '\n' : 'empty\n';
		output += 'Credit Card:\n';
		output += `Card Number: ${this._creditCard.cardNumber}\n`;
		output += `Expiration Date: ${this._creditCard.expirationDate}\n`;
		output += `Security Number: ${this._creditCard.securityNumber}`;
		return output;
	}
}

let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],[123456789, "10/01/2018", 777]);

vacationer1.addDestinationToWishList('Italy');
vacationer1.addDestinationToWishList('Portugal');
vacationer1.addDestinationToWishList('Denmark');
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());