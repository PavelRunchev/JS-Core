class Vacation {
	constructor(organizer, destination, budget){
		this.organizer = organizer;
		this.destination = destination;
		this.budget = budget;
		this.kids = {};
	}

	registerChild(name,grade,budget) {
		if(budget < this.budget) {
			return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
		}

		if(!this.kids[grade])
			this.kids[grade] = [];

		const currentChild = this.kids[grade].find(c => c.split('-')[0] === name);
		if(currentChild) {
			return `${name} is already in the list for this ${this.destination} vacation.`;
		}

		this.kids[grade].push(`${name}-${budget}`);
		return this.kids[grade];
	}

	removeChild(name, grade) {
		if(this.kids[grade] === undefined) {
			return `We couldn't find ${name} in ${grade} grade.`;
		}

		const childIndex = this.kids[grade].findIndex(c => c.split('-')[0] === name);
		if(childIndex === -1) {
			return `We couldn't find ${name} in ${grade} grade.`;
		}

		this.kids[grade].splice(childIndex, 1);
		return this.kids[grade];
	}

	//test 8
	get numberOfChildren() {
		let childrenCount = 0;
		for (let key in this.kids) {
			childrenCount += this.kids[key].length;
		}
		return childrenCount;
	}

	toString() {
		let sortedKids = Object.keys(this.kids).sort((a,b) => a - b);
		//test 9
		if(sortedKids.length === 0) {
			return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
		}
		let output = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
		sortedKids.forEach(grade => {
			if(this.kids[grade].length > 0) {
				output += `Grade: ${grade}\n`;
				let index = 1;
				for (let kid of this.kids[grade]) {
					output += `${index++}. ${kid}\n`;
				}
			}
		});

		return output;
	}
}

// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
vacation.registerChild('Gosho', 5, 2000);
vacation.registerChild('Lilly', 6, 2100);

console.log(vacation.removeChild('Gosho', 9));
console.log(vacation.removeChild('Gosho22', 5));

vacation.registerChild('Lilly', 5, 2000);
console.log(vacation.removeChild('Lilly', 6));
console.log(vacation.registerChild('Tanya', 5, 6000));
//console.log(vacation.numberOfChildren);


// let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

// vacation.registerChild('Gosho', 11, 3000);
// vacation.registerChild('Pesho', 10, 4000);
// vacation.registerChild('Tanya', 11, 5000);
// vacation.registerChild('Mitko', 10, 5500);
// vacation.registerChild('Lilly', 8, 2500);
console.log(vacation.toString());
