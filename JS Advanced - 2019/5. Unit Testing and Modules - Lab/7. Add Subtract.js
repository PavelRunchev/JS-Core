function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

let c = createCalculator();
c.add(1.3);
c.add(1.3);
c.subtract(1.3);
console.log(c.get());

module.exports = createCalculator;