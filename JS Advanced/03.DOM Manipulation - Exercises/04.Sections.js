function create(sentences) {
    let contentDiv = document.getElementById('content');
    for(let sentence of sentences){
        let newDivElement = document.createElement('div');
        let newParaElement = document.createElement('p');
        newParaElement.textContent = sentence;
        newParaElement.style.display = 'none';
        newDivElement.appendChild(newParaElement);
        newDivElement.addEventListener('click', function() {
            newParaElement.style.display = 'block';
        });
        contentDiv.appendChild(newDivElement);
    }
}