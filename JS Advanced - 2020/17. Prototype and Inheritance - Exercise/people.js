function people() {
    class Employee {
        constructor(name, age) {
            if(new.target === Employee) 
                throw new Error('Canot instantiate directly.');
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [ `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.` ];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [ `${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.` ];
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}

const s = people();
const junior = new s.Junior('Peter', 29);

const manager = new s.Manager('Ivan', 40);
manager.salary = 3000;
manager.collectSalary();
manager.divident = 500;
console.log(manager.divident);
console.log(manager.hasOwnProperty('salary'));
manager.collectSalary();