class PaymentManager {
	constructor(title) {
		this.title = title;
	}

	get title() {
		return this._title;
	}

	set title(value) {
		this._title = value;
	}

	render(id) {
		let table = $('<table></table>');
		let caption = $(`<caption>${this.title} Payment Manager</caption>`);
		table.append(caption);

		let thead = $('<thead><tr>' + 
			'<th class="name">Name</th>' +
			'<th class="category">Category</th>' +
			'<th class="price">Price</th>' +
			'<th>Actions</th>' +
			'</tr></thead>');
		table.append(thead);

		let tbody = $('<tbody class="payments"></tbody>');
		table.append(tbody);

		let tfoot = $('<tfoot class="input-data">');
		let tr = $('<tr></tr>');
		let nameTd = $('<td><input name="name" type="text"></td>');
		let categoryTd = $('<td><input name="category" type="text"></td>');
		let priceTd = $('<td><input name="price" type="number"></td>');
		let buttonTd = $('<td></td>');
		let btnAdd = $('<button>Add</button>');

		btnAdd.on('click', function(e) {
			let inputName = $(e.target).parent().parent().find('input[name="name"]');
			let inputCategory = $(e.target).parent().parent().find('input[name="category"]');
			let inputPrice = $(e.target).parent().parent().find('input[name="price"]');
			if(inputName.val() === '' || inputCategory.val() === '' || inputPrice.val() === '') return;

			let payments = $(e.target).parent().parent().parent().parent().find('tbody.payments');
			let trPayment = $(`<tr><td>${inputName.val()}</td>` +
			`<td>${inputCategory.val()}</td><td>${Number(inputPrice.val())}</td></tr>`);
			let tdBtnDelete = $('<td></td>');
			let btnDelete = $('<button>Delete</button>');
			tdBtnDelete.append(btnDelete);
			trPayment.append(tdBtnDelete);
			btnDelete.on('click', function(e) {
				$(e.target).parent().parent().remove();
			});

			payments.append(trPayment);
			inputName.val(''), inputCategory.val(''), inputPrice.val('');
		});

		tfoot.append(tr);
		tr.append(nameTd)
			.append(categoryTd)
			.append(priceTd)
			.append(buttonTd);
		buttonTd.append(btnAdd);

		table.append(tfoot);
		$(`#${id}`).append(table);
	}
}