function solveClasses() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {
            const newTask = { id, taskName, priority };
            if(priority === 'high') this.tasks.unshift(newTask);
            else this.tasks.push(newTask);

            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask() {
            const indexTask = this.tasks.findIndex(t => t.priority === 'high');
            if(indexTask === -1)
                return `${this.firstName}, you have finished all your tasks. You can rest now.`;

            const name = this.tasks[indexTask].taskName;
            this.tasks.splice(indexTask, 1);
            return name;
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }

        reviewTasks() {
            const allTasks = this.tasks
                .map(t => t = `${t.id}: ${t.taskName} - ${t.priority}`)
                .join('\n');
            const existTasks = allTasks !== '' ? '\n' + allTasks : '';
            return 'Tasks, that need to be completed:' + existTasks;
        }
    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + bonus;
            this.task = [];
            this.experience = experience;
        }

        learn(years) {
            this.experience += years;
        }
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience + 5;
        }

        changeTaskPriority(taskId) {
            const index = this.tasks.findIndex(t => t.id === taskId);
            let task = this.tasks.splice(index, 1)[0];
            task.priority = task.priority === 'high' 
                ? task.priority = 'low' 
                : task.priority = 'high'; 
            task.priority === 'high' 
                ? this.tasks.unshift(task)
                : this.tasks.push(task);
            return task;
        }
    }

    return {
        Developer, Junior, Senior
    }
}

let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());
console.log(developer.doTask());
console.log(developer.doTask());
console.log('---------------');
const junior = new classes.Junior("Jonathan", "Joestar", 500, 2);
console.log(junior.getSalary());
console.log('---------------');

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "low");
console.log(senior.changeTaskPriority(1)["priority"]);
console.log(senior.tasks[1]);


