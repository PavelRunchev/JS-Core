function solution(command) {
    if(command === 'upvote') this.upvotes += 1;
    else if(command === 'downvote') this.downvotes += 1;
    else if(command === 'score') {
        let modified = 0;
        let upvote = this.upvotes;
        let downvote = this.downvotes;
        let balance = this.upvotes - this.downvotes;
        if(this.upvotes + this.downvotes > 50) {
            upvote = this.upvotes + Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            downvote = this.downvotes + Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
        }
        let rating = 'new';
        if(balance < 0) rating = 'unpopular';
        else if(this.upvotes > ((this.upvotes + this.downvotes) * 0.66)) rating = 'hot';
        else if(upvote > 100 && downvote > 100) rating = 'controversial';
        if(upvote + downvote < 10) rating = 'new';

        return [upvote, downvote, balance, rating];
    }
}

var forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

let score = solution.call(forumPost, 'score');
console.log(score);// [4, 5, -1, 'new']
solution.call(forumPost, 'downvote');
score = solution.call(forumPost, 'score');
console.log(score);// [4, 6, -2, 'unpopular']
solution.call(forumPost, 'upvote');
solution.call(forumPost, 'upvote');
score = solution.call(forumPost, 'score');
console.log(score);// [6, 6, 0, 'new']

for (let i = 0; i < 38; i++) {
    solution.call(forumPost, 'upvote');
}
score = solution.call(forumPost, 'score');
console.log(score);// [44, 6, 38, 'hot']
solution.call(forumPost, 'downvote');
score = solution.call(forumPost, 'score');
console.log(score);// [55, 18, 37, 'hot'];

// Bellow hot threshold
forumPost.upvotes = 132;
forumPost.downvotes = 68;
score = solution.call(forumPost, 'score');
console.log(score);// [165, 101, 64, 'controversial']

// Past hot threshold
forumPost.upvotes = 133;
score = solution.call(forumPost, 'score');
console.log(score);// [167, 102, 65, 'hot']