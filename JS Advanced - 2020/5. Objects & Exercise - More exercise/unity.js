class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    getRats() {
        return this.unitedRats;
    }

    unite(newRat) {
        if(newRat instanceof Rat)
            this.unitedRats.push(newRat);
    }

    toString() {
        const existRats = this.unitedRats.length === 0 ? '' 
            : `\n${this.unitedRats.map(r => r = `##${r.name}`).join('\n')}`;
        return `${this.name}` + existRats;
    }
}

let firstRat = new Rat('Peter');
console.log(firstRat.toString()); 

console.log(firstRat.getRats()); 

firstRat.unite(new Rat('George'));
firstRat.unite(new Rat('Alex'));
console.log(firstRat.getRats());
console.log(firstRat.toString());

