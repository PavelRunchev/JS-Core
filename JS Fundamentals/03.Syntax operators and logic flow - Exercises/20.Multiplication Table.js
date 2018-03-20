function multiplicationTable(n){
    "use strict";
    let line = "<table border='1'>\n";
    for (let row = 0; row <= n; row++) {
        if(row === 0){
            line += ` <tr><th>x</th>`;
        }else{
            line += ` <tr><th>${row}</th>`;
        }

        for (let col = 1; col <= n; col++) {
            if(row === 0){
                line += `<th>${col * (row + 1)}</th>`;
            }else {
                line += `<td>${col * row}</td>`;
            }
        }
        line += "</tr>\n";
    }
    line += "</table>\n";
    return line;
}

console.log(multiplicationTable(5));