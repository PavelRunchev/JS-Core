class ChristmasDinner {
	constructor(budget) {
		this.budget = budget;
		this.dishes = [];
		this.products = [];
		this.guests = {};
	}

	get budget() {
		return this._budget;
	}

	set budget(value) {
		if(typeof(value) !== "number" || Number(value) < 0)
			throw new  Error('The budget cannot be a negative number');

		this._budget = value;
	}

	shopping(product) {
		if(Number(product[1]) > this.budget)
			throw new Error('Not enough money to buy this product');
		
		this.products.push(product[0]);
		this.budget -= Number(product[1]);
		return `You have successfully bought ${product[0]}!`;
	}

	recipes(recipe) {
		for (let product of recipe.productsList) {
			if(!this.products.includes(product))
				throw new Error('We do not have this product');
		}

		this.dishes.push({ recipeName: recipe.recipeName, productsList: recipe.productsList});
		return `${recipe.recipeName} has been successfully cooked!`;
	}

	inviteGuests(name, dish) {
		const dishExist = this.dishes.find(d => d.recipeName === dish);
		if(!dishExist)
			throw new Error('We do not have this dish');

		if(this.guests.hasOwnProperty(name))
			throw new Error('This guest has already been invited');

		//checking for key!!!
		this.guests[name] = dish;
		return `You have successfully invited ${name}!`;
	}

	showAttendance() {
		let output = '';
		for (let key in this.guests) {
			const products = this.dishes
				.find(r => r.recipeName === this.guests[key])['productsList']
				.join(', ');
			output += `${key} will eat ${this.guests[key]}, which consists of ${products}\n`;
		}

		return output.trim();
	}
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});

dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});


console.log(dinner.inviteGuests('Ivan', 'Oshav'));
console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'));
console.log(dinner.showAttendance());

//You have successfully invited Ivan!
//You have successfully invited Peter!
//Ivan will eat Oshav, which consists of Fruits, Honey
//Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory



