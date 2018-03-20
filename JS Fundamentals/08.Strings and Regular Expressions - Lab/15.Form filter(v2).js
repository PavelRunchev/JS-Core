function formFiller(name, email, phone, data){

        data.forEach(sentence => {
            sentence = sentence.replace(/<!([A-Za-z]+)!>/g, name);
            sentence = sentence.replace(/<@([A-Za-z]+)@>/g, email);
            sentence = sentence.replace(/<\+([A-Za-z]+)\+>/g, phone);
            console.log(sentence);
        });

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