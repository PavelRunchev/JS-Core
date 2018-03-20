function circleArea(r){
    "use strict";
    class Circle{
        constructor(r){
            this.r = r;
        }

        get area(){
            return this.calcArea();
        }

        calcArea(){
            return (this.r ** 2) * Math.PI;
        }
    }
    const circle = new Circle(r);
    console.log(circle.area);
    console.log(circle.area.toFixed(2));
}



circleArea(5); //78.53981633974483
//78.54