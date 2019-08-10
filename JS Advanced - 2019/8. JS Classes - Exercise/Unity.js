class Rat {
    constructor(name) {
        this.name = name;
        this.uniteRats = [];
    }

    getRats() {
        return this.uniteRats;
    }

    unite(other) {
        if(other instanceof Rat) {
            this.uniteRats.push(other);
        }
    }

    toString() {
        return `${this.name}\n${this.uniteRats.length > 0 
            ? `##${this.uniteRats.join('##')}` 
            : ''}`;
    }
}


let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
firstRat.unite(new Rat("Sasho"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
