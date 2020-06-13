class Article {
	constructor(title, creator) {
		this.title = title;
		this.creator = creator;
		this._comments = [];
		this._likes = [];
	}

	get likes() {
		if(this._likes.length === 0)
			return `${this.title} has 0 likes`;

		if(this._likes.length === 1)
			return `${this._likes[0]} likes this article!`;

		return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
	}

	like(username) {
		if(this._likes.some(u => u === username))
			throw new Error(`You can't like the same article twice!`);

		if(this.creator === username)
			throw new Error(`You can't like your own articles!`);

		this._likes.push(username);
		return `${username} liked ${this.title}!`;
	}

	dislike(username) {
		if(!this._likes.some(u => u === username))
			throw new Error(`You can't dislike this article!`);

		this._likes = this._likes.filter(u => u !== username);
		return `${username} disliked ${this.title}`;
	}

	comment(username, content, id) {
		let currComment = this._comments.find(c => c.Id === id);
		if(!currComment) {
			const newComments = {
				Id: this._comments.length + 1,
				Username: username,
				Content: content,
				Replies: []
			};
			this._comments.push(newComments);
			return `${username} commented on ${this.title}`;
		}

		const newReply = {
			Id: Number(`${currComment.Id}.${currComment.Replies.length + 1}`),
			Username: username,
			Content: content
		};
		currComment.Replies.push(newReply);
		return 'You replied successfully';
	}

	sorted(array, sortingType) {
		if(sortingType === 'asc')
			return array.sort((a, b) => a.Id - b.Id);
		else if(sortingType === 'desc')
			return array.sort((a, b) => b.Id - a.Id);
		else if(sortingType === 'username')
			return array.sort((a, b) => a.Username.localeCompare(b.Username));
	}

	toString(sortingType) {
		const sortedComments = this._comments.length === 0 ? ''
			: '\n' + this.sorted(this._comments, sortingType)
				.map(c => {
					const sortedReplies = c.Replies.length === 0 ? '' 
						: '\n' + this.sorted(c.Replies, sortingType)
							.map(r => r = `--- ${r.Id}. ${r.Username}: ${r.Content}`)
							.join('\n');

					return `-- ${c.Id}. ${c.Username}: ${c.Content}` + sortedReplies;
				})
				.join('\n');

		return `Title: ${this.title}\n` + 
				`Creator: ${this.creator}\n` +
				`Likes: ${this._likes.length}\n` +
				`Comments:` + sortedComments;
	}
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log('')
console.log(art.toString('username'));
console.log('')
art.like("Zane");
console.log(art.toString('desc'));

//test 7 if no comments -> no '\n' added after 'Comment:' !!!


