function playingCards(inputCard, inputSuit) {
    const suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663'};
    const card = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let isValidCard, isValidSuit = false;

    if(card.includes(inputCard)) isValidCard = true;
    if([...Object.keys(suits)].includes(inputSuit)) isValidSuit = true;

    if(isValidCard && isValidSuit) {
        return inputCard + suits[inputSuit];
    }

    throw new Error('Error');
}

console.log(playingCards('2', 'S'));