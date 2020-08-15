function solveClasses() {
	class Pet {
		constructor(owner, name) {
			this.owner = owner;
			this.name = name;
			this.comments = [];
		}

		addComment(comment) {
			if(this.comments.some(c => c === comment))
				throw new Error('This comment is already added!');

			this.comments.push(comment);
			return 'Comment is added.';
		}

		feed() {
			return `${this.name} is fed`;
		}

		toString() {
			const haveComments = this.comments.length === 0 
				? '' : `\nSpecial requirements: ${this.comments.join(', ')}`;
			return `Here is ${this.owner}'s pet ${this.name}.` + haveComments;
		}
	}

	class Cat extends Pet {
		constructor(owner, name, insideHabits, scratching) {
			super(owner, name);
			this.insideHabits = insideHabits;
			this.scratching = scratching;
		}

		feed() {
			return `${super.feed()}, happy and purring.`;
		}

		toString() {
			const isScrathed = this.scratching ? ', but beware of scratches.' : '';
			return `${super.toString()}` + '\nMain information:' +
			`\n${this.name} is a cat with ${this.insideHabits}` + isScrathed;
		}
	}

	class Dog extends Pet {
		constructor(owner, name, runningNeeds, trainability) {
			super(owner, name);
			this.runningNeeds = runningNeeds;
			this.trainability = trainability;
		}

		feed() {
			return `${super.feed()}, happy and wagging tail.`;
		}

		toString() {
			return `${super.toString()}` + '\nMain information:' +
				`\n${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`;
		}
	}

	return { Pet, Cat, Dog }
}

let classes = solveClasses();
let pet = new classes.Pet('Ann', 'Merry');
console.log(pet.addComment('likes bananas'));
console.log(pet.addComment('likes sweets'));
console.log(pet.feed());
console.log(pet.toString());
console.log('--------');

let cat = new classes.Cat('Jim', 'Sherry', 'very good habits', true);
console.log(cat.addComment('likes to be brushed'));
console.log(cat.addComment('sleeps a lot'));
console.log(cat.feed());
console.log(cat.toString());

console.log('---------');

let dog = new classes.Dog('Susan', 'Max', 5, 'good');        
console.log(dog.addComment('likes to be brushed'));
console.log(dog.addComment('sleeps a lot'));
console.log(dog.feed());
console.log(dog.toString());


