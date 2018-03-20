function mapSort(map, sortFn) {
    let sortedMap = new Map();

    let sortArray = Array.from(map).sort(sortFn);
    for(let key of sortArray){
        sortedMap.set(key[0], map.get(key[0]));
    }

    if(sortFn === undefined){
        sortFn = function () {
            return (a, b) => a[0].toString().localeCompare(b[0].toString());
        }
    }

    return sortedMap;
}

module.exports = mapSort;

