function chessboard(size){
    "use strict";
    let html = "<div class=\"chessboard\">\n";
    for (let row = 0; row < size; row++) {
        html += " <div>\n";
        for (let col = 0; col < size; col++) {
            let color = (row + col) % 2 == 0 ? "black" : "white";
            html += `  <span class=\"${color}"></span>\n`;
        }
        html += ' </div>\n';
    }
    html += "</div>\n";
    return html;
}

console.log(chessboard(4));