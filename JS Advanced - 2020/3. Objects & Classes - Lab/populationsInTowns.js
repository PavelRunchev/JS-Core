function solve(arr) {
    let towns = [];
    for (let str of arr) {
        const token = str.split(' <-> ');
        const name = token[0];
        const population = Number(token[1]);
        const existTown = towns.find(t => t.hasOwnProperty(name));
        if(!existTown)
            towns.push({ [name]: population });
        else
            existTown[name] += population;
    }

    return towns.map(t => {
        const [[name, population]] = Object.entries(t);
        return `${name} : ${population}`;
    }).join('\n');
}

function solve1(arr) {
    let towns = {};
    for (let str of arr) {
        const token = str.split(' <-> ');
        const name = token[0];
        const population = Number(token[1]);
        if(!towns.hasOwnProperty(name))
            towns[name] = 0;
        towns[name] += population;
    }

    let output = '';
    for (let key in towns) {
        output += `${key} : ${towns[key]}\n`;
    }

    return output.trim();
}

console.log(solve(['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000']));
console.log(solve1(['Istanbul <-> 100000','Honk Kong <-> 2100004','Jerusalem <-> 2352344','Mexico City <-> 23401925','Istanbul <-> 1000']));