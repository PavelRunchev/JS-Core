function realEstateAgency () {
	let agencyProfit = document.querySelector('#roof h1');
	let building = document.querySelector('#building');
	let message = document.querySelector('#message');

	document.querySelector('#regOffer button').addEventListener('click', regOffer);
	document.querySelector('#findOffer button').addEventListener('click', findOffer);

	function regOffer(e) {
		e.preventDefault();
		let condition = true;
		let [rentPrice, apartmentType, commissionRate] = document.querySelectorAll('#regOffer input');

		if(!Number(rentPrice.value) || Number(rentPrice.value) <= 0) condition = false;
		if(!Number(commissionRate.value) || Number(commissionRate.value) < 1 
		|| Number(commissionRate.value) > 100) condition = false;
		if(apartmentType.value.length === 0 || apartmentType.value.includes(':')) condition = false;
		if(Number(commissionRate.value) == 0) condition = true;

		if(condition) {
			message.textContent = 'Your offer was created successfully.';
			let newType = createType(rentPrice.value, apartmentType.value, commissionRate.value);
			building.appendChild(newType);
		} else {
			message.textContent = 'Your offer registration went wrong, try again.';
		}

		rentPrice.value = '', apartmentType.value = '', commissionRate.value = '';
	}

	function findOffer(e) {
		e.preventDefault();
		let condition = true;
		let [budget, apartmentType, familyName] = document.querySelectorAll('#findOffer input');
		if(!Number(budget.value) || Number(budget.value) < 1) condition = false;
		if(apartmentType.value.length === 0 || familyName.value.length === 0) condition = false;

		let foundHouse = false;
		let allOffers = building.querySelectorAll('div');
		for (let div of allOffers) {
			let [rent, type, commission] = div.querySelectorAll('p');
			let currentRent = Number(rent.textContent.split(':')[1].trim());
			let searchByType = type.textContent.split(':')[1].trim();
			let currentCommission = Number(commission.textContent.split(':')[1].trim());
			let commissionPercent = currentRent * (currentCommission / 100);

			if(searchByType === apartmentType.value 
			&& Number(budget.value) >= currentRent + commissionPercent) {
				div.style.border = '2px solid red';
				rent.textContent = familyName.value;
				type.textContent = 'live here now';
				//test 6!
				commission.remove();
				let moveOutBtn = document.createElement('button');
				moveOutBtn.textContent = 'MoveOut';
				moveOutBtn.addEventListener('click', removeAppartment);
				div.appendChild(moveOutBtn); 

				getCommissionToAgency(commissionPercent * 2);
				foundHouse = true;
				break;
			} 
		}

		if(condition && foundHouse) {
			message.textContent = 'Enjoy your new home! :))';
		} else {
			message.textContent = 'We were unable to find you a home, so sorry :(';
		}

		budget.value = '', apartmentType.value = '', familyName.value = '';
	}

	function createType(price, type, commission) {
		let div = document.createElement('div');
		div.className = 'apartment';

		let rentP = createP(`Rent: ${price}`);
		div.appendChild(rentP);

		let typeP = createP(`Type: ${type}`);
		div.appendChild(typeP);

		let commissionP = createP(`Commission: ${commission}`);
		div.appendChild(commissionP);

		return div;
	}

	function createP(text) {
		let p = document.createElement('p');
		p.textContent = text;
		return p;
	}

	function removeAppartment(e) {
		let familyName = this.parentNode.querySelectorAll('p')[0].textContent;
		message.textContent = `They had found cockroaches in ${familyName}\'s apartment`;
		this.parentNode.remove();
		
	}

	function getCommissionToAgency(commission) {
		let oldProfit = Number(agencyProfit.textContent.split(' ')[2]);
		agencyProfit.textContent = `Agency profit: ${oldProfit + commission} lv.`;
	}
}