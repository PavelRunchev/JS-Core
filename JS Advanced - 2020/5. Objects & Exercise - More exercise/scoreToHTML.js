function scoreToHTML(inputJSON) {
    const arr = JSON.parse(inputJSON);
    let result = '<table>' + 
        '\n  <tr><th>name</th><th>score</th></tr>';
    arr.forEach(e => {
        result += `\n  <tr><td>${escapeHTML(e.name)}</td><td>${escapeHTML(e.score.toString())}</td></tr>`;
    });

    function escapeHTML(value) {
        return value.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    return result + '\n</table>';
}

console.log(scoreToHTML([
    `[{"name":"Pesho","score":479},
    {"name":"Gosho","score":205}]`
]));

console.log(scoreToHTML([
    `[{"name":"Pesho & Kiro","score":479 },
    {"name":"Gosho, Maria & Viki","score":205 }]`
]));