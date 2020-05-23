class LineManager {
	constructor(stops) {
		this.stops = stops;
		this.currentStop = 0;
		this.duration = 0;
		this.delay = 0;
	}

	get stops() {
		return this._stops;
	}

	set stops(array) {
		if(!Array.isArray(array))
			throw new Error('Invalid input');

		array.forEach(s => {
			//12 test
			if(typeof(s.name) !== 'string' || s.name === '' 
			|| typeof(s.timeToNext) !== 'number' || s.timeToNext < 0)
				throw new Error('Invalid data');
		});

		this._stops = array;
	}

	get atDepot() {
		return this.currentStop === this.stops.length - 1 ? true : false;
	}

	get nextStopName() {
		return this.atDepot === true ? 'At depot.' : this.stops[this.currentStop + 1].name;
	}

	get currentDelay() {
		return this.delay;
	}

	arriveAtStop(minutes) {
		if(Number(minutes) < 0) throw new Error('minutes cannot be negative');
		if(this.atDepot) throw new Error('Last stop reached');

		//One step acumulate delay after increase current stop, otherwise it error result!!!
		this.duration += Number(minutes);
		this.delay += Number(minutes) - this.stops[this.currentStop].timeToNext;
		this.currentStop++;

		return !this.atDepot;
	}

	toString() {
		let output = 'Line summary\n';
		output += this.atDepot 
			? `- Course completed\n` 
			: `- Next stop: ${this.stops[this.currentStop + 1].name}\n`;
		output += `- Stops covered: ${this.currentStop}\n`;
		output += `- Time on course: ${this.duration} minutes\n`;
		output += `- Delay: ${this.delay} minutes`;
		return output;
	}
}

const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

console.log(man.toString());

// Should throw an Error (minutes cannot be negative)
//man.arriveAtStop(-4);
// Should throw an Error (last stop reached)
//man.arriveAtStop(4);

// Should throw an Error at initialization
// const wrong = new LineManager([
//     { name: 'd', timeToNext: 0 }
// ]);



