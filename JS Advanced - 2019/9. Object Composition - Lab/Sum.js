function getModel() {
    let num1, num2, result;
    return {
        init: function(selector1, selector2, resultSelector) {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },

        add: function() {
            result.value = Number(num1.value) + Number(num2.value);
        },

        subtract: function() {
            result.value = Number(num1.value) - Number(num2.value);
        }
    };
}

let btnSum = document.getElementById('sumButton');
let btnSub = document.getElementById('subtractButton');
btnSum.addEventListener('click', sum);
btnSub.addEventListener('click', sub);

let obj = getModel();
function sum() {
    obj.init('#num1', '#num2', '#result');
    obj.add();
}

function sub() {
    obj.init('#num1', '#num2', '#result');
    obj.subtract();
}