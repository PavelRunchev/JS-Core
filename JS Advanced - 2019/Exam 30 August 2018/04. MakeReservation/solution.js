function makeReservation() {
	let container = document.querySelector('#container');
	let infoPreview = document.querySelector('#infoPreview');

	let submitBtn = document.querySelector('#submit')
	submitBtn.addEventListener('click', submit);
	let editBtn = document.querySelector('#edit');
	editBtn.addEventListener('click', editedInformation);
	let continueBtn = document.querySelector('#continue');
	continueBtn.addEventListener('click', paymentDetails);

	let fullName = document.querySelector('#fullName');
	let email = document.querySelector('#email');
	let phoneNumber = document.querySelector('#phoneNumber');
	let address = document.querySelector('#address');
	let postalCode = document.querySelector('#postalCode');

	function submit(e) {
		e.preventDefault();
		if(fullName.value.length === 0 || email.value.length === 0) return;

		let nameLi = createLi();
		nameLi.textContent = `Name: ${fullName.value}`;
		let emailLi = createLi();
		emailLi.textContent = `E-mail: ${email.value}`;
		let phoneLi = createLi();
		phoneLi.textContent = `Phone: ${phoneNumber.value}`;
		let addressLi = createLi();
		addressLi.textContent = `Address: ${address.value}`;
		let codeLi = createLi();
		codeLi.textContent = `Postal Code: ${postalCode.value}`;

		infoPreview.appendChild(nameLi);
		infoPreview.appendChild(emailLi);
		infoPreview.appendChild(phoneLi);
		infoPreview.appendChild(addressLi);
		infoPreview.appendChild(codeLi);

		onOffDisableBtn(true, false, false)
		fullName.value = '', email.value = '', phoneNumber.value = '', address.value = '', postalCode.value = '';
	}

	function editedInformation(e) {
		let info = Array
			.from(infoPreview.querySelectorAll('li'))
			.map(li => li = li.textContent.split(': ')[1]);
		fullName.value = info[0];
		email.value = info[1];
		phoneNumber.value = info[2];
		address.value = info[3];
		postalCode.value = info[4];

		infoPreview.innerHTML = '';
		onOffDisableBtn(false, true, true);
	}

	function createLi() {
		return document.createElement('li');
	}

	function onOffDisableBtn(s, e, c) {
		submitBtn.disabled = s, editBtn.disabled = e, continueBtn.disabled = c;
	}

	function paymentDetails(e) {
		e.preventDefault();
		createPaymentElements();
		onOffDisableBtn(true, true, true);
	}

	function createPaymentElements() {
		let h2 = document.createElement('h2');
		h2.textContent = 'Payment details';
		container.appendChild(h2);

		let select = document.createElement('select');
		select.id = 'paymentOptions';
		select.className = 'custom-select';
		select.onchange = creditCardExtraDetails;

		let chooseOption = createOption('Choose');
		//test zero 2!
		chooseOption.setAttribute('selected', "");
		chooseOption.disabled = true;
		chooseOption.hidden = true;
		select.appendChild(chooseOption);

		let creditCartOption = createOption('Credit Card');
		creditCartOption.value = 'creditCard';
		
		select.appendChild(creditCartOption);

		let bankTransferOption = createOption('Bank Transfer');
		bankTransferOption.value = 'bankTransfer';
		select.appendChild(bankTransferOption);

		container.appendChild(select);

		let div = document.createElement('div');
		div.id = 'extraDetails';
		container.appendChild(div);
	}

	function createOption(text) {
		let option = document.createElement('option');
		option.textContent = text;
		return option;
	}

	function creditCardExtraDetails(e) {
		document.querySelector('#extraDetails').innerHTML = '';
		if(this.value === 'creditCard') {
			creditCardDetails();
		} else if(this.value === 'bankTransfer') {
			bankTransferDetails();
		}
	}

	function creditCardDetails() {
		let divInputLabel1 = createDiv('Card Number');
		let br1 = document.createElement('br');
		let divInputLabel2 = createDiv('Expiration Date');
		let br2 = document.createElement('br');
		let divInputLabel3 = createDiv('Security Numbers');
		let br3 = document.createElement('br');
		let checkOutBtn = createCheckOutBtn();

		document.querySelector('#extraDetails').appendChild(divInputLabel1);
		document.querySelector('#extraDetails').appendChild(br1);
		document.querySelector('#extraDetails').appendChild(divInputLabel2);
		document.querySelector('#extraDetails').appendChild(br2);
		document.querySelector('#extraDetails').appendChild(divInputLabel3);
		document.querySelector('#extraDetails').appendChild(br3);
		document.querySelector('#extraDetails').appendChild(checkOutBtn);
	}

	function createDiv(text) {
		let div = document.createElement('div');
		div.textContent = text;
		div.className = 'inputLabel';
		let input = document.createElement('input');
		div.appendChild(input);
		return div;
	}

	function bankTransferDetails() {
		let p = document.createElement('p');
		//test 11
		p.innerHTML = 'You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890';
		document.querySelector('#extraDetails').appendChild(p);

		let checkOutBtn = createCheckOutBtn();
		document.querySelector('#extraDetails').appendChild(checkOutBtn);
	}

	function createCheckOutBtn() {
		let btn = document.createElement('button');
		btn.id = 'checkOut';
		btn.textContent = 'Check Out';
		btn.addEventListener('click', finishReservation);
		return btn;
	}

	function finishReservation(e) {
		let wrapper = document.querySelector('#wrapper');
		wrapper.innerHTML = '';
		let h4 = document.createElement('h4');
		h4.textContent = 'Thank you for your reservation!';
		wrapper.appendChild(h4);
	}
}