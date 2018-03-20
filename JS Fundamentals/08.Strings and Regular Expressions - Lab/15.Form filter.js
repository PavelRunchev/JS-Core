function formFiller(name, email, phone, data){
    let result = [];
    let regexName = /<!([A-Za-z]+)!>/g;
    let regexEmail = /<@([A-Za-z]+)@>/g;
    let regexPhone = /<\+([A-Za-z]+)\+>/g;
    for (let sentence of data) {
        result.push(sentence.replace(regexName, name)
            .replace(regexEmail, email)
            .replace(regexPhone, phone));
    }

    console.log(result.join('\n'));
}

formFiller('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
    'Welcome to your Personal profile.',
    'Here you can modify your profile freely.',
    'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
    'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);