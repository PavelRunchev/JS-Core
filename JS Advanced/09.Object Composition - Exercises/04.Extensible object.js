function extensibleObject() {
    let myObject = {
        extend: function (template) {
            for(let key in template){
                if(template.hasOwnProperty(key)){
                    let element = template[key];
                    if(typeof element === 'function'){
                        myObject.__proto__[key] = element;

                    }else{
                        myObject[key] = element;
                    }
                }
            }
        }
    };

    return myObject;
}

let myObj = extensibleObject();
let template = {
    extensionMethod: function () {
        return 'Didka'
    },
    extensionProp: 'Darinka'
};
myObj.extend(template);
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));
