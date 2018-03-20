function galacticElections(array){
    let data = new Map();
    for(let ballot of array){

        if(!data.has(ballot.system)){
            data.set(ballot.system, new Map());
        }
        if(!data.get(ballot.system).has(ballot.candidate)){
            data.get(ballot.system).set(ballot.candidate, 0);
        }
        let currentVote = data.get(ballot.system).get(ballot.candidate);
        data.get(ballot.system).set(ballot.candidate, currentVote + ballot.votes);
    }

    let result = new Map();
    [...data].map(([sys, can]) => [sys, [...can].sort((a, b) => b[1] - a[1])
        .reduce((a, b) => [a[0], a[1] + b[1]])])
        .map(([sys, [can, vot]]) => [can, sys, vot])
        .forEach(([can, sys, vot], i, arr) => result.has(can) ? result.get(can).set(sys, vot) : result.set(can, new Map([[sys, vot]])));

    let ranking = [...result]
        .map(([c, s]) => [c, [...s].map(([s, v]) => v)
            .reduce((a, b) => a + b)])
        .sort(([c1, v1], [c2, v2]) => v2 - v1);

    let total = ranking.map(([c, v]) => v).reduce((a, b) => a + b);

    if (ranking[0][1] > total / 2) {
        console.log(`${ranking[0][0]} wins with ${ranking[0][1]} votes`);
        if (ranking.length > 1) {
            let runnerup = ranking[1][0];
            console.log(`Runner up: ${runnerup}`);
            [...result.get(runnerup)].sort(([s1, v1], [s2, v2]) => v2 - v1)
                .forEach(s => console.log(`${s[0]}: ${s[1]}`))
        } else {
            console.log(`${ranking[0][0]} wins unopposed!`);
        }
    } else {
        console.log(`Runoff between ${ranking[0][0]} with ${Math.floor(ranking[0][1] / total * 100)}% and ${ranking[1][0]} with ${Math.floor(ranking[1][1] / total * 100)}%`);
    }
}

galacticElections([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]);