function cars(input) {

    let executor = (function() {
        let obj = {};
        function create(args) {
            if(args.length > 1){
                let parent = args[2];
                let newObj = args[0];
                obj[newObj] = Object.create(obj[parent]);
            }else{
                obj[args[0]] = {};
            }
        }
        function set(args) {
            let object = args[0];
            let property = args[1];
            obj[object][property] = args[2];
        }
        function print(args) {
            let printResult = [];
            let currentObj = args[0];
            for(let key in obj[currentObj]){
                printResult.push(key + ":" + obj[currentObj][key]);
            }

            console.log(printResult.join(", "));
        }

        return {create, set, print};
    })();

    for(let element of input){
        let args = element.split(" ");
        let command = args.shift();
        executor[command](args);
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);