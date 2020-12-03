function solve() {
    let pets = document.querySelector('#adoption ul');
    let newHome = document.querySelector('#adopted ul');
    document.querySelector('#container button').addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();
        let [name, age, kind, owner] = document.querySelectorAll('#container input');
        if(name.value === '' || age.value === '' 
        || kind.value === '' || owner.value === '') return;
        //checked value is number or positive digit
        if(!/^\d+\.*\d*$/.test(age.value) || Number(age.value) === 0) return;

        pets.appendChild(createPet(name.value, Number(age.value), kind.value, owner.value, 'contactWithOwner'));
        //clear all fields
        name.value = '', age.value = '', kind.value = '', owner.value = '';
    }

    function createPet(name, age, kind, owner, typeButton) {
        let li = createElement('li', '');
        let p = createElement('p', '');
        p.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;
        li.appendChild(p);
        
        if(typeButton === 'contactWithOwner') {
            li.appendChild(createElement('span', `Owner: ${owner}`));
            li.appendChild(createElement('button', 'Contact with owner', contactOwner));
        } else if(typeButton === 'checked') {
            li.appendChild(createElement('span', `New Owner: ${owner}`));
            li.appendChild(createElement('button', 'Checked', checked));
        }
            
        return li;
    }

    function createElement(type, content, btnClickFunction) {
        let element = document.createElement(`${type}`);
        if(content !== '')  element.textContent = content;
        if(type === 'input') element.placeholder = 'Enter your names';
        if(type === 'button') element.addEventListener('click', btnClickFunction);
            
        return element;
    }

    function contactOwner(e) {
        e.preventDefault();
        let div = createElement('div', '');
        div.appendChild(createElement('input', ''));
        div.appendChild(createElement('button', 'Yes! I take it!', takePet));
        this.parentNode.appendChild(div);
        this.remove();
    }

    function takePet(e) {
        e.preventDefault();
        let own = this.parentNode.querySelector('input');
        //checked input field is empty!
        if(own.value === '') return;
        //get data from pet
        const [name, age, kind] = this.parentNode.parentNode.querySelectorAll('p > strong');
        //have to move pet to the new Owner
        newHome.appendChild(createPet(name.textContent, Number(age.textContent), kind.textContent, own.value, 'checked'));
        //have to remove Li Pet to old owner
        this.parentNode.parentNode.remove();
    }

    function checked(e) {
        e.preventDefault();
        this.parentNode.remove();
    }
}

