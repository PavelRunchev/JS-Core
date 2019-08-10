function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
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
            this.comments.push(comment);
        }

        toString() {
            const parent = super.toString();
            const rating = `\nRating: ${this.likes - this.dislikes}`;
            let comments = '';
            if(this.comments.length > 0) {
                comments = '\nComments:';
                for(let c of this.comments)
                    comments += `\n * ${c}`;
            }

            return parent + rating + comments;
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
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}

let p = posts();
let post = new p.Post('New USA', 'War offf');
//console.log(post.toString());

let scm = new p.SocialMediaPost('Go Europe', 'Discrement', 32, 12);
scm.addComment('good post');
scm.addComment("it's like this post");
//console.log(scm.toString());

let bp = new p.BlogPost('Freedom', 'It is this a peace!', 5);
bp.view().view().view();
console.log(bp.toString());