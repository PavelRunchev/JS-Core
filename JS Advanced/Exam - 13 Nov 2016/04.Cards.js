function cardDeckBuilder(selector) {
    let suits = {C: "\u2663", D: "\u2666", H: "\u2665", S: "\u2660"};
    let cards = [];

     return {
        addCard(face, suit){
            $(selector).append($('<div>')
                .addClass('card')
                .text(`${face} ${suits[suit]}`)
                .click(reverseCards));
            let card = {
                face: face,
                suit: suits[suit]
            };
            cards.push(card);
        }
    };
    
    function reverseCards() {
        cards = cards.reverse();
        printCards();
    }

    function printCards(){
        $(selector).empty();
        for(let card of cards){
            $(selector).append($('<div>')
                .addClass('card')
                .text(`${card['face']} ${card['suit']}`)
                .click(reverseCards));
        }
    }
}


