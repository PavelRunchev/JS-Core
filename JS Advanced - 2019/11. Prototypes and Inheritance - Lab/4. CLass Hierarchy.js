function hierarchy() {
    class Figure {
        constructor() {
            if(this.constructor === Figure)
                throw new Error('Abstract class Figure cannot be instances!')
        }

        area() {

        }

        toString() {

        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${this.constructor.name} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return { Figure, Circle, Rectangle };
}

try {
    let f = hierarchy();
    //let ff = new f.Figure('Pesho');
    let c = new f.Circle(5);
    console.log(c.area());
    console.log(c.toString());

    let r = new f.Rectangle(3, 4);
    console.log(r.area);
    console.log(r.toString());
}
catch(err) {
    console.log(err.message);
}
