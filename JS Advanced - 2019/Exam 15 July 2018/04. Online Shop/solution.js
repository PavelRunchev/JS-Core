function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
	$(selector).html(form);
	
	let product = $('.custom-select');
	product.on('input', function() {
		if(product.val() !== '' 
			&& Number(price.val()) > 0 
			&& Number(quantity.val()) > 0)  { 
			submitBtn.attr('disabled', false);
		} else {
			return;
		}
	});

	let price = $('#price');
	let quantity = $('#quantity');
	
	let submitBtn = $('#submit');
	submitBtn.on('click', addProduct);
	

	function addProduct(e) {
		e.preventDefault();

		if(Number(price.val() > 0) && Number(quantity.val() > 0)) {
			const isUpdate = updateValues(Number(price.val()), Number(quantity.val()));

			if(isUpdate) {
				let li = $('<li>');
				li.text(`Product: ${product.val()} Price: ${Number(price.val())} Quantity: ${Number(quantity.val())}`);
				$('.display').append(li);
			}
	
			
		}

		product.val(''), price.val(1), quantity.val(1);
		submitBtn.attr('disabled', true);
	}

	function updateValues(p, q) {
		let capacity = $('#capacity');
		let oldQuantity = Number(capacity.val() || 0);
		let oldPrice = Number($('#sum').val() || 0);

		if(oldQuantity + q >= 150) {
			capacity.val('full');
			capacity.addClass('fullCapacity');
			product.attr('disabled', true);
			price.attr('disabled', true);
			quantity.attr('disabled', true);
			submitBtn.attr('disabled', true);
			return false;
		}

		capacity.val(`${oldQuantity + q}`);
		$('#sum').val(`${oldPrice + p}`);
		return true;
	}
}
