function fromJSONToHTMLTable(input) {
    let array = JSON.parse(input);
    let tableArr = ['<table>'];

    //Get all keys from object with index 0 in array and give to method makeRow (all th)!
    tableArr.push(makeRow(Object.keys(array[0]), true));
    //Get all values from obj to Array and give to method makeRow (all td)!
    array.forEach(obj => tableArr.push(makeRow(Object.values(obj), false)));

    function makeRow(arr, isTitle) {
        let trArray = ['<tr>'];
        for (let item of arr) {
            if(isTitle) trArray.push(`<th>${escapeHtml(item.toString())}</th>`);
            else trArray.push(`<td>${escapeHtml(item.toString())}</td>`);
        };
        trArray.push('</tr>');
        return trArray.join('');
    }

    //value is must be type String!!!
    //test 2, 4
    function escapeHtml(value) {
        return value.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    
    tableArr.push('</table>');
    return tableArr.join('\n');
}

console.log(fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));

console.log('----');

console.log(fromJSONToHTMLTable(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']));
