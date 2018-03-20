function deckOfCards(arr) {
    function checkCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663"
        };
        let index = faces.indexOf(face);
        if(index < 0 || !suits.hasOwnProperty(suit)){
            throw new Error();
        }

        return faces[index] + suits[suit];
    }

    let validCards = [];
    for(let card of arr){
        let suit = card.substring(card.length - 1);
        let face = card.substring(0, card.length - 1);
        try{
            validCards.push(checkCard(face, suit));
        }
        catch (err){
            console.log("Invalid card: " + card);
            return;
        }
    }

    if(validCards.length > 0){
        console.log(validCards.join(" "));
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']); //A♠ 10♦ K♥ 2♣
deckOfCards(['5D', '2D', 'QD', '1C']); //Invalid card: 1C