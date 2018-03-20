function wikiParser(selector) {
    let element = $(selector);

    let patternH1 = /=(.+?)=/g;
    let patternH2 = /==(.+?)==/g;
    let patternH3 = /===(.+?)===/g;
    let patternQuoteTwo = /''(.+?)''/g;
    let patternQuoteThree = /'''(.+?)'''/g;
    let patternLink = /\[\[([^\[\]]+?)\]\]/g;
    let patternLinkText = /\[\[([^\[\]]+?)\|(.+?)\]\]/g;

    let text = element.text();
    text = text
        .replace(patternQuoteThree, (match, group) => `<b>${group}</b>`)
        .replace(patternH3, (match, group) => `<h3>${group}</h3>`)
        .replace(patternH2, (match, group) => `<h2>${group}</h2>`)
        .replace(patternH1, (match, group) => `<h1>${group}</h1>`)
        .replace(patternLinkText, (match, group1, group2) => `<a href="/wiki/${group1}">${group2}</a>`)
        .replace(patternLink, (match, group) => `<a href="/wiki/${group}">${group}</a>`)
        .replace(patternQuoteTwo, (match, group) => `<i>${group}</i>`);
    element.html(text);
}