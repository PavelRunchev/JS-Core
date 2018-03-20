function monkeyPathcer(command) {

    let obj = this;
    let commands = {
        upvote: function() {
            "use strict";
            obj['upvotes']++;
        },
        downvote: function() {
            "use strict";
            obj['downvotes']++;
        },
        score: function() {
            "use strict";
            let rating = "new";
            let currentUpVotes = obj['upvotes'];
            let currentDownVotes = obj['downvotes'];
            let totalVotes = currentUpVotes + currentDownVotes;
            let totalScore = currentUpVotes - currentDownVotes;

            let modified = 0;
            if(totalVotes > 50){
                 modified = Math.ceil(Math.max(currentUpVotes, currentDownVotes) * 0.25);
            }

            if(totalVotes >= 10){
                if(totalScore < 0){
                    rating = "unpopular";
                }else if(currentUpVotes > totalVotes * 0.66){
                    rating = "hot";
                }else if(currentUpVotes > 100) {
                    rating = "controversial";
                }
            }

            return [currentUpVotes + modified, currentDownVotes + modified, totalScore, rating];
        }
    };
    return commands[command]();
}

let post = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

let score = monkeyPathcer.call(post, 'score');
console.log(score);
monkeyPathcer.call(post, 'downvote');
score = monkeyPathcer.call(post, 'score');
console.log(score);
monkeyPathcer.call(post, 'upvote');
monkeyPathcer.call(post, 'upvote');
score = monkeyPathcer.call(post, 'score');
console.log(score);

for(let i = 0; i < 38; i++){
    monkeyPathcer.call(post, 'upvote');
}

score = monkeyPathcer.call(post, 'score');
console.log(score);
monkeyPathcer.call(post, 'downvote');
score = monkeyPathcer.call(post, 'score');
console.log(score);


//output
//[ 4, 5, -1, 'new' ]
//[ 4, 6, -2, 'unpopular' ]
//[ 6, 6, 0, 'new' ]
//[ 44, 6, 38, 'hot' ]
//[ 55, 18, 37, 'hot' ]