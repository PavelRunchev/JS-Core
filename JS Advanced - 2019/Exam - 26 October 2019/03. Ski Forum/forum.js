class Forum {
	constructor() {
		this._users = [];
		this._questions = [];
		this._id = 1;
		this.loggedUsers = [];
	}

	register(username, password, repeatPassword, email) {
		if(username === '' || password === '' || repeatPassword === '' || email === '')
			throw new Error('Input can not be empty');
		
		if(password !== repeatPassword)
			throw new Error('Passwords do not match');

		if(this._users.some(u => u.username === username || u.email === email))
			throw new Error('This user already exists!');

		this._users.push({username, password, email});
		return `${username} with ${email} was registered successfully!`;
	}

	login(username, password) {
		const userExist = this._users.find(u => u.username === username && u.password === password);
		if(!userExist)
			throw new Error('There is no such user');

		if(this.loggedUsers.includes(username))
			return 'you have logged';

		this.loggedUsers.push(username);
		return 'Hello! You have logged in successfully';
	}

	logout(username, password) {
		const userExist = this._users.find(u => u.username === username && u.password === password);
		if(!userExist)
			throw new Error('There is no such user');

		if(this.loggedUsers.includes(username)) {
			const index = this.loggedUsers.findIndex(l => l === username);
			const logoutUser = this.loggedUsers.splice(index, 1);
			return 'You have logged out successfully';
		}
	}

	postQuestion(username, question) {
		if(!this._users.some(u => u.username === username) || !this.loggedUsers.includes(username))
			throw new Error('You should be logged in to post questions');

		if(question === '')
			throw new Error('Invalid question');
		
		this._questions.push({ id: this._id, username, question, answer: [] });
		this._id++;
		return 'Your question has been posted successfully';
	}

	postAnswer(username, questionId, answer) {
		if(!this._users.some(u => u.username === username) || !this.loggedUsers.includes(username))
			throw new Error('You should be logged in to post answers');
		
		if(answer === '')
			throw new Error('Invalid answer');

		const question = this._questions.find(q => q.id === questionId);
		if(!question)
			throw new Error('There is no such question');

		question.answer.push({ username, answer });
		return 'Your answer has been posted successfully';
	}

	showQuestions() {
		return this._questions.map(q => {
			return `Question ${q.id} by ${q.username}: ${q.question}\n` +
			q.answer.map(a => a = `---${a.username}: ${a.answer}`).join('\n');
		}).join('\n').trim();
	}
}

try {

	let forum = new Forum();

	forum.register('Jonny', '12345', '12345', 'jonny@abv.bg');
	forum.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
	forum.login('Jonny', '12345');
	forum.login('Peter', '123ab7');
	
	forum.postQuestion('Jonny', "Do I need glasses for skiing?");
	forum.postAnswer('Peter',1, "Yes, I have rented one last year.");
	forum.postAnswer('Jonny',1, "What was your budget");
	forum.postAnswer('Peter',1, "$50");
	forum.postAnswer('Jonny',1, "Thank you :)");
	
	console.log(forum.showQuestions());
	

} catch(err) {
	console.log(err.message);
}
