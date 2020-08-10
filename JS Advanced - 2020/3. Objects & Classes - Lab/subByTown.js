function sub(arr) {
    let objectFromTowns = {};
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i];
        const income = Number(arr[i + 1]);
        if(!objectFromTowns.hasOwnProperty(name))
            objectFromTowns[name] = 0;
        objectFromTowns[name] += income;
        i++;
    } 


    return JSON.stringify(objectFromTowns);
}

console.log(sub(['Sofia','20','Varna','3','Sofia','5','Varna','4']));

console.log(sub(['Sofia','20','Varna','3','sofia','5','varna','4']));