function solve() {
    let [left, vs, right] = document.querySelectorAll('#result span');
    let topCards = document.querySelectorAll('#player1Div img');
    let bottomCards = document.querySelectorAll('#player2Div img');
    let topPlayer;
    let bottomPlayer;

    for (let img of topCards) {
        img.addEventListener('click', checkTopCard);
    }

    for (let img of bottomCards) {
        img.addEventListener('click', checkBottomCard);
    }

    function checkTopCard(e) {
        this.src = 'images/whiteCard.jpg';
        left.textContent = Number(this.name);
        topPlayer = this;
        checkForWinnwe();
    }

    function checkBottomCard(e) {
        this.src = 'images/whiteCard.jpg';
        right.textContent = Number(this.name);
        bottomPlayer = this;
        checkForWinnwe();
    }

    function checkForWinnwe() {
        if(left.textContent !== '' && right.textContent !== '') {
            if(Number(left.textContent) > Number(right.textContent)) {
                topPlayer.style.border = '2px solid green';
                bottomPlayer.style.border = '2px solid red';
            } else {
                topPlayer.style.border = '2px solid red';
                bottomPlayer.style.border = '2px solid green';
            }

            document.querySelector('#history')
                .textContent += `[${left.textContent} vs ${right.textContent}] `;
            left.textContent = '', right.textContent = '';
        }
    }
}