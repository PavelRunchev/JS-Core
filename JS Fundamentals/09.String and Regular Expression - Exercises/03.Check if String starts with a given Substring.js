function checkString(string, substring){
    console.log(string.startsWith(substring));
}

checkString('How have you been?', 'how');
checkString('The quick brown fox…', 'The quick brown fox…');