function argumentInfo() {
    let argumentsData = new Map();
    for(let i = 0; i < arguments.length; i++){

        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);

        //add in Map
        if(!argumentsData.has(type)){
            if(type === 'object' && obj['name'] !== undefined){
                type = typeof obj['name'];
                argumentsData.set(type, 1);
            }else{
                argumentsData.set(type, 1);
            }

        }else{
            let currentType = argumentsData.get(type);
            argumentsData.set(type, currentType + 1);
        }
    }

    //sorted Map in descending order by Count Types
    let sort = Array.from(argumentsData.entries()).sort((a, b) => b[1] - a[1]);
    for(let element of sort){
        console.log(element[0] + " = " + element[1]);
    }
}
//input
argumentInfo(42, 'cat', [], undefined);

//output
//number: 42
//string: cat
//object:
//undefined: undefined
//number = 1
//string = 1
//object = 1
//undefined = 1