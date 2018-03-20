function classHierarchy() {
    class Figure{
        constructor(){
            if(this.constructor === Figure){
                throw new TypeError("This is abstact class!");
            }
        }

        get area(){
            switch (this.constructor){
                case Circle:
                    return Math.PI * this.radius * this.radius;
                case Rectangle:
                    return this.width * this.height;
            }
        }

        toString(){
            let className = this.constructor.name;
            let properties = Object.getOwnPropertyNames(this);
            return className + ' - ' + properties.map(p => `${p}: ${this[p]}`).join(", ");
        }
    }

    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }
    }

    class Rectangle extends Figure{
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }
    }

    return {Figure, Circle, Rectangle};
}

let obj = classHierarchy();
let Circle = obj.Circle;
let Rectangle = obj.Rectangle;

let c1 = new Circle(5);
console.log(c1.radius);
console.log(c1.area);
console.log(c1.toString());

let r1 = new Rectangle(4, 5);
console.log(r1.width);
console.log(r1.area);
console.log(r1.toString());