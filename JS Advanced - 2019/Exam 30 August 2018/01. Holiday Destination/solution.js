function addDestination() {
	let destinationsList = document.querySelector('#destinationsList');

	let [city, country] = document.querySelectorAll('#input input');
	let seasson = document.querySelector('#seasons');
	let s = seasson.value.charAt(0).toUpperCase() + seasson.value.slice(1);

	if(city.value.length === 0 || country.value.length === 0) return;

	let tr = document.createElement('tr');
	let destinTd = document.createElement('td');
	destinTd.textContent = `${city.value}, ${country.value}`;
	tr.appendChild(destinTd);
	let seassonTd = document.createElement('td');
	seassonTd.textContent = s;
	tr.appendChild(seassonTd);
	destinationsList.appendChild(tr);
	updateNumberSeassons(s);

	city.value = '', country.value = '';

	function updateNumberSeassons(s) {
		let spring = Number(document.querySelector('#spring').value);
		let summer = Number(document.querySelector('#summer').value);
		let autumn = Number(document.querySelector('#autumn').value);
		let winter = Number(document.querySelector('#winter').value);

		if(s === 'Spring') document.querySelector('#spring').value = ++spring;
		if(s === 'Summer') document.querySelector('#summer').value = ++summer;
		if(s === 'Autumn') document.querySelector('#autumn').value = ++autumn;
		if(s === 'Winter') document.querySelector('#winter').value = ++winter;
	}
}