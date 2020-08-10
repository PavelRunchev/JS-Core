class Stringer {
    constructor(string,length) {
        this.string = string;
        this.length = length;
        this.innerString = string;
        this.innerLength = length;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        this.innerLength -= value;
        if(this.innerLength < 0)
            this.innerLength = 0;
    }

    toString() {
        let doubleString = this.string;
        let outputString = doubleString.substring(0, this.innerLength);
        if(this.string.length > this.innerLength)
            outputString = outputString + '...';
        return outputString;
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
