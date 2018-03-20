function usernames(arrayEmails){
    let validUsernames = [];
    let validUser = "";
    for (let email of arrayEmails) {
        let tokens = email.split("@");
        let domains = tokens[1].split(".");
        validUser = tokens[0] + ".";
        for (let domain of domains) {
            validUser += domain[0];
        }
        validUsernames.push(validUser);
    }
    console.log(validUsernames.join(", "));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);