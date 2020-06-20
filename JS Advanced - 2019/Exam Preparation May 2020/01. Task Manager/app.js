function solve() {
    let sections = document.querySelectorAll('.wrapper section');
    document.querySelector('#add').addEventListener('click', addArticle);

    function addArticle(e) {
        e.preventDefault();
        let [task, date] = Array.from(document.querySelectorAll('.wrapper section > div > form > input'));
        let description = document.querySelector('#description');
        if(task.value === '' || description.value === '' || date === '') return;
        
        const newArticle = createArticle(task.value, description.value, date.value, true, true);
        sections[1].querySelectorAll('div')[1].appendChild(newArticle);
        task.value = '', date.value = '', description.value = '';
    }
    function createArticle(task, description, date, btnPosition, haveButtons) {
        let article = createElement('article', '', '');
        article.appendChild(createElement('h3', task, ''));
        article.appendChild(createElement('p', `Description: ${description}`, ''));
        article.appendChild(createElement('p', `Due Date: ${date}`, ''));
        if(haveButtons) article.appendChild(createButtons(btnPosition));
      
        return article;
    }

    function createButtons(btnPosition) {
        let btnDiv = createElement('div', '', 'flex');
        let deleteBtn = createElement('button', 'Delete', 'red');
        deleteBtn.addEventListener('click', deleteExam);
        if(btnPosition) {
            let startBtn = createElement('button', 'Start', 'green');
            startBtn.addEventListener('click', startExam);
            btnDiv.appendChild(startBtn);
            btnDiv.appendChild(deleteBtn);
        } else {
            let finishBtn = createElement('button', 'Finish', 'orange');
            finishBtn.addEventListener('click', finishExam);
            btnDiv.appendChild(deleteBtn);
            btnDiv.appendChild(finishBtn);
        }

        return btnDiv;
    }

    function createElement(type, context, className) {
        let el = document.createElement(`${type}`);
        el.textContent = context;
        el.className = className;
        return el;
    }

    function deleteExam(e) {
        e.target.parentNode.parentNode.remove();
    }

    function startExam(e) {
        e.preventDefault();
        const [task, description, date] = getArticleData(e.target.parentNode.parentNode);
        const toProgress = createArticle(task, description, date, false, true);
        document.querySelector('#in-progress').appendChild(toProgress);
        deleteExam(e);
    }  

    function finishExam(e) {
        e.preventDefault();
        const [task, description, date] = getArticleData(e.target.parentNode.parentNode);
        const finishExam = createArticle(task, description, date, false, false);
        sections[3].querySelectorAll('div')[1].appendChild(finishExam);
        deleteExam(e);
    }

    function getArticleData(parent) {
        let arr = [];
        arr.push(parent.querySelector('h3').textContent);
        Array
            .from(parent.querySelectorAll('p'))
            .map(p => arr.push(p.textContent.split(': ')[1]));
        return arr;
    }
}