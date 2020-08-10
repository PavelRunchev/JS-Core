function argumentInfo() {
    let data = {};
    for (let i = 0; i < arguments.length; i++) {
        console.log(`${typeof arguments[i]}: ${arguments[i]}`);
        saveTypes(typeof arguments[i], arguments[i]);
    }

    function saveTypes(type, value) {
        if(type === 'object' && value['name'] !== undefined) {
            const innerType = typeof value['name'];
            if(!data.hasOwnProperty(innerType))
                data[innerType] = [];
            data[innerType].push('');
        } else {
            if(!data.hasOwnProperty(type))
                data[type] = [];
            data[type].push(value);
        }
    }

    //print counts values
    Object.entries(data)
        .sort((a,b) => b[1].length - a[1].length)
        .map(v => v = `${v[0]} = ${v[1].length}`)
        .forEach(e => console.log(e));
}

//argumentInfo(42, function () { console.log('Hello world!'); }, 'dog', 'cat');
//argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo({name: 'bob'}, 3.333, 9.999);