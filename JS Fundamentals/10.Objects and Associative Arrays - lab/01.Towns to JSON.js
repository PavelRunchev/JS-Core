function townsToJSON(array) {
    let towns = [];
    for (let element of array.slice(1)) {
       let [town, latitude, longitude] = element
           .split("|")
           .filter(t => t !== "")
           .map(t => t.trim());
       let object = {Town: town, Latitude:Number(latitude),
           Longitude:Number(longitude)};
       towns.push(object);
    }

    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
