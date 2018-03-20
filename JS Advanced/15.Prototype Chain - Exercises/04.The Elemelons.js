function elemons(){
    class Melon{
        constructor(weight, melonSort){
            if(new.target === Melon){
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
            this.element = "";
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex(){
            return this._elementIndex;
        }

        toString(){
            let printElemelon = `Element: ${this.element}\n`;
            printElemelon += `Sort: ${this.melonSort}\n`;
            printElemelon += `Element Index: ${this._elementIndex}`;
            return printElemelon;
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Water";
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Fire";
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Earth";
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Air";
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Water";
            this.elements = ["Fire", "Earth", "Air", "Water"];
            this.index = 0;
        }

        morph(){
            // 4 is this.elements.length! ["Fire", "Earth", "Air", "Water"]
            this.element = this.elements[this.index++ % 4];
        }
    }

    return{Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon}
}


let watermelon = new Earthmelon(12.5, "Kingsize");
console.log(watermelon.toString());

let melolemon1 = new Melolemonmelon(55, "Dragon");
melolemon1.morph();
melolemon1.morph();
console.log(melolemon1.toString());
let melolemon2 = new Melolemonmelon(33, "Graaa");
melolemon2.morph();
melolemon2.morph();
melolemon2.morph();
console.log(melolemon2.toString());
