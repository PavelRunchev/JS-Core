function xmlMessenger(message){
    let pattern = /^<message((?:\s+[a-z]+="[A-Za-z0-9 .]+"\s*?)*)>((?:.|\n)+?)<\/message>$/;

    let tokens = pattern.exec(message);
    if(!tokens){
        console.log("Invalid message format");
        return;
    }

    let [match, atributes, body] = tokens;
    let validAttribute = /\s+([a-z]+)="([A-Za-z0-9 .]+)"\s*?/g;
    let sender = "";
    let recipient = "";
    let matched = validAttribute.exec(atributes);
    while(matched !== null){
        if(matched[1] === "to"){
            recipient = matched[2];
        }else if(matched[1] === "from"){
            sender = matched[2];
        }
        matched = validAttribute.exec(atributes);
    }

    if(sender === "" || recipient === ""){
        console.log("Missing attributes");
        return;
    }

    body = body.replace(/\n/g, '</p>\n    <p>');
    let html = "<article>\n";
    html += `  <div>From: <span class="sender">${sender}</span></div>\n`;
    html += `  <div>To: <span class="recipient">${recipient}</span></div>\n`;
    html += `  <div>\n`;
    html += `    <p>${body}</p>\n`;
    html += '  </div>\n';
    html += "</article>\n";

    console.log(html);
}

xmlMessenger(`<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what's up?</message>`);


xmlMessenger(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer</message>`);