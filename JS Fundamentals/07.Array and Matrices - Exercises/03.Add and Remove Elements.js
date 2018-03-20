function addRemoveElementsFromArray(array){
    "use strict";
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if(command === 'add'){
            newArray.push(i + 1);
        }else if(command === 'remove'){
            newArray.pop();
        }
    }

    console.log(newArray.length > 0 ? newArray.join('\n') : "Empty");
}
addRemoveElementsFromArray(['add', 'add', 'remove', 'add', 'add']);
//1
//2
//3
//4
addRemoveElementsFromArray(['remove', 'remove', 'remove']);
//Empty
addRemoveElementsFromArray(['add', 'add', 'add', 'add']);
//1
//4
//5
