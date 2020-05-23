function addSticker() {
	let title = document.querySelector('.title');
	let content = document.querySelector('.content');
	if(title.value.length === 0 || content.value.length === 0) return;

	let li = $('<li>');
	li.addClass('note-content');

	let a = $('<a>');
	a.addClass('button');
	a.text('x');
	a.on('click', () => li.remove());
	li.append(a);

	let h2 = $('<h2>');
	h2.text(`${title.value}`);
	li.append(h2);

	let hr = $('<hr>');
	li.append(hr);

	let p = $('<p>');
	p.text(`${content.value}`);
	li.append(p);

	$('#sticker-list').append(li);
	title.value =  '', content.value = '';
}