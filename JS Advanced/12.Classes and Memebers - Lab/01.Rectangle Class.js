class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){
        return this.width * this.height;
    }
}

let rectangle = new Rectangle(4, 5, "red");




console.log(rectangle.height); //5
console.log(rectangle.color); //red
console.log(rectangle.calcArea()); //20