class Player{
    constructor(nickName){
        this.nickName = nickName;
        this.scores = [];
    }

    addScore(score){
        if(typeof (score) === 'number' || Number(score)) {
            this.scores.push(Number(score));
            this.scores.sort((a, b) => b - a);
            return this;
        }
    }

    get scoreCount(){
        return this.scores.length;
    }

    get highestScore(){
        return this.scores[0];
    }

    get topFiveScore(){
        return this.scores.slice(0, 5);
    }

    toString(){
      return `${this.nickName}: [${this.scores}]`;
    }
}

let player = new Player('Misho');

player.addScore(130);
player.addScore('-3.14');
player.addScore(0);
player.addScore('22');
player.addScore(0.14);
player.addScore('Pesho');
player.addScore(555);
console.log(player.scoreCount); //6
console.log(player.highestScore); //555
console.log(player.toString()); //Misho: [555,130,22,0.14,0,-3.14]
console.log(player.topFiveScore); //[ 555, 130, 22, 0.14, 0 ]