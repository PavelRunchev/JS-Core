function acceptance() {
	const warehouse = document.getElementById('warehouse');
	let addItBtn = document.getElementById('acceptance');
	addItBtn.addEventListener('click', addProduct);

	function addProduct() {
		//get input fields
		let company = document.getElementsByTagName('input')[0];
		let product = document.querySelector('input[name="productName"]');
		let quantity = document.querySelector('input[name="productQuantity"]');
		let scrape = document.querySelector('input[name="productScrape"]');
		
		if(company.value === '' || product.value === '' 
		|| typeof(+quantity.value) !== 'number' || typeof(+scrape.value) !== 'number')
			return;

		if(quantity.value < 0 || scrape.value < 0)
			return;

		let finalQuantity = +quantity.value - +scrape.value;
		if(finalQuantity <= 0)
			return;
		
		let div = document.createElement('div');
		let paragraph = document.createElement('p');
		paragraph.textContent = `[${company.value}] ${product.value} - ${finalQuantity} pieces`;
		let removeBtn = document.createElement('button');
		removeBtn.textContent = 'Out of stock';
		removeBtn.addEventListener('click', () => {
			div.remove();
		});

		div.appendChild(paragraph);
		div.appendChild(removeBtn);
		warehouse.appendChild(div);

		company.value = '';
		product.value = '';
		quantity.value = '';
		scrape.value = '';		
	}
}