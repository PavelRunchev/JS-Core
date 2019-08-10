class List {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }

    add(el) {
        if(typeof(el) !== 'number')
            throw new TypeError('The element did not number');

        this.numbers.push(el);
        this.sortedCollection();
        this.size++;
    }

    remove(index) {
        if(index < 0 || index > this.size) {
            throw new TypeError('The index did not valid!');
        }

        if(this.size > 0) {
            delete this.numbers[index];
            this.sortedCollection();
            this.size--;
        }      
    }

    get(index) {
        if(index < 0 || index > this.size) {
            throw new TypeError('The index did not valid!');
        }

        return this.numbers[index];
    }

    sortedCollection() {
        this.numbers = this.numbers.sort((a, b) => a - b);
    }

    toString() {
        return this.numbers.join(' ');
    }
}

let list = new List();
list.add(7);
list.add(6);
list.add(5);
console.log(list.toString());
console.log(list.get(1)); 
list.remove(1);
console.log(list.size);
console.log(list.get(1));
console.log(list.toString());
