class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a,b) => a - b);
        this.size = this.list.length;
    }

    remove(index) {
        this.validation(index); 
        const removedElement = this.list.splice(index, 1);
        this.size = this.list.length;
    }

    get(index) {
        this.validation(index);
        return this.list[index];
    }

    validation(index) {
        if(index < 0 || index >= this.size) 
            throw new Error('invalid index!'); 
    }
}

let list = new List();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.hasOwnProperty('size'));

