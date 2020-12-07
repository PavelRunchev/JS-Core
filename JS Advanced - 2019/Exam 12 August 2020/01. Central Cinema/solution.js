function solve () {
    document.querySelector('#container button').addEventListener('click', onScreen);
    document.querySelector('#archive button').addEventListener('click', clearArchive);

    function onScreen (e) {
        e.preventDefault();
        let [name, hall, price] = document.querySelectorAll('#container input');
        if (name.value === '' || hall.value === '' || price.value === '') return;
        if (!/^\d+\.*\d*$/.test(price.value) || parseFloat(price.value) <= 0) return;

        const newMovie = createMovie(name.value, hall.value, price.value);
        document.querySelector('#movies ul').appendChild(newMovie);
        name.value = '', hall.value = '', price.value = '';
    }

    function createMovie (name, hall, price) {
        const li = createElement('li', '');
        li.appendChild(createElement('span', name));
        li.appendChild(createElement('strong', `Hall: ${hall}`));
        const div = createElement('div', '');
        div.appendChild(createElement('strong', price));
        div.appendChild(createElement('input', ''));
        div.appendChild(createElement('button', 'Archive', archive));
        li.appendChild(div);
        return li;
    }

    function createElement (type, content, clickType) {
        const el = document.createElement(`${type}`);
        if (content !== '') el.textContent = content;
        if (type === 'input') el.placeholder = 'Tickets Sold';
        if (type === 'button') el.addEventListener('click', clickType);
        return el
    }

    function archive (e) {
        e.preventDefault();
        const ticketCount = this.parentNode.querySelector('input').value;
        //However,in the task Zero tickets is valid number!
        //In living, this is not true.
        if(ticketCount === '' || !/^\d+\.*\d*$/.test(ticketCount)) return;

        const name = this.parentNode.parentNode.querySelector('span').textContent;
        const price = this.parentNode.querySelector('strong').textContent;
        const movieToArchiveSection = createArhiveMovie(name,Number(price), Number(ticketCount));
        document.querySelector('#archive ul').appendChild(movieToArchiveSection);
        this.parentNode.parentNode.remove();
    }

    function createArhiveMovie(name, price, ticketCount) {
        let li = createElement('li', '');
        li.appendChild(createElement('span', name));
        li.appendChild(createElement('strong', `Total amount: ${(price * ticketCount).toFixed(2)}`));
        li.appendChild(createElement('button', 'Delete', deleteMovie));
        return li;
    }

    function deleteMovie(e) {
      e.preventDefault();
      this.parentNode.remove();
    }

    function clearArchive(e) {
        e.preventDefault();
        console.log('clear')
        this.parentNode.querySelector('ul').innerHTML = '';
    }
}
