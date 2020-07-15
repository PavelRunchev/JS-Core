class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(obj) {
        let newObj = Object.create(this);
        newObj.value = obj instanceof Hex 
            ? this.value + obj.value
            : this.value + obj;
        return newObj;
    }

    minus(obj) {
        let newObj = Object.create(this);
        newObj.value = obj instanceof Hex 
        ? this.value - obj.value
        : this.value - obj;
        return newObj;
    }

    parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
let a = new Hex(10);
let b = 5;
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('FF'));