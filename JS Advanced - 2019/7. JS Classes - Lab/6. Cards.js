let result = (function() {
    const Suits = { SPADES: '♠', HEARTS: '♥', DIAMONDS: '♦', CLUBS: '♣' };
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if(!faces.includes(value))
                throw new TypeError('Invalid card face ' + value);

            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if(!Object.values(Suits).includes(value))
                throw new Error('Invalid card suit ' + value);

            this._suit = value;
        }

        toString() {
            return this.face + this.suit;
        }
    }

    return {
        Suits,
        Card
    }
}());

try {
    let Card = result.Card;
    let Suits = result.Suits

    let card = new Card('Q', Suits.CLUBS);
    console.log(card.toString());
    let card2 = new Card('1', Suits.CLUBS);
    console.log(card2.toString());
}
catch(error) {
    console.log(error.message);
}
