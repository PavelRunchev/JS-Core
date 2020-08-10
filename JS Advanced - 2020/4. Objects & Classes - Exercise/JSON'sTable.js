function JSONTable(inputArr) {
    let outputArr = ['<table>'];
    inputArr.forEach(el => outputArr.push(makeTrRow(Object.values(JSON.parse(el)))));
    outputArr.push(['</table>']);

    function makeTrRow(arr) {
        let tr = ['\t<tr>'];
        for (const el of arr) {
            tr.push(`\t\t<td>${escapeHTML(el.toString())}</td>`);
        }

        tr.push('\t</tr>');
        return tr.join('\n');
    }

    function escapeHTML(value) {
        return value.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    return outputArr.join('\n');
}

console.log(JSONTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
));