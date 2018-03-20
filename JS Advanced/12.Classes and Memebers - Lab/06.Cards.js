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
            let noFindSuit = true;
            for(let key in Suits){
                if(Suits[key] === s){
                    this._suit = s;
                    noFindSuit = false;
                    break;
                }
            }

            if(noFindSuit){
                throw new Error("Invalid card suite: " + s);
            }
        }

        toString(){
            return this.face + this.suit;
        }
    }

    return {Suits, Card };
})();

let Card = validCards.Card;
let Suites = validCards.Suits;


let c2 = new Card("9", Suites.CLUBS);
console.log(c2.toString()); //9♣

