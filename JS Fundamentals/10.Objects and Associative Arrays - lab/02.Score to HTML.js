function scoreToHTML(input) {
    let scores = JSON.parse(input);
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";
    for (let sco of scores) {
        html += `  <tr><td>${escapeChar(sco['name'])}</td><td>${Number(sco['score'])}</td></tr>\n`;
    }

    html += "</table>";
    console.log(html);

    function escapeChar(element){
        return element.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');

scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');
