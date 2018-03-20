class Task{
    constructor(title, deadline){
        this.title = title;
        this.deadline = deadline;
        this.status = "Open";
    }

    get deadline(){
        return this._deadline;
    }

    set deadline(value){
        if(value < Date.now()){
            throw new Error("Date cannot be in the past!");
        }

        this._deadline = value;
    }

    get isOverdue(){
        return this._deadline < Date.now();
    }

    get sort(){
        if(this.isOverdue === true && this.status !== "Complete"){
            return 0;
        }else if(this.status === "In Progress"){
            return 1;
        }else if(this.status === "Open"){
            return 2;
        }else if(this.status === "Complete"){
            return 3;
        }
    }

    static comparator(a, b){

        let result = a.sort - b.sort;
        if(result === 0){
            return a.deadline - b.deadline;
        }

        return result;
    }

    toString(){
        let statusIcons = {
           'Open': "\u2731",
           'In Progress': "\u219D",
            'Complete': "\u2714"
        };

        if(this.status === "Complete"){
            return `[${statusIcons[this.status]}] ${this.title}`;
        }else if(this.isOverdue === true){
            return `[${"\u26A0"}] ${this.title} (overdue)`;
        }

        return `[${statusIcons[this.status]}] ${this.title} (deadline: ${this.deadline})`;
    }
}


let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);

let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later
