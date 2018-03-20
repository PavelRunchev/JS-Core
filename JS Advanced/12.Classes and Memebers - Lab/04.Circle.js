class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get area(){
        return Math.PI * this.radius * this.radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(diameter){
        this.radius = diameter / 2;
    }
}

let c = new Circle(2);
console.log(c.radius);
console.log(c.diameter);
console.log(c.area);
c.diameter = 1.6;
console.log(c.radius);
console.log(c.diameter);
console.log(c.area);