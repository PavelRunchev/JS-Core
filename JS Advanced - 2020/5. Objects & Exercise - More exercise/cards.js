let result = (function() {
    const Suits = { SPADES: '♠', HEARTS: '♥', DIAMONDS: '♦', CLUBS: '♣' };
    class Card {
        constructor(face, suit) {
            this.validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            this.face = face;
            this.suit = suit;
            
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if(this.validCards.includes(value))
                this._face = value;
            else
                throw new Error('Invalid face');
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if(Suits.SPADES === value || Suits.HEARTS === value 
                || Suits.DIAMONDS === value || Suits.CLUBS === value)
                this._suit = value;
            else
                throw new Error('Invalid suit');           
        }

        toString() {
            return this._face + this._suit;
        }
    }


    return {
        Suits:Suits,
        Card:Card
    };
}());

let Card = result.Card;
let Suits = result.Suits;

let card = new Card('2', Suits.DIAMONDS);
console.log(card.toString());