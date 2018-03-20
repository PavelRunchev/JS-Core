function captureTheNumbers(array){
    let numbersArray = [];
    let regex = /\d+/g;

    let match = regex.exec(array);
    while(match !== null){
        numbersArray.push(match[0]);
        match = regex.exec(array);
    }

    console.log(numbersArray.join(" "));
}

captureTheNumbers(['The300',
                'What is that?',
                'I think it’s the 3rd movie.',
                'Lets watch it at 22:45']);
captureTheNumbers(['123a456',
                    '789b987',
                    '654c321',
                    '0']);