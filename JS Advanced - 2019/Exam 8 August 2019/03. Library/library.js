class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = { 
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        };
    }


    subscribe(name, type) {
        if(!this.subscriptionTypes[type]) {
            throw new Error(`The type ${type} is invalid`);
        }

        let subscriberIndex = this.subscribers.findIndex(s => s.name === name);

        if(subscriberIndex > -1) {
            this.subscribers[subscriberIndex].type = type;
        } else {
            let newSubscriber = { name, type, books: [] };
            this.subscribers.push(newSubscriber);
            return newSubscriber;
        }

        return this.subscribers[subscriberIndex];
    }

    unsubscribe(name) {
        let personIndex = this.subscribers.findIndex(s => s.name === name);

        if(personIndex === -1) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        this.subscribers.splice(personIndex, 1);
        console.log(this.subscribers[0]);
        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let subscriberIndex = this.subscribers.findIndex(s => s.name === subscriberName);

        if(subscriberIndex === -1) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        const currentPerson = this.subscribers[subscriberIndex];
        if(currentPerson.books.length >= this.subscriptionTypes[currentPerson.type]) {
            throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[currentPerson.type]}!`)
        }

        this.subscribers[subscriberIndex].books.push({ 
            title: bookTitle,
            author: bookAuthor
        });

        return this.subscribers[subscriberIndex];
    }

    showInfo() {
        if(this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`;
        }

        return this.subscribers.map(s => {
            const subscriber = `${s.name}, Type: ${s.type}`;
            const subscriberBooks = s.books.map(b => b = `${b.title} by ${b.author}`).join(', ');
            return `Subscriber: ${subscriber}\nReceived books: ${subscriberBooks}`;
        }).join('\n') + '\n';
    }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');


//act
lib.subscribe('Alex', 'normal')
lib.subscribe('Jerry', 'special')

lib.receiveBook('Jerry', 'The Black Tulip', 'Alexandre Dumas');
lib.receiveBook('Alex', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('Jerry', 'The Wolf Leader', 'Alexandre Dumas');

console.log(lib.showInfo());
let expected = "Subscriber: Alex, Type: normal\nReceived books: Lord of the rings by J. R. R. Tolkien\nSubscriber: Jerry, Type: special\nReceived books: The Black Tulip by Alexandre Dumas, The Wolf Leader by Alexandre Dumas\n";


