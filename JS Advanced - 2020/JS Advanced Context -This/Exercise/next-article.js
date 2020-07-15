function getArticleGenerator(articles) {
    let arrFromArticles = articles;
    let contentDiv = document.querySelector('#content');
    
    // return function that display element for every click - by condition!
    return function() {
        if(arrFromArticles.length > 0) {
            let article = document.createElement('article');
            article.textContent = arrFromArticles.shift();
            contentDiv.appendChild(article);
        }
    }
}