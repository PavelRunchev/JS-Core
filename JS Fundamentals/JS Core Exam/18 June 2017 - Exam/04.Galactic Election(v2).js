function galacticElections(ballots) {
    let elections = {};
    for (let ballot of ballots) {
        let system = ballot['system'];
        let candidate = ballot['candidate'];
        let votes = ballot['votes'];
        if (elections.hasOwnProperty(system)) {
            if (elections[system].hasOwnProperty(candidate)) {
                elections[system][candidate] += votes;
            } else {
                elections[system][candidate] = votes;
            }
        } else {
            elections[system] = {};
            elections[system][candidate] = votes;
        }
    }

    let tottalVotes = 0;
    for (let system in elections) {
        let winner = Object.keys(elections[system]).sort((a, b) => elections[system][b] - elections[system][a])[0];
        let sumVotes = 0;
        for (let candidate in elections[system]) {
            sumVotes += elections[system][candidate];
        }
        elections[system] = {};
        elections[system]['candidate'] = winner;
        elections[system]['votes'] = sumVotes;
        tottalVotes += sumVotes;
    }

    let winners = {};
    for (let system in elections) {
        if (winners.hasOwnProperty(elections[system]['candidate'])) {
            winners[elections[system]['candidate']] += elections[system]['votes'];
        } else {
            winners[elections[system]['candidate']] = elections[system]['votes'];
        }
    }

    let sortedWinners = Object.keys(winners).sort((a, b) => winners[b] - winners[a]);
    let sortedPercents = Object.values(winners).sort((a, b) => b - a).map(a => Math.floor(a / tottalVotes * 100));
    let sortedSYstem = Object.keys(elections).sort((a, b) => elections[b]['votes'] - elections[a]['votes']);

    if (sortedPercents[0] > 50) {
        if(sortedWinners.length > 1){
            console.log(`${sortedWinners[0]} wins with ${winners[sortedWinners[0]]} votes`);
            console.log(`Runner up: ${sortedWinners[1]}`);
            for(let system of sortedSYstem){
                if(elections[system]['candidate'] === sortedWinners[1]){
                    console.log(`${system}: ${elections[system]['votes']}`);
                }
            }
        }else {
            console.log(`${sortedWinners[0]} wins with ${winners[sortedWinners[0]]} votes`);
            console.log(`${sortedWinners[0]} wins unopposed!`);
        }

    } else {
        console.log(`Runoff between ${sortedWinners[0]} with ${sortedPercents[0]}% and ${sortedWinners[1]} with ${sortedPercents[1]}%`);
    }
}


galacticElections([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
    { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
    { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
    { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
    { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
    { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]);

galacticElections([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
    { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
    { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ]);


galacticElections([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]);