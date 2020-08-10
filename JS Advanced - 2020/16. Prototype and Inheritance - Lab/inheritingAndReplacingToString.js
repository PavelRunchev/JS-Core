function toStringExtansion() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return { Person, Teacher, Student };
}

const ext = toStringExtansion();
const person = new ext.Person('Pesho', 'pesho@abv.bg');
console.log(person.toString());
const teacher = new ext.Teacher('Gosho', 'gosho@yahoo.com', 'JS Advanced');
console.log(teacher.toString());
const student = new ext.Student('Ani', 'ani@gmail.com', 'JS Advanced');
console.log(student.toString());