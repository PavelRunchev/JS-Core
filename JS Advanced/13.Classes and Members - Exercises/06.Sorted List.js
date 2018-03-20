class List{
    constructor(){
        this.array = [];
        this.size = 0;
    }

    add(el){
        this.array.push(el);
        this.array.sort((a, b) => a - b);
        this.size++;
    }

    remove(index){
        if(index >= 0 && index < this.array.length){
            this.array.splice(index, 1);
            this.array.sort((a, b) => a - b);
            this.size--;
        }
    }

    get(index){
        if(index >= 0 && index < this.array.length){
            return this.array[index];
        }
    }
}

let test = new List();
test.add(6);
test.add(5);
test.add(1);
test.add(18);
test.add(4);
console.log(test);
console.log(test.size);
console.log(test.get(1));
test.remove(0);
console.log(test);
