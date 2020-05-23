function createArticle() {
	let articles = document.getElementById('articles');
	
	let title = document.getElementById('createTitle');
	let text = document.getElementById('createContent');

	if(title.value === '' || text.value === '') { return; }

	let newArticle = document.createElement('article');
	let h3 = document.createElement('h3');
	h3.textContent = title.value;
	let p = document.createElement('p');
	p.textContent = text.value;
	newArticle.appendChild(h3);
	newArticle.appendChild(p);
	articles.appendChild(newArticle);

	title.value = '';
	text.value = '';
}