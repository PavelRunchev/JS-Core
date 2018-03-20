function assignProperties(array){
    "use strict";
    let [prop1, valuq1, prop2, value2, prop3, value3] = array;
    let object = {};
    object[prop1] = valuq1;
    object[prop2] = value2;
    object[prop3] = value3;
    return object;
}

console.log(assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));

