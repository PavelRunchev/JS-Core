function classesHierarchy(){
    class Figure{
        constructor(){
            if(this.constructor === Figure){
                throw new Error("This is abstract class!");
            }
        }
    }

    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }

        get area(){
            return Math.PI * this.radius * this.radius;
        }

        toString(){
            let type = this.constructor.name;
            return `${type} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }

        get area(){
            return this.width * this.height;
        }

        toString(){
            let type = this.constructor.name;
            return `${type} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {Figure, Circle, Rectangle};
}

let obj = classesHierarchy();
let Figure = obj.Figure;
let Circle = obj.Circle;
let Rectangle = obj.Rectangle;

let c = new Circle(5);
console.log(c.toString()); //Circle - radius: 5
console.log(c.area); //78.53981633974483

let r = new Rectangle(3, 4);
console.log(r.area);
console.log(r.toString());