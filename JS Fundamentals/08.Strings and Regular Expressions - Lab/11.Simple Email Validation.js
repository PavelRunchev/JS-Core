function simpleEmailValidation(string){
    let regex = new RegExp(/^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/g);
    console.log(regex.test(string) ? "Valid" : "Invalid");
}

simpleEmailValidation('valid@email.bg');
simpleEmailValidation('invalid@emai1.bg');