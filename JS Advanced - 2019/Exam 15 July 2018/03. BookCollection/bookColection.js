class BookCollection {
	constructor(shelfGenre, room, shelfCapacity) {
		this.shelfGenre = shelfGenre;
		this.room = room;
		this.shelf = [];
		this.shelfCapacity = shelfCapacity;
	}

	get room() {
		return this._room;
	}

	set room(value) {
		const validRoom = ['livingRoom', 'bedRoom', 'closet'];
		if(value === undefined || !validRoom.includes(value)) {
			throw new Error(`Cannot have book shelf in ${value}`);
		}

		this._room = value;
	}

	get shelfGenre() {
		return this._shelfGenre;
	}

	set shelfGenre(value) {
		this._shelfGenre = value;
	}

	get shelfCapacity() {
		return this._shelfCapacity;
	}

	set shelfCapacity(value) {
		this._shelfCapacity = value;
	}

	addBook(bookName, bookAuthor, genre) {
		const isFull = this.shelfCondition === 0;

		if(isFull) {
			const outFirstElement = this.shelf.shift();
		}

		if(this.shelfCapacity > 0) {
			this.shelf.push({ bookName, bookAuthor, genre });
			this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
		}

		//test 14 (chaining addbook methods)
		return this;
	}

	throwAwayBook(bookName) {
		const bookIndex = this.shelf.findIndex(b => b.bookName === bookName);
		if(bookIndex !== -1) {
			const removedBook = this.shelf.splice(bookIndex, 1);
		}
	}

	showBooks(genre) {
		const allBooksByGenre = this.shelf.filter(b => b.genre === genre);
		if(allBooksByGenre.length > 0) {
			let output = `Results for search "${genre}":\n`;
			return output += allBooksByGenre.map(b => b = `\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"`).join('\n');
		}
	}

	get shelfCondition() {
		return Math.max(0, this.shelfCapacity - this.shelf.length);
	}

	toString() {
		if(this.shelf.length === 0) return "It\'s an empty shelf";

		let output = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
		return output += this.shelf
			.map(b => b = `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}`)
			.join('\n');
	}
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
.addBook("Introduction to Programming with C#", "Svetlin Nakov")
.addBook("Introduction to Programming with Java", "Svetlin Nakov")
.addBook("Programming for .NET Framework", "Svetlin Nakov");
//console.log(livingRoom.toString());

// try {
// 	let lr = new BookCollection('livingRoom', 5);
// } catch(err) {
// 	console.log(err);
// }

let bedRoom = new BookCollection('Mixed', 'bedRoom', 0);

bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
//console.log(bedRoom.showBooks("history"));
console.log(bedRoom.toString());

