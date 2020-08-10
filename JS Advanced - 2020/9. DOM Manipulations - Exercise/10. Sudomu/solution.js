function solve() {
    document.querySelectorAll('#exercise table tfoot tr td button')[0].addEventListener('click', quickCheck);
    document.querySelectorAll('#exercise table tfoot tr td button')[1].addEventListener('click', clear);
    let cells = document.querySelectorAll('#exercise table tbody tr td input');
    let table = document.querySelector('#exercise table');
    let message = document.querySelector('#check p');

    function quickCheck(e) {
        if (checkForRightSudomu()) {
            message.textContent = 'You solve it! Congratulations!';
            message.style.color = 'green';
            table.style.border = '2px solid green';
        } else {
            message.textContent = 'NOP! You are not done yet...';
            message.style.color = 'red';
            table.style.border = '2px solid red';
        }
    }

    function clear(e) {
        for (let c of cells) c.value = '';
        message.textContent = '';
        table.style.border = 'none';
    }

    function checkForRightSudomu() {
        let isSudomu = true;
        const arr = Array.from(cells).map(i => i = Number(i.value));
        let matrix = [
            [cells[0].value, cells[1].value, cells[2].value],
            [cells[3].value, cells[4].value, cells[5].value],
            [cells[6].value, cells[7].value, cells[8].value],
        ];

       for (let i = 0; i < matrix.length; i++) {
            const row = matrix[i];
            const col = matrix.map(row => row[i]);
           
            if(row.length !== [...new Set(row)].length 
            || col.length !== [...new Set(col)].length) {
                isSudomu = false;
                break;
            }
       }

        return isSudomu;
    }
}