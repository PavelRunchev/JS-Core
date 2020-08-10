function Spy(target, method) {
    let originalFunction = target[method];

    let result = { count: 0 };

    target[method] = function() {
        result.count++;
        return originalFunction.apply(this, arguments);
    }

    return result;
}

// test1
let spy1 = Spy(console,"log");
console.log(spy1); // { count: 1 }
console.log(spy1); // { count: 2 }
console.log(spy1); // { count: 3 }

//test 2
let obj = {
    method:()=>"invoked"
}
let spy = Spy(obj,"method");
obj.method();
obj.method();
obj.method();
console.log(spy) // { count: 3 }

