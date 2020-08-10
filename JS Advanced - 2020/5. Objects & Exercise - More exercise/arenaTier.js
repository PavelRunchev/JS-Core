function arenaTier(inputArr) {
    let gladiators = [];
    let index = 0;
    let command = inputArr[index];;
    while(command !== 'Ave Cesar') {
        let token = command.split(' -> ');
        if(token.length === 3) {
            const [gladiatorName, technique, skill] = token;
            let existGladiator = gladiators.find(g => g.name === gladiatorName);
            if(existGladiator) {
                let existTechnique = existGladiator.techniques.find(t => t.name === technique);
                if(existTechnique) {
                    if(existTechnique.skill < Number(skill))
                        existTechnique.skill = Number(skill);
                } else { existGladiator.techniques.push({ name: technique, skill: Number(skill) }); }
            } else {
                let newGladiator = { 
                    name: gladiatorName,
                    techniques: []
                };
                newGladiator.techniques.push({ name: technique, skill: Number(skill) });
                gladiators.push(newGladiator);
            }
        } else {
            const [firstGladiator, secondGladiator] = token[0].split(' vs ');
            let existFirstGladiator = gladiators.find(g => g.name === firstGladiator);
            let existSecondGladiator = gladiators.find(g => g.name === secondGladiator);
            if(existFirstGladiator && existSecondGladiator) {
                let scorePointsFirstGladiator = 0;
                let scorePointsSecondGladiator = 0;
                for (let t1 of existFirstGladiator.techniques) {
                    let currTechniqueFirstGladiator = t1.name;
                    for (let t2 of existSecondGladiator.techniques) {
                        let currTechniqueSecondGladiator = t2.name;
                        //if both techniques are exist!
                        if(currTechniqueFirstGladiator === currTechniqueSecondGladiator) {
                            if(t1.skill > t2.skill) scorePointsFirstGladiator += t1.skill;
                            else scorePointsSecondGladiator += t2.skill;
                        }
                    }
                }

                if(scorePointsFirstGladiator > scorePointsSecondGladiator)
                    gladiators = gladiators.filter(g => g.name !== existSecondGladiator.name);
                else if(scorePointsSecondGladiator > scorePointsFirstGladiator)
                    gladiators = gladiators.filter(g => g.name !== existFirstGladiator.name);
            }
        }
        index++;
        command = inputArr[index];
    }

    function getAllSkills(arr) {
        return arr.reduce((acc, curr) => acc + curr.skill, 0);
    }

    function sortGT(a, b) {
        let result;
        if(a.hasOwnProperty('techniques')) result = getAllSkills(b.techniques) - getAllSkills(a.techniques);
        else result = b.skill - a.skill;
        if(result === 0)
            return a.name.localeCompare(b.name);
        return result;
    }

    return gladiators
        .sort(sortGT)
        .map(g => {
            const allTechniques = g.techniques
                .sort(sortGT)
                .map(t => t = `- ${t.name} <!> ${t.skill}`)
                .join('\n');
            return `${g.name}: ${getAllSkills(g.techniques)} skill\n${allTechniques}`;
        }).join('\n');
}

console.log(arenaTier([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
]));

//output:
//Stamat: 450 skill
//- Tiger <!> 250
//- Duck <!> 200
//Pesho: 400 skill
//- BattleCry <!> 400
//Gosho: 300 skill
//- PowerPunch <!> 300

console.log(arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]));

//output:
//Gladius: 700 skill
//- Shield <!> 250
//- Support <!> 250
//- Heal <!> 200
//Pesho: 400 skill
//- Duck <!> 400
