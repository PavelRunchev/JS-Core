class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        //check is valid input employee
        this.constructor.verifyEmployee(username);
        this.constructor.verifyEmployee(salary);
        this.constructor.verifyEmployee(position);
        this.constructor.verifyEmployee(department);

        let currentDepartment = this.departments.find(d => d.name === department);
        if(!currentDepartment) {
            currentDepartment = { name: department, employees: [] };
            this.departments.push(currentDepartment);
        }

        currentDepartment.employees.push({ name: username, salary, position });
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        const bestDepart = this.departments.map(d => {
                d.averageSalary = d.employees.reduce((acc, curr) => acc + curr.salary, 0) / d.employees.length;
                return d;
            }).sort((a,b) => b.averageSalary - a.averageSalary)[0];
        const allEmployees = bestDepart.employees
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .map(e => e = `${e.name} ${e.salary} ${e.position}`)
            .join('\n');
        return `Best Department is: ${bestDepart.name}\n` +
            `Average salary: ${bestDepart.averageSalary.toFixed(2)}\n` +
            allEmployees;
    }

    static verifyEmployee(value) {
        if(value === '' || value === null || value === undefined || value < 0)
            throw new Error('Invalid input!');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
