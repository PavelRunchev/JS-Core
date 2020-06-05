function sort(colIndex, descending) {
	let products = Array.from(document.querySelectorAll('#products tbody > tr'));
	
	products.sort((a, b) => {
		if(colIndex === 0 && descending === false) {
			return a.children[0].textContent.localeCompare(b.children[0].textContent);
		} else if(colIndex === 0 && descending === true) {
			return b.children[0].textContent.localeCompare(a.children[0].textContent);
		} else if(colIndex === 1 && descending === false) {
			return Number(a.children[1].textContent) - Number(b.children[1].textContent);
		} else if(colIndex === 1 && descending === true) {
			return Number(b.children[1].textContent) - Number(a.children[1].textContent);
		}
	});

	document.querySelector('#products tbody').innerHTML = '';
	for (let p of products) {
		const product = createProduct(p.children[0].textContent, p.children[1].textContent);
		document.querySelector('#products tbody').appendChild(product);
	}

	function createProduct(name, price) {
		let tr = document.createElement('tr');
		let nameTd = document.createElement('td');
		nameTd.textContent = name;
		let priceTd = document.createElement('td');
		priceTd.textContent = price;

		tr.appendChild(nameTd);
		tr.appendChild(priceTd);
		return tr;
	}
}