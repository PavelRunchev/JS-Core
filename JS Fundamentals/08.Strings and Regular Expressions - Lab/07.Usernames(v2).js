function usernames(arrayEmails){
    let validUsernames = [];
    for (let email of arrayEmails) {
        let [user, domain] = email.split("@");
        let username = user + ".";
        let validDomain = domain.split(".").forEach(d => username += d[0]);
        validUsernames.push(username);
    }

    console.log(validUsernames.join(", "));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);