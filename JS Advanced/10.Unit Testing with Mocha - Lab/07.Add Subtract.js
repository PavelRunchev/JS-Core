createCalculator = function () {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
};



let result = createCalculator();
result.add(10.1);
result.subtract(5.5);
result.add(1.3);
//console.log(result.get()); // -2


module.exports = createCalculator;