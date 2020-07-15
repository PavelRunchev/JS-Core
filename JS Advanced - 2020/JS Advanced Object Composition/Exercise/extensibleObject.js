function extensibleObject() {
    let myObj = { 
        extend: function (template) {
            for (let key in template) {
                if (typeof(template[key]) === 'function')
                    myObj.__proto__[key] = template[key];
                else
                    myObj[key] = template[key];
            }   
        }
    };

    return myObj;
}

var template = {
    extensionMethod: function () {
        console.log('From extension method');
    }
};

var testObject = extensibleObject();
testObject.extend(template);
console.log(Object.getPrototypeOf(testObject).hasOwnProperty('extensionMethod'));
// true