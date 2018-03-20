function escaping(array){
    let html = "<ul>\n";
    for (let element of array) {
        html += "  <li>" + escapeChar(element) + "</li>\n";
    }

    html += "</ul>\n";
    console.log(html);

    function escapeChar(element){
        return element.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

escaping(['<b>unescaped text</b>', 'normal text']);