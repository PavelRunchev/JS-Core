function solve(){
    "use strict";
    let element1, element2, result;
    return{
        init: function (selector1, selector2, resultSelector) {
            element1 = $(selector1);
            element2 = $(selector2);
            result = $(resultSelector);
        },
        add: function () {
            result.val(+(element1.val()) + +(element2.val()));
        },
        subtract: function () {
            result.val(+(element1.val()) - +(element2.val()));
        },
    };
}

let obj = solve();
function sum() {
    obj.init('#num1', '#num2', '#result');
    obj.add();
}

function sub() {
    obj.init('#num1', '#num2', '#result');
    obj.subtract();
}
