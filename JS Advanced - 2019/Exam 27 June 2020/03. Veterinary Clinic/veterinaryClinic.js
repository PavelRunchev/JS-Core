class VeterinaryClinic {
	constructor(clinicName, capacity) {
		this.clinicName = clinicName;
		this.capacity = capacity;
		this.clients = [];
		this.totalProfit = 0;
	}

	newCustomer(ownerName, petName, kind, procedures) {
		const allPatients = this.clients.reduce((p, c) => p += c.pets.length, 0);
		if(allPatients >= this.capacity)
			throw new Error('Sorry, we are not able to accept more patients!');

		if(!this.clients.some(c => c.ownerName === ownerName)) 
			this.clients.push({ownerName, pets: []});

		const currentOwnerIndex = this.clients.findIndex(c => c.ownerName === ownerName);
		const currentPet = this.clients[currentOwnerIndex].pets.find(p => p.petName === petName);
		if(currentPet && currentPet.kind === kind && currentPet.procedures.length > 0)
			throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`);

		if(currentPet === undefined) 
			this.clients[currentOwnerIndex].pets.push({ petName, kind, procedures });
		else 
			currentPet.procedures = procedures;
		
		return `Welcome ${petName}!`;
	}

	onLeaving(ownerName, petName) {
		let currentOwner = this.clients.find(c => c.ownerName === ownerName);
		if(!currentOwner)
			throw new Error('Sorry, there is no such client!');
		
		let currentPet = currentOwner.pets.find(p => p.petName === petName);
		if(!currentPet || currentPet.procedures.length === 0)
			throw new Error(`Sorry, there are no procedures for ${petName}!`);

		this.totalProfit += currentPet.procedures.length * 500.00;
		currentPet.procedures = [];
		return `Goodbye ${petName}. Stay safe!`;
	}

	toString() {
		const allPetsWithProcedures = this.clients.reduce((a, c) => {
			return a += c.pets.reduce((acc, curr) => acc += curr.procedures.length > 0 ? 1 : 0, 0)
		}, 0);
		const clinicPercentages = Math.floor((allPetsWithProcedures / this.capacity) * 100);
		const allOwners = this.clients.sort((a,b) => a.ownerName.localeCompare(b.ownerName))
			.map(own => {
				return `${own.ownerName} with:\n` + 
					own.pets.sort((a,b) => a.petName.localeCompare(b.petName))
						.map(p => p = `---${p.petName} - a ${p.kind.toLowerCase()} that needs: ${p.procedures.join(', ')}`)
						.join('\n');
			}).join('\n');
		const existOwners = allOwners !== '' ? '\n' + allOwners : '';
		return `${this.clinicName} is ${clinicPercentages}% busy today!` +
			`\nTotal profit: ${this.totalProfit.toFixed(2)}$` + existOwners;
	}
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());

