function composeTag(array) {
    let location = array[0];
    let text = array[1];
    return `<img src="${location}" alt="${text}">`;
}

console.log(composeTag(['smiley.gif', 'Smiley Face']));