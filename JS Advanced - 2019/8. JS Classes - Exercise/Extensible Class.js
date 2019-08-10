let obj = (function() {
    let id = 0;
    return class Extensible {
        constructor() {
            this.id = id++;;
        }
    
        extend(template) {
            for(let prop in template){
                if(typeof template[prop] === 'function'){
                    Extensible.prototype[prop] = template[prop];
                }else{
                    this[prop] = template[prop];
                }
            }
        }
    }
})();


let Extensible = obj.Extensible;
let class1 = new Extensible();
let class2 = new Extensible();
let class3 = new Extensible();

console.log(class1.id); //0
console.log(class2.id); //1
console.log(class3.id); //2

template= {
    extensionMethod: function () {},
    extensionProperty: 'someString'
};

let class4 = new Extensible();
class4.extend(template);
console.log(class4); //Extensible { id: 3, extensionProperty: 'someString' }

template1 = {
    __proto__: {
        extend: function () {
        }
    },
    id: 0};
class1.extend(template1);
console.log(class1.__proto__); //Extensible { extensionMethod: [Function: extensionMethod] }


var template = {
    methodA: function () {
        return 'a';
    }
};

var obj1 = new Extensible();
obj1.extend(template);
console.log(obj1.prototype);