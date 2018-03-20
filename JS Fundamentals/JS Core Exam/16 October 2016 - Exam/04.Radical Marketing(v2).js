function radicalMarketing(array) {
    let dataPersons = new Map();
    let dataSubscribes = new Map();
    for(let command of array){
        let person = command.split("-");
        if(person.length === 1){
            if(!dataPersons.has(person[0])){
                dataPersons.set(person[0], new Set());
                dataSubscribes.set(person[0], new Set());
            }
        }else{
            let firstPerson = person[0];
            let secondPerson = person[1];
            if(dataPersons.has(firstPerson) && dataPersons.has(secondPerson)){
                if(firstPerson !== secondPerson){
                    dataPersons.get(secondPerson).add(firstPerson);
                    dataSubscribes.get(secondPerson).add(firstPerson);
                }
            }
        }
    }

    let sortedPerson = new Map([...dataPersons.entries()].sort(function(a, b){
        let firstPerson = a[0];
        let firstPersonScribes = a[1].size;

        let secondPerson = b[0];
        let secondPersonScribes = b[1].size;

        let result = secondPersonScribes - firstPersonScribes;
        if(result === 0){
            let firstEntryScribes = dataSubscribes.get(firstPerson).size;
            let secondEntryScribes = dataSubscribes.get(secondPerson).size;
            return secondEntryScribes - firstEntryScribes;
        }

        return result;
    }));

    let getFirstPerson = [...sortedPerson.entries()][0];
    console.log(getFirstPerson[0]);
    let count = 1;
    for(let subscribe of getFirstPerson[1]){
        console.log(`${count++}. ${subscribe}`);
    }
}
radicalMarketing(["Z",
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

radicalMarketing(["A",
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

