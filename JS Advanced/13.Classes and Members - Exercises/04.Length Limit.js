class Stringer{
    constructor(string, length){
        this.string = string;
        this.length = length;
        this.innerString = string;
        this.innerLength = length;
    }

    increase(len){
        this.innerLength = this.innerLength + len;
    }

    decrease(len){
        this.innerLength = this.innerLength - len;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    toString(){
        if(this.string.length > this.innerLength){
            this.innerString = this.string.substring(0, this.innerLength) + "...";
            return this.innerString;
        }else{
            return this.string;
        }
    }
}

let test = new Stringer("Viktor", 6);
console.log(test.toString());

test.decrease(9);
console.log(test.innerLength);
