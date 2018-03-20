function monkeyPathcer(command) {
    let commands = {
        upvote: () => {
            "use strict";
            this.upvotes++;
        },
        downvote: () => {
            "use strict";
            this.downvotes++;
        },
        score: () => {
            "use strict";
            let currentUpVotes = this.upvotes;
            let currentDownVotes = this.downvotes;
            let totalVotes = currentUpVotes + currentDownVotes;
            let totalScore = currentUpVotes - currentDownVotes;
            let modified = 0;

            if(totalVotes > 50){
                modified = Math.ceil(Math.max(currentUpVotes, currentDownVotes) * 0.25);
            }

            function raiting() {
                if(totalVotes >= 10){
                    if(totalScore < 0){
                        return "unpopular";
                    }else if(currentUpVotes > totalVotes * 0.66){
                        return "hot";
                    }else if(currentUpVotes > 100){
                        return "controversial";
                    }else{
                        return "new";
                    }
                }else{
                    return "new";
                }
            }

            return [currentUpVotes + modified, currentDownVotes + modified, totalScore, raiting()];
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