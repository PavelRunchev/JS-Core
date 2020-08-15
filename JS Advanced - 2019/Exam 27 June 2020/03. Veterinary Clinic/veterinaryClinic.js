class VeterinaryClinic {
	constructor(clinicName, capacity) {
		this.clinicName = clinicName;
		this.capacity = capacity;
		this.clients = [];
		this.totalProfit = 0;
		this.currentWorkload = {};
	}

	newCustomer(ownerName, petName, kind, procedures) {
		if(this.capacity <= this.clients.length)
			throw new Error('Sorry, we are not able to accept more patients!');

		let existClient = this.clients.find(c => c.ownerName === ownerName);
		if(existClient) {
			let petIndex = existClient.pets.findIndex(p => p.petName === petName);
			if(existClient && petIndex !== -1 && existClient.pets[petIndex].procedures.length > 0) 
				throw new Error(`This pet is already registered under ${existClient.ownerName} name! ${petName} is on our lists, waiting for ${existClient.pets[petIndex].procedures.join(', ')}.`);

			if(petIndex !== -1) 
				existClient.pets[petIndex].procedures = procedures;
			else 
				existClient.pets.push({ petName, kind, procedures });
		} else {
			let client = { ownerName, pets: [], clientBill: 0 };
			client.pets.push({ petName, kind, procedures });
			this.clients.push(client);
		}

		this.currentWorkload = this.clients
			.find(c => c.ownerName === ownerName)
			.pets.find(p => p.petName === petName);
		return `Welcome ${petName}!`;
	}

	onLeaving(ownerName, petName) {
		const existClient = this.clients.find(c => c.ownerName === ownerName);
		if(!existClient) 
			throw new  Error('Sorry, there is no such client!');

		const existPet = existClient.pets.find(p => p.petName === petName);
		if(!existPet || existPet.procedures.length === 0)
			throw new Error(`Sorry, there are no procedures for ${petName}!`);
		
		const clientBillForPet = existPet.procedures.length * 500.00;
		existPet.procedures = [];
		existClient.clientBill += clientBillForPet;
		this.totalProfit += clientBillForPet;
		this.currentWorkload = existPet;
		return `Goodbye ${petName}. Stay safe!`;
	}

	toString() {
		const allPetsProcedures = this.clients.reduce((acc, curr) => {
			return acc += curr.pets.reduce((a, c) => a += c.procedures.length > 0 ? 1 : 0, 0);
		}, 0);
		const percentage = Math.floor(allPetsProcedures / this.capacity * 100);

		let allClients = '';
		for (let client of this.clients.sort((a,b) => a.ownerName.localeCompare(b.ownerName))) {
			allClients += `\n${client.ownerName} with:`;
			for (let pet of client.pets.sort((a,b) => a.petName.localeCompare(b.petName))) {
				allClients += `\n---${pet.petName} - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(', ')}`
			}
		}

		return `${this.clinicName} is ${percentage}% busy today!` + 
			`\nTotal profit: ${this.totalProfit.toFixed(2)}$` + 
			allClients;
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

