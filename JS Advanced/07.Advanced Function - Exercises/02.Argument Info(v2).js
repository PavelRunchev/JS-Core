function argumentInfo() {
    let objTypeCount = {};
    for(let i = 0; i < arguments.length; i++){

        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);

        //add in Object
        if(!objTypeCount.hasOwnProperty(type)){
            if(type === 'object' && obj['name'] !== undefined){
                type = typeof obj['name'];
                objTypeCount[type] = 1;
            }else{
                objTypeCount[type] = 1;
            }
        }else{
            objTypeCount[type]++;
        }
    }

    let arrType = [];
    for(let element in objTypeCount){
        arrType.push([element, objTypeCount[element]]);
    }

    //sorted Array in descending order by Count Types
    let sortedByCountType = arrType.sort((a, b) => b[1] - a[1]);
    for(let element of sortedByCountType){
        console.log(element[0] + " = " + element[1]);
    }
}
//input
argumentInfo({name: 'bob'}, 3.333, 9.999);