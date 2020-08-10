const solve = (function() {
    let sum = 0;
    function add(num) {
        sum += num;
        add.toString = () => { return sum; };
        return add;
    }

    return { add };
})();

console.log(solve.add(1)(6)(-3));