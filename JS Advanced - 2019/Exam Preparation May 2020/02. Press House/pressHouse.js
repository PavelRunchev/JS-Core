function pressHouse() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}\n` +
                `Content: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            if(content.length >= 150)
                throw new Error('Short reports content should be less then 150 symbols.');
            
            super(title, content);
            this.originalResearch = originalResearch;
            this.comments = [];
        }

        get originalResearch() {
            return this._originalResearch;
        }

        set originalResearch(value) {
            if(!value.hasOwnProperty('title') || !value.hasOwnProperty('author'))
                throw new Error('The original research should have author and title.');

            this._originalResearch = value;
        }

        addComment(comment) {
            // TODO not be validate
            this.comments.push(comment);
            return 'The comment is added.';
        }

        toString() {
            const comments = this.comments.length === 0 ? '' : `\nComments:\n${this.comments.join('\n')}`;
            return `${super.toString()}\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}` + comments;
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) {
            if(this.clients.some(c => c.clientName === clientName))
                throw new Error('This client has already ordered this review.');

            this.clients.push({ clientName, orderDescription });
            return `${clientName} has ordered a review for ${this.book.name}`;
        }

        toString() {
            const allOrders = this.clients
                .map(c => c = `${c.clientName} - ${c.orderDescription}`)
                .join('\n');
            const existOrders = this.clients.length === 0 ? '' : `\nOrders:\n${allOrders}`;
            return `${super.toString()}\n` +
                `Book: ${this.book.name}` + 
                existOrders;
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    };
}

//4,7 test check if no comments and no orders, no '\n before them!!!

let classes = pressHouse();
let lorem = new classes.Article('Lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel, ultricies est. Phasellus id pellentesque risus. Morbi aliquet at lectus ac malesuada. Morbi eu erat orci. Donec id turpis elit. Donec iaculis sapien odio, sit amet cursus lacus rutrum sit amet. Cras ac urna sapien. Pellentesque porta mauris ac dolor commodo, congue condimentum orci varius. Ut ultrices pretium commodo. Aenean facilisis mattis facilisis.');
console.log(lorem.toString()); 
console.log('-'.repeat(25));


let short = new classes.ShortReports('SpaceX and Javascript', 'Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?', { title: 'Dragon 2', author: 'wikipedia.org' });

console.log(short.addComment('Thank god they didn\'t use java.'));
short.addComment('In the end JavaScript\'s features are executed in C++ — the underlying language.');
console.log(short.toString()); 

console.log('-'.repeat(25));

let book = new classes.BookReview('The Great Gatsby is so much more than a love story', 'The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...', 
    { name: 'The Great Gatsby', author: 'F Scott Fitzgerald' });
console.log(book.addClient('The Guardian', '100 symbols'));
console.log(book.addClient('Goodreads', '30 symbols'));
console.log(book.toString()); 

console.log('-'.repeat(25));
console.log('-'.repeat(25));
