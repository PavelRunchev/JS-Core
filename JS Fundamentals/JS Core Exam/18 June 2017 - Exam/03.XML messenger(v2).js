function xmlMessenger(message){
    let pattern = /^<message((?:\s[a-z]+="[A-Za-z0-9. ]+")+)>((?:.|\n)+)<\/message>$/;
    let tokens = pattern.exec(message);
    if(!tokens){
        console.log("Invalid message format");
        return;
    }

    let patternTo = /\s+to="([A-Za-z0-9 .]+)"\s*>*/g;
    let patternFrom = /\s+from="([A-Za-z0-9 .]+)"\s*>*/g;
    let matchedTo = patternTo.exec(tokens[0]);
    let matchedFrom = patternFrom.exec(tokens[0]);
    let sender = "";
    let recipient = "";
    if(matchedTo !== null && matchedFrom !== null){
        recipient = matchedTo[1];
        sender = matchedFrom[1];
    }else{
        console.log("Missing attributes");
        return;
    }

    let body = tokens[2].split('\n');
    let html = "<article>\n";
    html += `  <div>From: <span class="sender">${sender}</span></div>\n`;
    html += `  <div>To: <span class="recipient">${recipient}</span></div>\n`;
    html += "  <div>\n";
                for(let i = 0; i < body.length; i++){
                    html += `    <p>${body[i]}</p>\n`;
                }
    html += "  </div>\n";
    html += "</article>\n";
    console.log(html);
}



xmlMessenger(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer</message>`);