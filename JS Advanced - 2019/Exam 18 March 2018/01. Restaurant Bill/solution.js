function addProduct() {
	let productList = document.querySelector('#product-list');
	let totalPrice = document.querySelectorAll('#bill tfoot > tr > td')[1];

	let productInput = document.querySelectorAll('#add-product input')[0];
	let priceInput = document.querySelectorAll('#add-product input')[1];

	if(productInput.value === '' || priceInput.value === '') return;

	let tr = document.createElement('tr');
	let productTd = document.createElement('td');
	productTd.textContent = productInput.value;
	tr.appendChild(productTd);
	let priceTd = document.createElement('td');
	priceTd.textContent = priceInput.value;
	tr.appendChild(priceTd);
	productList.appendChild(tr);

	totalPrice.textContent = Number(totalPrice.textContent) + Number(priceInput.value);
	productInput.value = '', priceInput.value = '';
  }