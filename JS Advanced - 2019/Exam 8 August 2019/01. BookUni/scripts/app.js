function solve() {
    let oldBooks = document.getElementById('outputs').children[0].children[1];
    let newBooks = document.getElementById('outputs').children[1].children[1];
    let totalPrice = document.getElementsByTagName('h1')[1];

    const [titleInput, yearInput, priceInput] = document.querySelectorAll('input');

    let buttonAddNewBook = document.getElementsByTagName('button')[0];
    buttonAddNewBook.addEventListener('click', function(ev) {
        ev.preventDefault();

        if(titleInput.value === '' || Number(yearInput.value) < 1 || Number(priceInput.value) < 1) {
            return;
        }

        let book;
        if(Number(yearInput.value) >= 2000) {
            book = addBook(titleInput.value, Number(yearInput.value), Number(priceInput.value), false);
            newBooks.appendChild(book);
        } else {
            book = addBook(titleInput.value, Number(yearInput.value), Number(priceInput.value), true);
            oldBooks.appendChild(book);
        }

        titleInput.value = '';
        yearInput.value = '';
        priceInput.value = '';
    });
    
    function addBook(title, year,  price, isOldBook) {
        if(isOldBook) { price = price * 0.85; }

        let div = document.createElement('div');
        div.className = 'book';

        let p = document.createElement('p');
        p.textContent = `${title} [${year}]`;
        div.appendChild(p);

        let buttonBuy = document.createElement('button');
        buttonBuy.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

        // click button Buy
        buttonBuy.addEventListener('click', function(e) {
            e.preventDefault();
            let oldPrice = Number(totalPrice.textContent.split(' ')[3]);
            let currentPrice = oldPrice + price;
            totalPrice.textContent = `Total Store Profit: ${currentPrice.toFixed(2)} BGN`;
            e.target.parentNode.remove();
        });
        div.appendChild(buttonBuy);

        if(year >= 2000 && isOldBook === false) {
            let buttonToOldSelection = document.createElement('button');
            buttonToOldSelection.textContent = 'Move to old section';
            // move to old section
            buttonToOldSelection.addEventListener('click', function(e) {
                oldBook = addBook(title, year, price, true);
                oldBooks.appendChild(oldBook);
                e.target.parentNode.remove();
            });
            div.appendChild(buttonToOldSelection);
        }

        return div;
    }    
}