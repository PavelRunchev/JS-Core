function orderRectangles(inputArr) {
    let rectangles = [];
    inputArr.forEach(e => {
        const [width, height] = e;
        let newRectangle = {
            width,
            height,
            area: function() {
                return this.width * this.height;
            },

            compareTo: function(other) {
                const result = other.area() - this.area();
                if(result > 0)
                    return 1;
                if(result === 0)
                    return other.width - this.width;

                return -1;
            }
        };

        rectangles.push(newRectangle);
    });

    return rectangles.sort((a,b) => a.compareTo(b));
}

console.log(orderRectangles([[10,5],[5,12]]));