function usernames(inputArr) {
    let store = [];
    inputArr.forEach(e => store.push(e));

    function sortUsername(a, b) {
        const result = a.length - b.length;
        if(result === 0)
            return a.localeCompare(b);
        return result;
    }

    return Array
        .from(new Set(store))
        .sort(sortUsername)
        .join('\n');
}

console.log(usernames(['Ashton','Kutcher','Ariel','Lilly','Keyden','Aizen','Billy','Braston']));

console.log(usernames(['Denise','Ignatius','Iris','Isacc','Indie','Dean','Donatello','Enfuego','Benjamin','Biser','Bounty','Renard','Rot']));