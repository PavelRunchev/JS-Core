function solution() {
	let $type = $('#toyType');
	let $price = $('#toyPrice');
	let $description = $('#toyDescription');
	let $button = $('button');

	$button.on('click', function () {
		let type = $type.val();
		let price = $price.val();
		let description = $description.val();

		if (type && Number(price) && description) {
			let $div = $('<div>');
			$div.addClass('gift');

			let $img = $('<img>');
			$img.attr('src', 'gift.png');
			$div.append($img);

			let $h2 = $('<h2>');
			$h2.text(`${type}`);
			$div.append($h2);

			let $p = $('<p>');
			$p.text(`${description}`);
			$div.append($p);

			let $buyButton = $('<button>');
			$buyButton.text(`Buy it for $${price}`);
			$buyButton.on('click', function (e) {
				let $divParent = e.target.parentElement;
				let $sectionParent = $divParent.parentElement;
				$sectionParent.remove($divParent);
			});
			$div.append($buyButton);

			let $section = $('#christmasGiftShop');
			$section.append($div);
		}

		$type.val('');
		$price.val('');
		$description.val('');
	});
}
