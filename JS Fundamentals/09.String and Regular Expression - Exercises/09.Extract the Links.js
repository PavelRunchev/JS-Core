function extractLinks(array){
    let pattern = /(www\.([A-Za-z0-9-]+)(\.[a-z]+)+)/g;
    let linksArray = [];
    let text = array.join(" ");
        let match = pattern.exec(text);
        while(match){
            linksArray.push(match[0]);
            match = pattern.exec(text);
        }

    console.log(linksArray.join("\n"));
}


extractLinks(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
    'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko']);