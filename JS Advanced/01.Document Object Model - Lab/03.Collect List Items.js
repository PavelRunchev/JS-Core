function extractText() {
    let items = document.querySelectorAll('ul#items li');
    let textarea = document.querySelector('#result');
    for(let node of items){
        textarea.value += node.textContent + "\n";
    }
}