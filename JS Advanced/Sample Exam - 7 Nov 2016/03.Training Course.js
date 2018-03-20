class TrainingCourse{
    constructor(title, trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title, date){
        this.topics.push([title, date]);
        this.topics.sort((a, b) => a[1] - b[1]);

        return this;
    }

    get firstTopic(){
         let firstTopic = this.topics.slice(0, 1);
         if(firstTopic[0] === undefined){
             return undefined;
         }
         return {"title": firstTopic[0][0], "date": firstTopic[0][1]};
    }

    get lastTopic(){
        let lastTopic = this.topics.slice(-1);
        if(lastTopic[0] === undefined){
            return undefined;
        }
        return {"title": lastTopic[0][0], "date": lastTopic[0][1]};
    }

    toString(){
        let printCourse = `Course "${this.title}" by ${this.trainer}\n`;
        if(this.topics.length > 0){
            for(let topic of this.topics){
                printCourse += ` * ${topic[0]} - ${topic[1]}\n`;
            }
        }else{
            //printCourse += '\n';
        }

        return printCourse;
    }
}

let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
    .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
    .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
console.log("" + php);






