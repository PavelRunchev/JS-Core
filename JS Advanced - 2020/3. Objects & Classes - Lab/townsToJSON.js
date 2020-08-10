function towns(inptutTowns) {
    const headings = inptutTowns[0].split(',')[0];
    const properties = headings.split('|')
        .map(e => e = e.trim())
        .filter(e => e !== '');
    const townName = properties[0];
    const latitude = properties[1];
    const longitude = properties[2];

    const arrayFromTowns = [];
    for (let i = 1; i < inptutTowns.length; i++) {
        const values = inptutTowns[i].split('|')
            .map(e => e = e.trim())
            .filter(e => e !== '');
        const newObject = {};
        newObject[townName] = values[0];
        newObject[latitude] = Number(parseFloat(values[1]).toFixed(2));
        newObject[longitude] = Number(parseFloat(values[2]).toFixed(2));
        arrayFromTowns.push(newObject);
    }
    
    return JSON.stringify(arrayFromTowns);
}

console.log(towns(['| Town | Latitude | Longitude |','| Sofia | 42.696552 | 23.32601 |','| Beijing | 39.913818 | 116.363625 |']));

console.log('----------');

console.log(towns(['| Town | Latitude | Longitude |','| Veliko Turnovo | 43.0757 | 25.6172 |','| Monatevideo | 34.50 | 56.11 |']));