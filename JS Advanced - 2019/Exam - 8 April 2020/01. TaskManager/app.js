function solve() {
    let sections = document.querySelectorAll('.wrapper section');
    document.querySelector('#add').addEventListener('click', addTask);

    function createBtn(text, className) {
        let btn = document.createElement('button');
        btn.textContent = text;
        btn.className = className;
        return btn;
    }

    function addTask(e) {
        e.preventDefault();
        let task = document.querySelector('#task');
        let description = document.querySelector('#description');
        let date = document.querySelector('#date');

        if(task.value === '' || description.value === '' || date.value === '') return;

        const newTask = createTask(false, task.value, description.value, date.value, true, true, false);
        sections[1].querySelectorAll('div')[1].appendChild(newTask);

        task.value = '', description.value = '', date.value = '';
    }

    function createTask(isExist, task, description, date, startBtn, deleteBtn, finishBtn) {
        const article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = task;
        article.appendChild(h3);

        let pDescription = document.createElement('p');
        pDescription.textContent = isExist ? `${description}` : `Description: ${description}`;
        article.appendChild(pDescription);

        let pDate = document.createElement('p');
        pDate.textContent = isExist ? `${date}` : `Due Date: ${date}`;
        article.appendChild(pDate);

        if((startBtn && deleteBtn) || (deleteBtn && finishBtn)) {
            let divBtn = document.createElement('div');
            divBtn.className = 'flex';

            let btnDelete = createBtn('Delete', 'red');
            btnDelete.addEventListener('click', deleteArticle);
            if(startBtn && deleteBtn) {
                let btnStart = createBtn('Start', 'green');
                btnStart.addEventListener('click', start);

                divBtn.appendChild(btnStart);
                divBtn.appendChild(btnDelete);
            }

            if(deleteBtn && finishBtn) {
                let btnFinish = createBtn('Finish', 'orange');
                btnFinish.addEventListener('click', finish);

                divBtn.appendChild(btnDelete);
                divBtn.appendChild(btnFinish);
            }

            article.appendChild(divBtn);
        }

        return article;
    }

    function deleteArticle(e) {
        this.parentNode.parentNode.remove();
    }

    function start(e) {
        const article = this.parentNode.parentNode;
        const [task, description, date] = getTextFromArticle(article);

        const toInProgressArticle = createTask(true, task, description, date, false, true, true);
        sections[2].querySelectorAll('div')[1].appendChild(toInProgressArticle);
    }

    function finish(e) {
        const article = this.parentNode.parentNode;
        const [task, description, date] = getTextFromArticle(article);

        const toCompleteArticle = createTask(true, task, description, date, false, false, false);
        sections[3].querySelectorAll('div')[1].appendChild(toCompleteArticle);
    }

    function getTextFromArticle(article) {
        return [
            article.querySelector('h3').textContent,
            article.querySelectorAll('p')[0].textContent,
            article.querySelectorAll('p')[1].textContent
        ];
    }
}