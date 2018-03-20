function templateFormat(array){
    "use strict";
    let hml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    hml += "<quiz>\n";
    for (let i = 0; i < array.length; i+= 2) {
        hml += "  <question>\n";
        hml += `    ${array[i]}\n`;
        hml += "  </question>\n";
        hml += "  <answer>\n";
        hml += `    ${array[i +1]}\n`;
        hml += "  </answer>\n";
    }
    hml += "</quiz>\n";
    return hml;
}


console.log(templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]));