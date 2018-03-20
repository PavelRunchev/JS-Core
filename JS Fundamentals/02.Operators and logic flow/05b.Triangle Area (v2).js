function triangleArea(a, b, c){
    "use strict";
    class Triangle{
        constructor(a, b, c){
            this.a = a;
            this.b = b;
            this.c = c;
        }
        get area(){
            return this.calcArea();
        }

        //Method
        calcArea(){
            let p = (a + b + c) / 2;
            return Math.sqrt(p * (p - a) * (p - b) * (p - c));
        }
    }

    const triangle = new Triangle(a, b, c);
    console.log(triangle.area);
}

triangleArea(2, 3.5, 4);