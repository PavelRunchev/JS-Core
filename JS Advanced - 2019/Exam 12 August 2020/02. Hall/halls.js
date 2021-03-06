function solveClasses() {
	class Hall {
		constructor(capacity, name) {
			this.capacity = capacity;
			this.name = name;
			this.events = [];
		}

		hallEvent(title) {
			if(this.events.includes(title))
				throw new Error('This event is already added!');

			this.events.push(title);
			return 'Event is added.';
		}

		close() {
			this.events = [];
			return `${this.name} hall is closed.`;
		}

		toString() {
			const allEvents = `\nEvents: ${this.events.join(', ')}`;
			const existEvents = this.events.length === 0 ? '' : allEvents;
			return `${this.name} hall - ${this.capacity}` + existEvents;
		}
	}

	class MovieTheater extends Hall {
		constructor(capacity, name, screenSize) {
			super(capacity, name);
			this.screenSize = screenSize;
		}

		close() {
			//don't copy the text from condition or you have error test 6!!! 'All'
            return super.close() + 'Аll screenings are over.';
        }

		toString() {
			return super.toString() + `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`;
		}
	}

	class ConcertHall extends Hall {
		constructor(capacity, name) {
			super(capacity, name);
			this.performers = [];
		}

		hallEvent(title, performers) {
			super.hallEvent(title);
			this.performers = this.performers.concat(performers);
			return 'Event is added.';
		}

		close() {
			this.performers = [];
			return super.close() + 'Аll performances are over.';
		}

		toString() {
			const allPerformers = `\nPerformers: ${this.performers.join(', ')}.`;
			const existPerformers = this.performers.length === 0 ? '' : allPerformers;
			return super.toString() + existPerformers;
		}
	}

	return { Hall, MovieTheater, ConcertHall };
}

let classes = solveClasses();
let hall = new classes.Hall(20, 'Main');
console.log(hall.hallEvent('Breakfast Ideas'));
console.log(hall.hallEvent('Annual Charity Ball'));
console.log(hall.toString());
console.log(hall.close()); 

console.log('----------------');

let movieHall = new classes.MovieTheater(10, 'Europe', '10m');
console.log(movieHall.hallEvent('Top Gun: Maverick')); 
console.log(movieHall.toString());
console.log(movieHall.close());
console.log(movieHall.toString());

console.log('----------------');

let concert = new classes.ConcertHall(5000, 'Diamond');        
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());


