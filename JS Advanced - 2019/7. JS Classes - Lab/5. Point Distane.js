class Point {
    constructor(x, y){
        this.X = x;
        this.Y = y;
    }
    
    static distance(p1, p2) {
        return Math.sqrt(Math.pow(p1.X - p2.X, 2) + Math.pow(p1.Y - p2.Y, 2));
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
