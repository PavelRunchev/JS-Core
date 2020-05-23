function solve() {
    const databasePosition = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 
        'H': 7, 'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15,
        'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 'Z': 25
    };

    let dataBase = document.querySelectorAll('#exercise div ol li');
    //add button
    document.querySelector('#exercise article button').addEventListener('click', addedToDataBase);

    function addedToDataBase() {
        let inputPerson = document.querySelector('#exercise article input').value;
        const firstLetter = inputPerson[0].toUpperCase();
        const person = Array.from(inputPerson).slice(1).map(a => a = a.toLowerCase()).join('');

        const column = databasePosition[firstLetter];
        let currentColumn = dataBase[column];

        if(currentColumn.textContent.length > 0) {
            currentColumn.textContent += ', ' + firstLetter + person;
        } else {
            currentColumn.textContent = firstLetter + person;
        }

        //clear input field
        document.querySelector('#exercise article input').value = '';
    }
}