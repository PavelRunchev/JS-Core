function countWordsAText(inputArr) {
    let store = {};
    const arr = inputArr[0]
        //splited by all text symbols!
        .split(/[\.,'! +()*\/:?-]/g)
        .filter(a => a !== '');

    arr.forEach(e => {
        if(!store.hasOwnProperty(e))
            store[e] = 0;
        store[e] += 1;
    });

    return JSON.stringify(store);
}

console.log(countWordsAText(['Far too slow, you\'re far too slow.']));
console.log(countWordsAText(['JS devs use Node.js for server-side JS?-- JS for devs!']));