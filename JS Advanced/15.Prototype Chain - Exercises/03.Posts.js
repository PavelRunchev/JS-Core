function posts() {
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\n` + `Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let print = super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if(this.comments.length > 0){
                print += `\nComments:`;
                for(let coment of this.comments){
                    print += `\n * ` + coment;
                }
            }

            return print;
        }
    }

    class BlogPost extends Post{
        constructor(titcle, content, views){
            super(titcle, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}


//For testing subtract classes from function "posts"!!!
let post = new Post("Post", "Content");

console.log(post.toString());
let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
let blog = new BlogPost("TitleX", "ContentX", 5);
blog.view().view().view();
console.log(blog.toString());

