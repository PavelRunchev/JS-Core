function acceptance() {
	let [shippingCompany, productName, productQuantity, productScrape] = document.querySelectorAll('#fields td input');

	if(shippingCompany.value.length === 0 || productName.value.length === 0) return;
	if(!Number(productQuantity.value) || !Number(productScrape.value)) return;
	if(Number(productQuantity.value) <= 0) return;
	//test 3
	if(Number(productQuantity.value) - Number(productScrape.value) <= 0) return;
	if(Number(productQuantity.value) < Number(productScrape.value)) return;

	let div = document.createElement('div');
	let p = document.createElement('p');
	p.textContent = 
	`[${shippingCompany.value}] ${productName.value} - ${Number(productQuantity.value) - Number(productScrape.value)} pieces`;
	div.appendChild(p);
	let button = document.createElement('button');
	button.type = 'button';
	button.textContent = 'Out of stock';
	button.addEventListener('click', function() {
		this.parentElement.remove();
	});
	div.appendChild(button);

	document.querySelector('#warehouse').appendChild(div);
	shippingCompany.value = '', productName.value = '', productQuantity.value = '', productScrape.value = '';
}