function deckOfCards(inputDeck) {
    const suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663'};
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    function checkValidCard(card) {
        let face = card[0];
        let suit = card[1];

        if(card.length === 3) {
            face = card[0] + card[1];
            suit = card[2];
        }

        if(!cards.includes(face)) return false;
        if(!suits.hasOwnProperty(suit)) return false;

        return true;
    }

    let deck = [];
    for(let card of inputDeck) {
        let isValid = false;
        if(checkValidCard(card)) {
            let validCard = card[0] + suits[card[1]];
            if(card.length === 3)
                validCard = card[0] + card[1] + suits[card[2]];
            
            deck.push(validCard);
        }
        else {
            return console.log(`Invalid card: ${card}`);
        }
    }

    return console.log(deck.join(' '));
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['3D', 'JC', '2S', '10H', '5X']);