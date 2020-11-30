function solve() {
    let modules = document.querySelector('.modules');
    document.querySelector('.form-control > button').addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        let lectureName = document.querySelector('input[name="lecture-name"]');
        let date = document.querySelector('input[name="lecture-date"]');
        let module = document.querySelector('select[name="lecture-module"]');

        //checking for empty or default input
        if(lectureName.value === '') return;
        if(date.value === '' || date.value === ' ') return;
        if(module.value === '' || module.value === 'Select module') return;

        //formating date
        const dataForLecture = formatLecture(lectureName.value, date.value);
        //foramting module name
        const modName = formatModule(module.value.toUpperCase());
    
        //Create Lecture
        let createdLecture = addLecture(dataForLecture);
         //check that module is exist!
        const currentModule = checkForExistModule(modName);
        if(currentModule) {
            currentModule.lastChild.appendChild(createdLecture);
        } else {
            //Create Module
            let mod = addModule(modName);
            mod.lastChild.appendChild(createdLecture);
            modules.appendChild(mod);
        }

        sortingLectures();

        //input filed is default value!!!
        lectureName.value = '', date.value = '';
        //get first option from Select tag (by default).
        let op = module.querySelectorAll('option')[0];
        //set default Option valur to Select value!
        module.value = op.value;
    }

    function addModule(text) {
        let module = createElement('div', 'module', '');
        module.appendChild(createElement('h3', '', text));
        module.appendChild(createElement('ul', '', ''));
        return module;
    }

    function addLecture(text) {
        let li = createElement('li', 'flex', '');
        li.appendChild(createElement('h4', '', text));
        li.appendChild(createElement('button', 'red', 'Del'));
        return li;
    }

    function createElement(type, nameClass, content) {
        let element = document.createElement(`${type}`);
        if(nameClass !== '') element.className = nameClass;
        if(content !== '') element.textContent = content;
        if(type === 'button') element.addEventListener('click', removeLecture);
        return element;
    }

    function removeLecture(e) {
        e.preventDefault();
        const allLiForModule = this.parentNode.parentNode.querySelectorAll('li');
        if(allLiForModule.length === 1)
            //when is do removing last lecture, she was removing and current Module!
            return this.parentNode.parentNode.parentNode.remove();

        //remove only current Lecture!
        this.parentNode.remove();
    }

    function formatLecture(name, date) {
        const [year, month, days, hours] = date.split(/[-T]/);
        return `${name} - ${year}/${month}/${days} - ${hours}`;
    }

    function formatModule(m) {
        return `${m}-MODULE`;
    }

    function checkForExistModule(modName) {
        for (let m of modules.querySelectorAll('.module')) {
            if(m.firstChild.textContent === modName) 
                return m;
        }

        return null;
    }

    function sortingLectures() {
        for (let mod of modules.querySelectorAll('.module')) {
            let allLi = Array.from(mod.querySelectorAll('li'));
            mod.querySelector('ul').innerHTML = '';
            allLi.sort((a,b) => {
                const [nameA, dateA, timeA] = a.firstChild.textContent.split(' - ');
                const [nameB, dateB, timeB] = b.firstChild.textContent.split(' - ');
                const first = `${dateA} ${timeA}`;
                const second = `${dateB} ${timeB}`;

                if(first < second) return -1;
                if(first > second) return 1;
                return 0;
            }).forEach(el => mod.querySelector('ul').appendChild(el));
        }
    }
};