function calendar(array) {
    let day = +array[0];
    let month = +array[1] - 1;
    let year = +array[2];
    let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    let container = $('#content');
    let table = $('<table></table>');
    let tbody = $('<tbody></tbody>');
    let date = new Date();
    date.setFullYear(year, month);
    date.setDate(1);

    $(`<caption>${monthNames[date.getMonth()]} ${date.getFullYear()}</caption>`).appendTo(table);
    let trHeaders = $('<tr></tr>');
    weekNames.forEach(dayOfWeek => {
        "use strict";
        $(`<th>${dayOfWeek}</th>`).appendTo(trHeaders);
    });
    trHeaders.appendTo(table);

    //empty days
    let emptyCell = date.getDay() === 0 ? 6 : date.getDay() - 1;
    let emptyTrFront = $('<tr></tr>');
    for(let i = 0; i < emptyCell; i++){
        $('<td></td>').appendTo(emptyTrFront);
    }

    if(emptyCell !== 0){
        for(let i = 0; i < 7 - emptyCell; i++){
            if(date.getDate() === day){
                $(`<td class="today">${date.getDate()}</td>`).appendTo(emptyTrFront);
            }else{
                $(`<td>${date.getDate()}</td>`).appendTo(emptyTrFront);
            }

            date.setDate(date.getDate() + 1);
        }
        emptyTrFront.appendTo(tbody);
    }

    //cell with dates
    let daysForMonth = $('<tr></tr>');
    let index = 0;
    while(date.getMonth() === month){
        if(index % 7 === 0 && index !== 0){
            daysForMonth.appendTo(tbody);
            daysForMonth = $('<tr></tr>');
        }

        if(date.getDate() === day){
            $(`<td class="today">${date.getDate()}</td>`).appendTo(daysForMonth);
        }else{
            $(`<td>${date.getDate()}</td>`).appendTo(daysForMonth);
        }
        date.setDate(date.getDate() + 1);
        index++;
    }
    date.setDate(date.getDate() - 1);

    //empty days after currentMonth
    if(date.getDay() !== 0){
        for(let i = 0; i < 7 - date.getDay(); i++){
            $('<td></td>').appendTo(daysForMonth);
        }
    }

    daysForMonth.appendTo(tbody);
    tbody.appendTo(table);
    table.appendTo(container);
}