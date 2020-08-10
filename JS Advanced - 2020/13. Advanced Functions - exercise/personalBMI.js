function personalBMI(name, age, weight, height) {
    let bmi = Math.round(weight / Math.pow((height / 100), 2));
    let status = 'obese';
    if(bmi < 18.5) status = 'underweight';
    else if(bmi < 25) status = 'normal';
    else if(bmi < 30) status = 'overweight';

    let person = {
        name,
        personalInfo: { age, weight, height },
        BMI: bmi,
        status
    };

    if(person.status === 'obese') 
        person['recommendation'] = 'admission required';

    return person;
}

console.log(personalBMI('Peter', 29, 75, 182));
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));