function solve(input){
    let data = new Map();
    let personSubscribe = new Map();

    for(let element of input){
        let person = element.split("-");
        if(person.length === 1){
            if(!data.has(person[0])){
                data.set(person[0], []);
                personSubscribe.set(person[0], 0);
            }
        }else if(person.length === 2){
            let firstPerson = person[0];
            let secondPerson = person[1];
            if(data.has(firstPerson) && data.has(secondPerson)){
                if(firstPerson !== secondPerson && data.get(secondPerson).indexOf(firstPerson) === -1){
                    let currentSubscribe = personSubscribe.get(firstPerson);
                    personSubscribe.set(firstPerson, currentSubscribe + 1);
                    data.get(secondPerson).push(firstPerson);
                }
            }
        }
    }

    let countMaxByPerson = Array.from(data).sort((a, b) => {
        let sorted = b[1].length - a[1].length;
        if(sorted === 0){
            return personSubscribe.get(b[0]) - personSubscribe.get(a[0]);
        }else{
            return sorted;
        }
    })[0];

    console.log(countMaxByPerson[0]);
    let count = 1;
    for(let subscribe of countMaxByPerson[1]){
        console.log(`${count++}. ${subscribe}`);
    }

}

solve(["Z",
    "O",
    "R",
    "D",
    "Z-O",
    "R-O",
    "D-O",
    "P",
    "O-P",
    "O-Z",
    "R-Z",
    "D-Z"]);

solve(['A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A',
    'B-A',
    'A-A']);


solve(["A",
     "B",
    "A-B",
     "C",
     "C-B",
     "D",
     "D-B",
     "E",
     "E-B",
     "A-C",
     "D-C",
     "E-C"]);

