function solve() {
    let offersContainer = document.getElementById('offers-container');
    let isLoggedUser = false;

    let createoffer = document.getElementById('create-offers');
    createoffer.style.display = 'none';

    let loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', logIn);
    
    let createBtn = document.getElementById('create-offer-Btn');
    createBtn.addEventListener('click', createOffer);

    function logIn() {
        let notification = document.getElementById('notification');
        notification.textContent = '';
        let username = document.getElementById('username');
        
        if(loginBtn.textContent === 'Login' && (username.value.length < 4 || username.value.length > 10)) {
            notification.textContent = 'The username length should be between 4 and 10 characters.';
            return;
        }

        loginBtn.textContent = loginBtn.textContent === 'Login' 
            ? 'Logout' : 'Login';

        if(loginBtn.textContent === 'Logout') {
            createoffer.style.display = 'block';
            username.disabled = true;
            username.value = `Hello, ${username.value}!`;
            username.className = 'form-control mr-sm-2 border-0 bg-light';
            isLoggedUser = true;
        }
        else if(loginBtn.textContent === 'Login') {
            createoffer.style.display = 'none';
            username.disabled = false;
            username.value = ``;
            username.classList.remove('bg-light');
            username.className = ('border-0');
            username.className = 'form-control mr-sm-2';
            isLoggedUser = false;
        }
    }

    function createOffer() {
        let offerName = document.getElementById('offerName');
        let companyName = document.getElementById('company');
        let description = document.getElementById('description');

        if(offerName.value === '' || companyName.value === '' || description.value === '') return;

        if(isLoggedUser === false) return;

        let mainDiv = document.createElement('div');
        mainDiv.className = 'col-3';
        let divCard = document.createElement('div');
        divCard.className = 'card text-white bg-dark mb-3 pb-3';
        divCard.style.maxWidth = "18rem";
        let divHeader = document.createElement('div');
        divHeader.className = 'card-header';
        divHeader.textContent = offerName.value;
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        let h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = companyName.value;

        cardBody.appendChild(h5);
        let p = document.createElement('p');
        p.className = 'card-text';
        p.textContent = description.value;
        cardBody.appendChild(p);

        divCard.appendChild(divHeader);
        divCard.appendChild(cardBody);
        mainDiv.appendChild(divCard);
        offersContainer.appendChild(mainDiv);

        offerName.value = '';
        companyName.value = '';
        description.value = '';
    }
}

solve();