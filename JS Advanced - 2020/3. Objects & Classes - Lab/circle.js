class Circle {
    constructor(radius) {
        this.radius = radius;
        this._diameter = this.radius * 2;
    }

    get diameter() {
        return this._diameter;
    }

    set diameter(value) {
        this._diameter = value;
        this.radius = value / 2;
    }

    get area() {
        return (Math.pow(this.radius, 2)) * Math.PI;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
