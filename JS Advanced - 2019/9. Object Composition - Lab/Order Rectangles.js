function OrderRectangles(inputArr) {
    let rectangles = [];

    class Rectangle{
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.area = this.area;
            this.compareTo = this.compareTo;
        }

        area() { return this.width * this.height; }


        compareTo(other) {
            let result = other.area() - this.area();
            if(result < 0)
                return -1;
            else if(result == 0)
                return other.width - this.width;
            
            return 1;
        }
    }

    for (let [width, height] of inputArr) {
        let rect = new Rectangle(width, height);
        rectangles.push(rect);
    }

    rectangles.sort((a, b) => a.compareTo(b));
    return rectangles;
}

console.log(OrderRectangles([[10,5], [3,20], [5,12]]));
