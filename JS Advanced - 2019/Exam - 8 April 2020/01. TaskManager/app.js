function solve() {
    let sections = document.querySelectorAll('.wrapper > section');
    document.querySelector('#add').addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();
        let task = document.querySelector('#task');
        let description = document.querySelector('#description');
        let date = document.querySelector('#date');
        if(task.value === '' || description.value === '' || date.value === '') return;

        const newTask = createTask(task.value, description.value, date.value);
        sections[1].querySelectorAll('div')[1].appendChild(newTask);
        task.value = '', description.value = '', date.value = '';
    }

    function createTask(task, description, date) {
        let article = createElement('article', '', '');
        article.appendChild(createElement('h3', '', task));
        article.appendChild(createElement('p', '', `Description: ${description}`));
        article.appendChild(createElement('p', '', `Due Date: ${date}`));
        let div = createElement('div', 'flex', '');
        div.appendChild(createElement('button', 'green', 'Start', start));
        div.appendChild(createElement('button', 'red', 'Delete', remove));
        article.appendChild(div);
        return article;
    }

    function createInProgress(task, description, date) {
        let article = createElement('article', '', '');
        article.appendChild(createElement('h3', '', task));
        article.appendChild(createElement('p', '', `${description}`));
        article.appendChild(createElement('p', '', `${date}`));
        let div = createElement('div', 'flex', '');
        div.appendChild(createElement('button', 'red', 'Delete', remove));
        div.appendChild(createElement('button', 'orange', 'Finish', finish));
        article.appendChild(div);
        return article;
    }

    function createElement(type, typeClassName, content, typeListener) {
        let el = document.createElement(`${type}`);
        if(content !== '') el.textContent = content;
        if(typeClassName !== '') el.className = typeClassName;
        if(type === 'button') el.addEventListener('click', typeListener);
        return el;
    }

    function remove(e) {
        e.preventDefault();
        this.parentNode.parentNode.remove();
    }

    function start(e) {
        e.preventDefault();
        const[task, description, date] = getArticleData.call(this, e);
        const newInProgress = createInProgress(task, description, date);
        document.querySelector('#in-progress').appendChild(newInProgress);
        removeArticle.call(this, e);
    }

    function finish(e) {
        e.preventDefault();
        const[task, description, date] = getArticleData.call(this, e);
        const taskToComplete = createCompleteTask(task, description, date);
        sections[3].querySelectorAll('div')[1].appendChild(taskToComplete);
        removeArticle.call(this, e);
    }

    function createCompleteTask(task, description, date) {
        let article = createElement('article', '', '');
        article.appendChild(createElement('h3', '', task));
        article.appendChild(createElement('p', '', `${description}`));
        article.appendChild(createElement('p', '', `${date}`));
        return article;
    }

    function getArticleData(e) {
        const parent = this.parentNode.parentNode;
        return [ 
            parent.querySelector('h3').textContent, 
            parent.querySelectorAll('p')[0].textContent,
            parent.querySelectorAll('p')[1].textContent
        ];
    }

    function removeArticle(e) {
        this.parentNode.parentNode.remove();
    }
}