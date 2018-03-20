function usernames(array){
    "use strict";
    let uniqueUsernames = new Set();
    for (let name of array) {
        uniqueUsernames.add(name);
    }


    for (let user of [...uniqueUsernames].sort(nameComparator)) {
        console.log(user);
    }
    console.log();
    function nameComparator(nameA, nameB){
        if(nameA.length < nameB.length){
            return -1;
        }else if(nameA.length > nameB.length){
            return 1;
        }
        return nameA.localeCompare(nameB);
    }
}

usernames(['Ashton','Kutcher','Ariel','Lilly','Keyden','Aizen','Billy','Braston']);

usernames(['Denise','Ignatius','Iris','Isacc', 'Indie', 'Dean','Donatello','Enfuego','Benjamin','Biser','Bounty','Renard', 'Rot']);