class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [],
        this._likes = [];
    }

    get likes() {
        if(this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if(this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
        }
    }

    like(username) {
        const currentUser = this._likes.find(u => u === username);
        if(currentUser) {
            throw Error(`You can't like the same article twice!`);
        }

        if(this.creator === username) {
            throw Error(`You can't like your own articles!`);
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        const currentUser = this._likes.find(u => u === username);

        if(!currentUser) {
            throw Error(`You can't dislike this article!`);
        }

        this._likes = this._likes.filter(u => u !== username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let commentArticle = this._comments.find(c => c.Id === id);

        if(commentArticle) {
            commentArticle['Replies'].push({
                Id: Number(`${id}.${commentArticle['Replies'].length + 1}`),
                Username: username,
                Content: content
            });
            return `You replied successfully`;
        }

        this._comments.push({ 
            Id: this._comments.length + 1, 
            Username: username, 
            Content: content, 
            Replies: [] 
        });
        return `${username} commented on ${this.title}`;
    }

    toString(sortingType) {
        let output = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;

        const sortedComments = this.sorting(sortingType, this._comments);
        for (let c of sortedComments) {
            output += `-- ${c.Id}. ${c.Username}: ${c.Content}\n`;
            const sortedReplies = this.sorting(sortingType, c.Replies);
            for (let r of sortedReplies) {
                output += `--- ${r.Id}. ${r.Username}: ${r.Content}\n`;
            }
        }

        output = output.replace(/^\n|\n$/g, '');
        return output;
    }

    sorting(type, arr) {
        arr.sort((a, b) => {
            if(type === 'asc') {
                return a.Id > b.Id ? 1 : -1;
            } else if(type === 'desc') {
                return b.Id > a.Id ? 1 : -1;
            } else if(type === 'username') {
                return a.Username.localeCompare(b.Username);
            }
        });

        return arr;
    }
}

// let art = new Article("My Article", "Anny");
// console.log(art.like("John"));
// console.log(art.likes);
// console.log(art.dislike("John"));
// console.log(art.likes);
// console.log(art.comment("Sammy", "Some Content"));
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));

// console.log(art.like("Zane"));
// console.log(art.toString('desc'));



let art = new Article("My Article", "Anny");
console.log(art.like("John"));
console.log(art.likes);
console.log(art.dislike("Sally"));
console.log(art.like("Ivan"));
console.log(art.like("Steven"));
console.log(art.likes);
console.log(art.comment("Anny", "Some Content"));
console.log(art.comment("Ammy", "New Content", 1));
console.log(art.comment("Zane", "Reply", 2));
console.log(art.comment("Jessy", "Nice :)"));
console.log(art.comment("SAmmy", "Reply@", 2));

console.log(art.toString('asc'));
