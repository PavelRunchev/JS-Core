function table(array){

    let html = "<table>\n";
    for (let object of array) {
        html += "\t<tr>\n";
        let item = JSON.parse(object);
        for (let key in item) {
            if(item.hasOwnProperty(key)){
                html += `\t\t<td>${item[key]}</td>\n`;
            }
        }
        html += "\t<tr>\n";
    }

    html += "</table>\n";
    console.log(html);
}

table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);