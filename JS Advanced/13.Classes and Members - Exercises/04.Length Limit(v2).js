class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = Number(length);
    }

    get innerLength(){
        return this._innerLength;
    }

    set innerLength(length) {
        this._innerLength = length < 0 ? 0 : length;
    }

    increase(len){
        this.innerLength += len;
    }

    decrease(len){
        this.innerLength -= len;
    }

    toString() {
        return this.innerLength < this.innerString.length
            ? this.innerString.substring(0, this.innerLength) + "..."
            : this.innerString;
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...
console.log(test.innerLength); //2
test.decrease(5);
console.log(test.toString()); //...
console.log(test.innerLength); //0
test.increase(4);
console.log(test.toString()); //Test
console.log(test.innerLength); //4