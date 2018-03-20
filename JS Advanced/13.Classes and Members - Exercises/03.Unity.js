class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

   unite(other){
        if(other instanceof Rat){
            this.unitedRats.push(other);
        }
   }

    getRats(){
        return this.unitedRats;
    }

   toString(){
        let printRats = `${this.name}\n`;
        this.unitedRats.forEach(rat => printRats += `##${rat}\n`);
        return printRats;
   }
}

let rat = new Rat("Viktor");
console.log(rat.toString());



