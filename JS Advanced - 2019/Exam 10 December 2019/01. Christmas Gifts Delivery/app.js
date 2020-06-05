function solution() {
    let listOfGifts = document.querySelectorAll('.container > .card > ul');
    document.querySelector('.card button').addEventListener('click', addGift);

    function addGift(e) {
        e.preventDefault();
        let inputGift = document.querySelector('.card input');
        if(inputGift.value === '') return;

        let li = document.createElement('li');
        li.className = 'gift';
        li.textContent = inputGift.value;

        let sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send';
        sendBtn.addEventListener('click', send);

        let discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';
        discardBtn.addEventListener('click', discard);

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);
        listOfGifts[0].appendChild(li);

        //sorted Gifts
        Array.from(listOfGifts[0].children)
            .sort((a, b) => {
                if(a.textContent > b.textContent) return 1;
                if(a.textContent < b.textContent) return -1;
                return 0;
            })
            .forEach(el => listOfGifts[0].appendChild(el));

        inputGift.value = '';
    }

    function send(e) {
        let gift = e.target.parentNode;
        let li = document.createElement('li');
        li.textContent = gift.textContent.substring(0, gift.textContent.lastIndexOf('SendDiscard'));
        gift.remove();

        listOfGifts[1].appendChild(li);
    }

    function discard(e) {
        let gift = e.target.parentNode;
        gift.children[1].remove();
        gift.children[0].remove();
       
        listOfGifts[2].appendChild(gift);
    }
};