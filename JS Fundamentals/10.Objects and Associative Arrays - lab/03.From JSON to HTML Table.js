function arrayToHTML(input) {
    let array = JSON.parse(input);
    let html = "<table>\n";
    html += "  <tr>";
    let keys = Object.keys(array[0]);
    for (let key of keys) {
        html += `<th>${escapeChar(key)}</th>`;
    }
    html += "</tr>\n";

    for (let object of array) {
        html += "  <tr>";
        for (let i = 0; i < keys.length; i++) {
            html += `<td>${escapeChar(object[keys[i]] + '')}</td>`;
        }
        html += "</tr>\n";
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

arrayToHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');

arrayToHTML("[{\"Name\":\"Pesho <div>-a\",\"Age\":20,\"City\":\"Sofia\"},{\"Name\":\"Gosho\",\"Age\":18,\"City\":\"Plovdiv\"},{\"Name\":\"Angel\",\"Age\":18,\"City\":\"Veliko Tarnovo\"}]");