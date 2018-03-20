function capitalizeTheWords(string){
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }

    console.log(words.join(' '));
}

capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!');