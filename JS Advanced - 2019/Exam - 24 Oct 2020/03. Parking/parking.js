class Parking {
	constructor(capacity) {
		this.capacity = capacity;
		this.vehicles = [];
	}

	addCar(carModel, carNumber) {
		if(this.vehicles.length >= this.capacity)
			throw new Error('Not enough parking space.');

		this.vehicles.push({ carModel, carNumber, payed: false });
		return `The ${carModel}, with a registration number ${carNumber}, parked.`;
	}

	removeCar(carNumber) {
		const indexCarNumber = this.vehicles.findIndex(v => v.carNumber === carNumber);
		if(indexCarNumber)
			throw new Error("The car, you're looking for, is not found.");

		if(this.vehicles[indexCarNumber].payed === false)
			throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);

		const leftCar = this.vehicles.splice(indexCarNumber, 1);
		return `${carNumber} left the parking lot.`;
	}

	pay(carNumber) {
		const indexCarNumber = this.vehicles.findIndex(v => v.carNumber === carNumber);
		if(indexCarNumber === -1)
			throw new Error(`${carNumber} is not in the parking lot.`);
		if(this.vehicles[indexCarNumber].payed === true)
			throw new Error(`${carNumber}'s driver has already payed his ticket.`);
		
			this.vehicles[indexCarNumber].payed = true;
		return `${carNumber}'s driver successfully payed for his stay.`;
	}

	getStatistics(carNumber) {
		const foundCar = this.vehicles.find(v => v.carNumber === carNumber);
		if(foundCar) 
			return `${foundCar.carModel} == ${foundCar.carNumber} - ${this.isPayed(foundCar.payed)}`;
		
		const emptySlots = this.capacity - this.vehicles.length;
		const allVehicles = this.vehicles
			.sort((a,b) => a.carModel.localeCompare(b.carModel))
			.map(v => v = `${v.carModel} == ${v.carNumber} - ${this.isPayed(v.payed)}`)
			.join('\n');
		const existVehichles = this.vehicles.length === 0 ? '' : '\n';
		
		return `The Parking Lot has ${emptySlots} empty spots left.` + 
			existVehichles + allVehicles;
	}

	isPayed(p) {
		if(p === true) return 'Has payed';
		return 'Not payed';
	}
}

const parking = new Parking(12);
console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));


