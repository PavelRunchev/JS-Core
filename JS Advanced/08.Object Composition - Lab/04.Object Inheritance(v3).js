function solve(input) {
    let objectsStore = new Map();

    let inheritance = (function () {
        function create(name, key, parent) {
            if(parent === undefined){
                objectsStore.set(name, {});
            }else {
                objectsStore.set(name, Object.create(objectsStore.get(parent)));
            }
        }

        function set(objectName, key, value) {
            objectsStore.get(objectName)[key] = value;
        }

        function print(name) {
            let arr = [];
            let currentObj = objectsStore.get(name);
            for(let prop in currentObj){
                arr.push(prop + ":" + currentObj[prop]);
            }

            console.log(arr.join(", "));
        }

        return {create, set, print}
    })();

    for(let el of input){
        let tokens = el.split(' ');
        let command = tokens.shift();
        let [name, key, value] = tokens;
        inheritance[command](name, key, value);
    }
}



solve(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2']);