function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\n` + `Content: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            if(typeof comment === 'string')
                this.comments.push(comment);
        }

        toString() {
            const allComments = this.comments.map(c => c = ` * ${c}`).join('\n');
            const existComments = this.comments.length === 0 
                ? '' 
                : `\nComments:\n${allComments}`;

            return `${super.toString()}\n` +
                `Rating: ${this.likes - this.dislikes}` + 
                existComments;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `${super.toString()}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}

const s = solve();
let scm = new s.SocialMediaPost('JavaScript', 'JS Advanced', 25, 30);

scm.addComment('Good post');
scm.addComment('Very good post');
scm.addComment('Wow!');
console.log(scm.toString());