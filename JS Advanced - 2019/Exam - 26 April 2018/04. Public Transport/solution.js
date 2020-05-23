// Solution with jQuery
class PublicTransportTable {
	constructor(townName) {
		this.changeHeader(townName);
		this.searchVehicles();
		this.clearVehicles();
	}

	changeHeader(town) {
		$('caption').text(`${town}'s Public Transport`);
	}

	addVehicle(obj) {
		let vehicles = $('.vehicles-info');
		let tr = $(`<tr><td>${obj.type}</td><td>${obj.name}</td></tr>`);
		tr.addClass('hide-info');
		let btnTd = $('<td></td>');
		let btn = $(`<button>More Info</button>`);

		let moreInfo = $(`<tr class="more-info"><td colspan="3"><table>` + 
				`<tr><td>Route: ${obj.route}</td></tr>` +
				`<tr><td>Price: ${obj.price}</td></tr>` +
				`<tr><td>Driver: ${obj.driver}</td></tr>` +
				`</table></td></tr>`);
		btn.on('click', function(e) {
			if($(e.target).text() === 'More Info') {
				$(e.target).text('Less Info');
				$(tr).removeClass('hide-info').addClass('show-info');
				moreInfo.insertAfter(tr);
				$(moreInfo).css('display', '');
			} else {
				$(e.target).text('More Info');
				$(tr).removeClass('show-info').addClass('hide-info');
				moreInfo.remove();
			}
		});

		btnTd.append(btn);
		tr.append(btnTd);
		vehicles.append(tr);
	}

	searchVehicles() {
		$('.search-btn').on('click', function() { 
			let typeInput = $('input[name="type"]').val();
			let nameInput = $('input[name="name"]').val();

			if(typeInput || nameInput) {
				//last test
				// selected without class more-info
				let rows = $('.vehicles-info > tr').not('.more-info');
				for (let v of rows) {
					let typeChild = $(v).find('td').eq(0);
					let nameChild = $(v).find('td').eq(1);
					//search by type or name!
					if(!typeChild.text().includes(typeInput)
					|| !nameChild.text().includes(nameInput)) {
						$(v).css("display", "none");
						let button = $(v).find('td').eq(2).find('button');
						if(button.text() === "Less Info") { button.click(); }
					} else  {
						$(v).css("display", "");
					}
				}
			}
		});
	}

	clearVehicles() {
		$('.clear-btn').on('click', function() {
			//set all vihecles to display ''
			for (let v of $('.vehicles-info > tr')) { $(v).css("display", ""); }
			//clear input fields
			$('input[name="type"]').val(''), $('input[name="name"]').val('');
		});
	}
}