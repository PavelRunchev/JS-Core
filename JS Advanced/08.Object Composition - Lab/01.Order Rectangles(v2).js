function orderRectangles(input){
    "use strict";
    let rectangles = [];
    function create(width, height) {
        let rectangle = {
            width: width,
            height: height,
            area: function () {
                return rectangle.width * rectangle.height;
            },
            compareTo: function (other) {
                let diff = other.area() - rectangle.area();
                return diff || other.width - rectangle.width;
            }
        };
        return rectangle;
    }

    for(let i = 0; i < input.length; i++){
        let rect = create(input[i][0], input[i][1]);
        rectangles.push(rect);
    }

    function sortedRectangles(a, b){
        return a.compareTo(b);
    }
    return rectangles.sort(sortedRectangles);
}

console.log(orderRectangles([[1,20],[20,1],[5,3],[5,3]]));
