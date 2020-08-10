function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

Person.prototype.nationality = 'Bulgarian';
console.log(Person.prototype.nationality);
