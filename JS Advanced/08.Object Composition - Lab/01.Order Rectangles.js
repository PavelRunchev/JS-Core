function orderRectangles(input) {
    function create(width, height) {
        return {
            width: width,
            height: height,
            area: function () {
                return this.width * this.height
            },
            compareTo: function (other) {
                let diff = other.area() - this.area();
                return diff !== 0 ? diff : other.width - this.width;
            }
        };

    }
    let array = [];
    for(let el of input){
        let [width, height] = el;
        let rect = create(width, height);
        array.push(rect);
    }

    return array.sort((a, b) => a.compareTo(b));
}

console.log(orderRectangles([[10, 5], [3, 20], [5, 12]]));
console.log(orderRectangles([[1,20],[20,1],[5,3],[5,3]]));