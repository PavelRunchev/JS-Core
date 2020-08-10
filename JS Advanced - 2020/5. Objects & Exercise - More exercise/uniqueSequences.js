function uniqueSequences(inputArr) {
    let store = [];
    inputArr.forEach(e => {
        const arr = JSON.parse(e);
        filtredSequence(arr);
    });

    function filtredSequence(arr) {
        let isUnique = true;
        for (let s of store) {
            for (let num of s) {
                if(arr.includes(num)) {
                    isUnique = false;
                    break;
                }
            }

            if(!isUnique && arr.length !== s.length) {
                isUnique = true;
                break;
            } else if(!isUnique)
                break;
        }

        if(isUnique)
            store.push(arr);
    }

    function sortSequences(a, b) {
        return a.length - b.length;
    }

    store.sort(sortSequences)
        .map(s => s = s.sort((a,b) => b - a))
        .forEach(e => console.log(`[${e.join(', ')}]`));
}

uniqueSequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);

uniqueSequences([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
]);