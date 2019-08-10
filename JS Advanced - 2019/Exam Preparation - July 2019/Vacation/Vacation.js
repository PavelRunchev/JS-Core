class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if(budget < this.budget)
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;


        if(this.kids.hasOwnProperty(grade)) {
            for (const key in this.kids) {
                for (let item of this.kids[key]) {
                    const [kidName, KidBudget] = item.split('-');
                    if(name === kidName && Number(key) === grade) {
                        return `${name} is already in the list for this ${this.destination} vacation.`;
                    }                                
                }
            }
           
            this.kids[grade].push(`${name}-${budget}`); 
        }
        else{
            this.kids[grade] = [];
            this.kids[grade].push(`${name}-${budget}`);
        }

        return this.kids[grade];
    }

    removeChild(name, grade) {
        for (const key in this.kids) {
           for (let i = 0; i < this.kids[key].length; i++) {
               const [kidName, kidBudget] = this.kids[key][i].split('-');
               if(name === kidName && Number(key) === grade) {
                   this.kids[key].splice(i, 1);
                   return this.kids[grade];
               }
           }
        }

        return `We couldn't find ${name} in ${grade} grade.`;
    }

    get numberOfChildren() {
        let countOfKids = 0;
        for (const key in this.kids) {
            for (const kid of this.kids[key]) {
                countOfKids++;
            }
        }

        return countOfKids;
    }

    toString() {
        if(this.numberOfChildren > 0) {
            let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`;
            //no needed sorting object! it is sorted auto,  key is number!
            for (const key in this.kids) {
                let count = 1;
                result += `\nGrade: ${key}`;
                for (const kid of this.kids[key]) {
                    result += `\n${count++}. ${kid}`;
                }
            }

            return result + '\n';
        }
        else {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
    }
}

// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));
//---------------------------------------------------------

// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// vacation.registerChild('Gosho', 5, 2000);
// vacation.registerChild('Lilly', 6, 2100);

// console.log(vacation.removeChild('Gosho', 9));

// vacation.registerChild('Pesho', 6, 2400);
// vacation.registerChild('Gosho', 5, 2000);

// console.log(vacation.removeChild('Lilly', 6));
// console.log(vacation.registerChild('Tanya', 5, 6000))
// --------------------------------------------------------

//let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
// vacation.registerChild('Mitko', 10, 5500);
// vacation.registerChild('Gosho', 5, 3000);
// vacation.registerChild('Lilly', 6, 1500);
// vacation.registerChild('Pesho', 7, 4000);
// vacation.registerChild('Tanya', 5, 5000);
//console.log(vacation.toString());


let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);
vacation.registerChild('Gosho', 12, 3400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Skaro', 11, 400);
vacation.registerChild('Gosho', 11, 3444);
console.log(vacation.toString());
