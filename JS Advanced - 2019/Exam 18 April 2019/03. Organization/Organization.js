class Organization {
    constructor(name, budget) {
        this.name = name;
        this.employees = [];
        this.budget = budget;
        this.departmentsBudget = { 
            marketing: Math.floor(this.budget * 0.4), 
            finance: Math.floor(this.budget * 0.25), 
            production: Math.floor(this.budget * 0.35)
        };
    }

    add(employeeName, department, salary) {
        if(this.departmentsBudget[department] < salary) {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`;
        }

        let newEmployee = { employeeName, department, salary };
        this.employees.push(newEmployee);
        this.departmentsBudget[department] -= salary;
        return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
    }


    employeeExists(employeeName) {
        if(this.employees.some(emp => emp.employeeName === employeeName)) {
            const employee = this.employees.find(e => e.employeeName === employeeName);
            return `Mr./Mrs. ${employee.employeeName} is part of the ${employee.department} department.`;
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    leaveOrganization(employeeName) {
        const employee = this.employees.find(e => e.employeeName === employeeName);
        if(employee) {
            //increase budget from employer salary!
            this.departmentsBudget[employee.department] += employee.salary;
            //leave employeer!
            this.employees = this.employees.filter(e => e.employeeName !== employeeName);
            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    status() {
        const employeeFromMarketing = this.employees
            .filter(e => e.department === 'marketing')
            .sort((a, b) => b.salary - a.salary)
            .map(w => w = w.employeeName);
        const employeeFromFinance = this.employees
            .filter(e => e.department === 'finance')
            .sort((a, b) => b.salary - a.salary)
            .map(e => e = e.employeeName);
        const employeeFromProduction = this.employees
            .filter(e => e.department === 'production')
            .sort((a, b) => b.salary - a.salary)
            .map(e => e = e.employeeName);

        let output = `${this.name.toUpperCase()} DEPARTMENTS:`;
        output += `\nMarketing | Employees: ${employeeFromMarketing.length}: ${employeeFromMarketing.join(', ')} | Remaining Budget: ${this.departmentsBudget['marketing']}`;
        output += `\nFinance | Employees: ${employeeFromFinance.length}: ${employeeFromFinance.join(', ')} | Remaining Budget: ${this.departmentsBudget['finance']}`;
        output += `\nProduction | Employees: ${employeeFromProduction.length}: ${employeeFromProduction.join(', ')} | Remaining Budget: ${this.departmentsBudget['production']}`;
        return output;
    }
}

// let organization = new Organization('SBTech', 1000);

// console.log(organization.add('Peter', 'marketing', 400));
// console.log(organization.add('Robert', 'production', 350));
// console.log(organization.add('Peppi', 'finance', 250));
// console.log(organization.employyeeExists('Robert'));
// console.log(organization.leaveOrganization('Peter'));
// console.log(organization.employyeeExists('Peter'));
// console.log(organization.leaveOrganization('Peter'));
// console.log(organization.status());

let organization = new Organization('SoftUni', 20000);

console.log(organization.add('Peter', 'marketing', 900));
console.log(organization.add('Robert', 'marketing', 1850));
console.log(organization.add('Asen', 'marketing', 1000));
console.log(organization.add('Ani', 'finance', 650));
console.log(organization.add('Sonq', 'finance', 1500));
console.log(organization.add('Gosho', 'finance', 1000));
console.log(organization.add('Stefan', 'production', 750));
console.log(organization.add('Kiril', 'production', 1300));
console.log(organization.add('Anabel', 'production', 1300));
//console.log(organization.leaveOrganization('Peter'));
//console.log(organization.leaveOrganization('Peter'));
console.log(organization.status());

