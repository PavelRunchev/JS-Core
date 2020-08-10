function create(words) {
    words.forEach(e => {
        document.querySelector('#content').appendChild(createDiv(e));
    });

    function createDiv(text) {
        let div = document.createElement('div');
        div.addEventListener('click', showParagraph);
        div.appendChild(createParagraph(text));
        return div;
    }

    function createParagraph(text) {
        let p = document.createElement('p');
        p.style.display = 'none';
        p.textContent = text;
        return p;
    }

    function showParagraph(e) {
        e.preventDefault();
        this.firstChild.style.display = 'block';
    }
}