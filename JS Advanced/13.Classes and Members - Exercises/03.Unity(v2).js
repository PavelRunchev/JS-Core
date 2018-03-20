
class Rat {
    constructor(name){
        this.name = name;
        this.rats = [];
    }


    unite(otherRat){
        if(otherRat instanceof Rat){
            this.rats.push(otherRat);
        }
    }

    getRats(){
        return this.rats;
    }

    toString(){
        let printRats = this.name + '\n';
        for(let rat of this.rats){
            printRats += `##${rat}\n`
        }
        return printRats.trim();
    }
}

let rat = new Rat("Pesho");
console.log(rat.toString());
console.log(rat.getRats());

rat.unite(new Rat("Gosho"));
rat.unite(new Rat("Sasho"));

console.log(rat.toString());