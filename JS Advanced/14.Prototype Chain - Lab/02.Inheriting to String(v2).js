function personAndTeacher(){
    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }

        toString(){
            return `${super.toString().slice(0, -1)}, subject: ${this.subject})`;
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }

        toString(){
            return `${super.toString().slice(0, -1)}, course: ${this.course})`;
        }
    }

    return {Person, Teacher, Student}
}

let func = personAndTeacher();
let Person = func.Person;
let Teacher = func.Teacher;
let Student = func.Student;

let person = new Person("Maria", "abv.bg");
console.log(person.toString());
let teacher = new Teacher("Sasho", 'yahoo.com', "Java");
console.log(teacher.toString());
let student = new Student("Bobo", "abv.bg", "JS-Advanced");
console.log(student.toString());