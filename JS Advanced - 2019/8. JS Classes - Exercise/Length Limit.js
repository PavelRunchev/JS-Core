class Stringer {
    constructor(str, length) {
        this.innerString = str;
        this.innerLength = length;
    }

    increase(len) {
        this.innerLength += len;
    }

    decrease(len) {
        if(len < 0) {
            this.innerLength = 0;
        }
        else {
            this.innerLength -= len;
        }

        if(this.innerLength < 0)
            this.innerLength = 0;
    }

    toString() {
        if(this.innerString.length > this.innerLength) {
            let result = this.innerString.substring(0, this.innerLength);
            return `${result}...`;
        }
        else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
