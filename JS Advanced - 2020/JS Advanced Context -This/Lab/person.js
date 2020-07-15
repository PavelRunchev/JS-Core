function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        set: function(value) {
            const [first, last] = value.split(' ');
            if(first !== undefined && last !== undefined) {
                this.firstName = first;
                this.lastName = last;
            }
        },

        get: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    });
    return this;
}

let person = new Person('Albert', 'Simpson');
console.log(person.fullName);//ALbert Simpson
person.firstName = 'Simon';
console.log(person.fullName);//Simon Simpson
person.fullName = 'Peter';//invalid input no set first and last name!
console.log(person.fullName);//Simon Simpson

