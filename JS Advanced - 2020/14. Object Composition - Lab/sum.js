function sum() {
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