function hierarchy() {
    class Figure {
        constructor(units) {
            this.units = units || 'cm';
        }

        changeUnits(value) {
            this.units = value;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.changeDimension() * this.changeDimension();
        }

        changeDimension() {
            if(this.units === 'mm') 
                return this.radius * 10;
            if(this.units === 'm')
                return this.radius / 100;
            return this.radius;
        }

        toString() {
            this.changeDimension();
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.changeDimension()}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.changeDimension(this.width) * this.changeDimension(this.height);
        }

        changeDimension(value) {
            if(this.units === 'mm') 
                return value * 10;
            if(this.units === 'm')
                return value / 100;
            return value;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.changeDimension(this.width)}, height: ${this.changeDimension(this.height)}`;
        }
    }

    return { Figure, Circle, Rectangle };
}

const h = hierarchy();


let c = new h.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new h.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50

