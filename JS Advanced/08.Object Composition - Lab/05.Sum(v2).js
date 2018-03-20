function getModel() {
    let num1, num2, result;
    function init(selector1, selector2, resultSel) {
        num1 = $(selector1);
        num2 = $(selector2);
        result = $(resultSel);
    }

    function add() {
        result.val(Number(num1.val()) + Number(num2.val()));
    }

    function subtract() {
        result.val(Number(num1.val()) - Number(num2.val()));
    }

    return{
        init,
        add,
        subtract
    };
}