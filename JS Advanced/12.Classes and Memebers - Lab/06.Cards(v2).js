let validCards = (function() {
    let Suits = {
        CLUBS: "\u2663",
        DIAMONDS: "\u2666",
        HEARTS: "\u2665",
        SPADES: "\u2660"
    };

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card{
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(f){
            if(!faces.includes(f)){
                throw new TypeError("Invalid card face: " + f);
            }
            this._face = f;
        }

        get suit() {
            return this._suit;
        }

        set suit(s){
            if(!Object.keys(Suits).map(k => k = Suits[k]).includes(s)){
                throw new Error("Invalid card suite: " + s);
            }

            this._suit = s;
        }

        toString(){
            return this.face + this.suit;
        }
    }

    return {Suits, Card };
})();

let Card = validCards.Card;
let Suites = validCards.Suits;


let c2 = new Card("J", Suites.DIAMONDS);
console.log(c2.toString()); //9♣