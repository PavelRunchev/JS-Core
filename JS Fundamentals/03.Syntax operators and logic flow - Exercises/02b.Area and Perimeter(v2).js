function rectangle(sideA, sideB){
    "use strict";
    class Rectangle{
        constructor(width, height){
            this.width = width;
            this.height = height;
        }

        //Formula for Area: S = A * B
        area(){
            return this.calcArea();
        }

        //Method
        calcArea(){
            return this.width * this.height;
        }

        //Formula for Perimeter: P = (2 * A) + (2 * B)
        perimeter(){
            return this.calcPerimeter();
        }

        //method
        calcPerimeter(){
            return (2 * this.width) + (2 * this.height);
        }
    }

    let rectangle = new Rectangle(sideA, sideB);
    console.log(rectangle.area());
    console.log(rectangle.perimeter());
}

//output: S = 7.85
//output: p = 11.28
rectangle(2.5, 3.14);