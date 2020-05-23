class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }

    register(username, password, repeatPassword, email) {
        if(username === "" || password === "" ||  repeatPassword === "" || email === "") {
            throw new Error('Input can not be empty');
        }

        if(password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }

        const registeredUser = this._users.find(u => u.username === username || u.email === email);
        if(registeredUser) {
            throw new Error('This user already exists!');
        }

        this._users.push({ username, password, email, isLogged: false });
        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        const registeredUser = this._users.find(u => u.username === username && u.password === password);
        if(!registeredUser) {
            throw new Error('There is no such user');
        }

        registeredUser.isLogged = true;
        return 'Hello! You have logged in successfully';
    }

    logout(username, password) {
        const registeredUser = this._users.find(u => u.username === username && u.password === password);
        if(!registeredUser) {
            throw new Error('There is no such user');
        }

        registeredUser.isLogged = false;
        return 'You have logged out successfully';
    }

    postQuestion(username, question) {
        const loginUser = this._users.find(u => u.username === username && u.isLogged);
        if(!loginUser) {
            throw new Error('You should be logged in to post questions');
        }

        if(question === '') { throw new Error('Invalid question'); }

        this._questions.push({ id: this._id, username, question, answer: [] });
        this._id = ++this._id;
        return 'Your question has been posted successfully';
    }

    postAnswer(username, questionId, answer) {
        const loginUser = this._users.find(u => u.username === username && u.isLogged);
        if(!loginUser) {
            throw new Error('You should be logged in to post answers');
        }

        if(answer === '') { throw new Error('Invalid answer'); }

        const currentQuestion = this._questions.find(q => q.id === questionId);
        if(!currentQuestion) {
            throw new Error('There is no such question');
        }

        currentQuestion['answer'].push({ username, answer });
        return 'Your answer has been posted successfully';
    }

    showQuestions() {
        let output = '';
        if(this._questions.length > 0) {
            for (let q of this._questions) {
                output += `Question ${q.id} by ${q.username}: ${q.question}\n`;
                for (let ans of q.answer) {
                    output += `---${ans.username}: ${ans.answer}\n`;
                }
            }

            return output.trim('\n');
        }
    }
}


let forum = new Forum();
// test for 6 and 7
forum.register('Jonny', '12345', '12345', 'jonny@abv.bg');
forum.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
forum.login('Jonny', '12345');
forum.login('Peter', '123ab7');
console.log(forum.postQuestion('Jonny', "Do I need glasses for skiing?"));
console.log(forum.postAnswer('Peter',1, "Yes, I have rented one last year."));
console.log(forum.showQuestions());
