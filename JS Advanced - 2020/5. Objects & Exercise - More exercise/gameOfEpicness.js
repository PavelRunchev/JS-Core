function gameOfEpicness(inputKingdoms, inputKingdomGenerals) {
    let storeKingdoms = [];
    inputKingdoms.forEach(e => {
        const kingdomName = e.kingdom;
        const general = e.general;
        const army = Number(e.army);
        const existKingdom = storeKingdoms.find(k => k.name === kingdomName);
        if(existKingdom) {
            let existGeneral = existKingdom.generals.find(g => g.general === general);
            if(existGeneral) { existGeneral.army += army; } 
            else { existKingdom.generals.push({ general, army, wins: 0, losses: 0 }); }
        } else {
            let newKingdom = { name: kingdomName, generals: [] };
            newKingdom.generals.push({ general, army, wins: 0, losses: 0 });
            storeKingdoms.push(newKingdom);
        }
    });

    function getInDeCreaseArmy(army, crease) {
        return crease === true 
            ? Math.floor(army + (army * 0.1))
            : Math.floor(army * 0.9);
    }

    function getWinnerKingdom(a, b) {
        const kingdomWinsA = a.generals.reduce((acc, prev) => acc + prev.wins, 0);
        const kingdomWinsB = b.generals.reduce((acc, prev) => acc + prev.wins, 0);
        const result = kingdomWinsB - kingdomWinsA;
        if(result === 0) {
            const kingdomLossesA = a.generals.reduce((acc, prev) => acc + prev.losses, 0);
            const kingdomLossesB = b.generals.reduce((acc, prev) => acc + prev.losses, 0);
            const resultByLosses = kingdomLossesA - kingdomLossesB;
            if(resultByLosses === 0)
                return a.name.localeCompare(b.name);
            return resultByLosses;
        }

        return result;
    }

    inputKingdomGenerals.forEach(e => {
        const [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = e;
        let attackKingdom = storeKingdoms.find(k => k.name === attackingKingdom);
        let defendKingdom = storeKingdoms.find(k => k.name === defendingKingdom);

        if((attackKingdom && defendKingdom) 
        && (attackKingdom.name !== defendKingdom.name)) {
            let attackGeneral = attackKingdom.generals.find(g => g.general === attackingGeneral);
            let defendGeneral = defendKingdom.generals.find(g => g.general === defendingGeneral);
            if(attackGeneral && defendGeneral) {
                if(attackGeneral.army > defendGeneral.army) {
                    attackGeneral.wins++;
                    defendGeneral.losses++;
                    attackGeneral.army = getInDeCreaseArmy(attackGeneral.army, true);
                    defendGeneral.army = getInDeCreaseArmy(defendGeneral.army, false);
                } else if(defendGeneral.army > attackGeneral.army) {
                    defendGeneral.wins++;
                    attackGeneral.losses++;
                    attackGeneral.army = getInDeCreaseArmy(attackGeneral.army, false);
                    defendGeneral.army = getInDeCreaseArmy(defendGeneral.army, true);
                    console.log();
                }
            }
        }
    });

    let a = storeKingdoms.sort(getWinnerKingdom);
    const winnerKingdom = storeKingdoms.sort(getWinnerKingdom)[0];
    const allGenerals = winnerKingdom.generals
        .sort((a,b) => b.army - a.army)
        .map(g => {
            return `\/\\general: ${g.general}\n` + 
                    `---army: ${g.army}\n` +
                    `---wins: ${g.wins}\n` +
                    `---losses: ${g.losses}`;
        }).join('\n');
    return `Winner: ${winnerKingdom.name}\n${allGenerals}`;
}

console.log(gameOfEpicness(
    [ 
        { kingdom: 'Maiden Way', general: 'Merek', army: 5000 },
        { kingdom: 'Stonegate', general: 'Ulric', army: 4900 },
        { kingdom: 'Stonegate', general: 'Doran', army: 70000 },
        { kingdom: 'YorkenShire', general: 'Quinn', army: 0 },
        { kingdom: 'YorkenShire', general: 'Quinn', army: 2000 },
        { kingdom: 'Maiden Way', general: 'Berinon', army: 100000 } 
    ],
    [ 
        ['YorkenShire', 'Quinn', 'Stonegate', 'Ulric'],
        ['Stonegate', 'Ulric', 'Stonegate', 'Doran'],
        ['Stonegate', 'Doran', 'Maiden Way', 'Merek'],
        ['Stonegate', 'Ulric', 'Maiden Way', 'Merek'],
        ['Maiden Way', 'Berinon', 'Stonegate', 'Ulric'] 
    ]
));

console.log(gameOfEpicness([ { kingdom: 'Stonegate', general: 'Ulric', army: 5000 },
    { kingdom: 'YorkenShire', general: 'Quinn', army: 5000 },
    { kingdom: 'Maiden Way', general: 'Berinon', army: 1000 } ],
[ ['YorkenShire', 'Quinn', 'Stonegate', 'Ulric'],
    ['Maiden Way', 'Berinon', 'YorkenShire', 'Quinn'] ]
));


console.log(gameOfEpicness([ 
    { kingdom: 'Maiden Way', general: 'Merek', army: 5000 },
    { kingdom: 'Stonegate', general: 'Ulric', army: 4900 },
    { kingdom: 'Stonegate', general: 'Doran', army: 70000 },
    { kingdom: 'YorkenShire', general: 'Quinn', army: 0 },
    { kingdom: 'YorkenShire', general: 'Quinn', army: 2000 }
],
[
    [ 'YorkenShire', 'Quinn', 'Stonegate', 'Doran' ],
    [ 'Stonegate', 'Ulric', 'Maiden Way', 'Merek']
]
));