class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this.clientId;
    }

    set clientId(value) {
        if(value.length !== 6)
            throw new TypeError('Client ID must be a 6-digit number');

        this._clientId = value;
    }

    get email() {
        return this.email;
    }

    set email(value) {
        if(!RegExp('^[a-zA-Z]+@[a-zA-Z\.]+$', 'g').test(value))
            throw new TypeError('Invalid e-mail');

        this._email = value;
    }

    get firstName() {
        return this.firstName;
    }
    
    set firstName(value) {
        if(value.length < 3 || value.length > 20)
            throw new TypeError('First name must be between 3 and 20 characters long');

        if(!RegExp('^[a-zA-Z]+$', 'g').test(value))
            throw new TypeError('First name must contain only Latin characters');

        this._firstName = value;
    }

    get lastName() {
        return this.lastName;
    }
    
    set lastName(value) {
        if(value.length < 3 || value.length > 20)
            throw new TypeError('Last name must be between 3 and 20 characters long');

        if(!RegExp('^[a-zA-Z]+$', 'g').test(value))
            throw new TypeError('Last name must contain only Latin characters');

        this._lastName = value;
    }
}

let acc = new CheckingAccount('131456', 'ivan@some.com', 'Ivan', 'Petrov');

let acc1 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'Petrov');
console.log(acc1);