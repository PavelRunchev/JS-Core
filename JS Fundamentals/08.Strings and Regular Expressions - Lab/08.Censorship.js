function censorship(text, array){
    for (let censor of array) {
        let regex = new RegExp(censor, 'g');
        let replacedLength = '-'.repeat(censor.length);
        text = text.replace(regex ,replacedLength);
    }

    console.log(text);
}

censorship('roses are red, violets are blue', [', violets are', 'red']);
censorship('David Ruben Piqtoukun (born 1950) is an Inuit artist from Paulatuk,' +
    ' Northwest Territories. His output includes sculpture and prints; the sculptural work is innovative in its use of mixed media.' +
    ' His materials and imagery bring together modern and traditional Inuit stylistic elements in a personal vision. ' +
    'An example of this is his work "The Passage of Time" (1999), which portrays a shaman in the form of a salmon moving through a hole in a hand.' +
    ' While shamanic imagery is common in much of Inuit art, the hand in this work is sheet metal, not a traditional material such as walrus ivory, ' +
    'caribou antler or soapstone. Ruben\'s brother, Abraham Apakark Anghik Ruben, is also a sculptor. ' +
    'Fellow Inuit artist Floyd Kuptana learned sculpting techniques as an apprentice to David Ruben.', ['Inuit']);