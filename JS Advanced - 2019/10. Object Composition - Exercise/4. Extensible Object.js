function extensibleObject() {
    return myObj = {
        extend: function (template) {
            for (let key in template) {        
                if(typeof(template[key]) === 'function')
                    myObj.__proto__[key] = template[key];
                else
                    myObj[key] = template[key];
            }
        }
    }
}

