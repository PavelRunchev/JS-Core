class CheckingAcount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if(typeof(value) !== 'string')
            throw new TypeError('Client ID must be a 6-digit number');

        if(value.length === 6 && Number.isInteger(Number(value))) {
            this._clientId = value;
        }
        else {
            throw new TypeError('Client ID must be a 6-digit number');
        }   
    }

    get email() {
        return this._email;
    }

    set email(value) {
        const regex = RegExp('^[A-Za-z]+@[a-zA-Z.]+$');
        if(!regex.test(value))
            throw new TypeError('Invalid e-mail');

        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        let regex = RegExp('^[A-Za-z]+$');
        if(value.length < 3 || value.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        if(!regex.test(value)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        let regex = RegExp('^[A-Za-z]+$');
        if(value.length < 3 || value.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        if(!regex.test(value)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = value;
    }
}

try{
    let account = new CheckingAcount('134856', 'ivan@gmail.com', 'Ivan', 'Petrov');
    console.log(account.lastName);
}
catch(err) {
    console.log(err.message);
}
