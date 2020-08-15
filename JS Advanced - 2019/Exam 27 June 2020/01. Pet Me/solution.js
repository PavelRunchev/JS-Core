function solve() {
    document.querySelector('#container button').addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();
        let [name, age, kind, owner] = document.querySelectorAll('#container input');
        if(name.value === '' || age.value === '' 
        || kind.value === '' || owner.value === ''
        || isNaN(age.value)) return;

        document.querySelector('#adoption ul').appendChild(createPet(name.value, age.value, kind.value, `Owner: ${owner.value}`, 'Contact with owner', contact));
        name.value = '', age.value = '', kind.value = '', owner.value = '';
    }

    function createPet(name, age, kind, ownerContext, btnText, funcName) {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerHTML = `<strong>${name}</strong>` + ' is a ' + `<strong>${age}</strong>` + ' year old ' + `<strong>${kind}</strong>`;
        li.appendChild(p);
        li.appendChild(createElement('span', ownerContext));
        li.appendChild(createElement('button', btnText, funcName));
        return li;
    }

    function createElement(type, context, fun) {
        let el = document.createElement(`${type}`);
        el.textContent = context;
        if(type === 'input') el.setAttribute('placeholder', 'Enter your names');
        if(type === 'button') el.addEventListener('click', fun);
        return el;
    }

    function contact(e) {
        e.preventDefault();
        let div = createElement('div', '');
        div.appendChild(createElement('input', ''));
        div.appendChild(createElement('button', 'Yes! I take it!', takeIt));
        this.parentNode.appendChild(div);
        this.remove();
    }

    function takeIt(e) {
        e.preventDefault();
        let inputOwner = this.parentNode.querySelector('input').value;
        if(inputOwner !== '') {
            let currentLiElement = this.parentNode.parentNode;
            let [name, age, kind] = currentLiElement.querySelectorAll('p strong');
            let moveLiElement = createPet(name.textContent, age.textContent, kind.textContent, `New Owner: ${inputOwner}`, 'Checked', checked);
            document.querySelector('#adopted ul').appendChild(moveLiElement);
            this.parentNode.parentNode.remove();
        }
    }

    function checked(e) {
        e.preventDefault();
        this.parentNode.remove();
    }
}

