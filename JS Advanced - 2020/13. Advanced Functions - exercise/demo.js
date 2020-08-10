// global scope
var e = 10;
function sum(a) {
    return function(b) {
        return function(c) {
            // outer functions scope
            return function(d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}
//variant 1
console.log(sum(1)(2)(3)(4)); // log 20

//variant2
var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3); //log 20