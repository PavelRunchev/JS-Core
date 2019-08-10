function Elemelons() {
    class Melon {
        constructor(weight, melonSort) {
            if(this.constructor === Melon)
                throw new Error('Abstract class cannot be instantiated directly');

            this.weight = weight;
            this.melonSort = melonSort;
            this.element = '';
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Fire';
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Earth';
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Air';
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.melons = ['Water', 'Fire', 'Earth', 'Air'];
            this.index = 0;
            this.element = 'Water';
        }
        morph() {
            this.element = this.melons[++this.index % 4];
        }
    }

    return { Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon };
}

try{
    let e = Elemelons();
    //let w = new e.Melon(100, 'Test');
    let water = new e.Watermelon(12.5, 'Kingsize');
    //console.log(water.toString());
    let mm = new e.Melolemonmelon(12.5, 'King');
    console.log(mm.toString());
    mm.morph();
    console.log(mm.toString());
}
catch(err) {
    console.log(err.message);
}
