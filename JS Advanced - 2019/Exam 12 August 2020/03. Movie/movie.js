class Movie {
	constructor(movieName, ticketPrice) {
		this.movieName = movieName;
		this.ticketPrice = Number(ticketPrice);
		this.screenings = [];
		this.profit = 0;
		this.totalSoldTickets = 0;
	}

	newScreening(date, hall, description) {
		if(this.screenings.some(s => s.date === date && s.hall === hall))
			throw new Error(`Sorry, ${hall} hall is not available on ${date}`);

		this.screenings.push({date, hall, description});
		return `New screening of ${this.movieName} is added.`;
	}

	endScreening(date, hall, soldTickets) {
		const screenIndex = this.screenings.findIndex(s => s.date === date && s.hall === hall);
		if(screenIndex === -1)
			throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);

		const currentProfit = soldTickets * this.ticketPrice;
		this.profit += currentProfit;
		this.totalSoldTickets += soldTickets;
		const removedScreen = this.screenings.splice(screenIndex, 1);
		return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
	}

	toString() {
		const allScreens = this.screenings
			.sort((a,b) => a.hall.localeCompare(b.hall))
			.map(s => s = `${s.hall} - ${s.date} - ${s.description}`)
			.join('\n');
		const existScreens = this.screenings.length === 0 
			? '\nNo more screenings!'
			: `\nRemaining film screenings:\n` + allScreens;

		return `${this.movieName} full information:` +
			`\nTotal profit: ${this.profit.toFixed(0)}$` + 
			`\nSold Tickets: ${this.totalSoldTickets}` +
			existScreens;
	}
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

console.log('-----------');

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
