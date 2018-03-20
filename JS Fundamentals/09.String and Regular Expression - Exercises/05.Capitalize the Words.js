function capitalizeTheWords(string){
    let words = string.split(' ')
        .map(word => word = word[0].toUpperCase() + word.substring(1).toLowerCase());
    console.log(words.join(' '));
}

capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!');