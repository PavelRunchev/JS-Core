function constructionCrew(inputObj) {
    if(inputObj.handsShaking){
        inputObj.bloodAlcoholLevel += inputObj.weight * inputObj.experience * 0.1;
        inputObj.handsShaking = false;
    }

    return inputObj;
}

console.log(constructionCrew({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }));

console.log(constructionCrew({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }));

console.log(constructionCrew({ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false }));