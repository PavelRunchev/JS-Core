function monthlyCalendar(arr){
    "use strict";
    let[day, month, year] = arr.map(Number);
    let html = "<table>\n";
    html += " <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";

    let currentDate = new Date(year, month - 1, 1);
    let prevDayOfMonth = new Date(year, month - 1, 0).getDate();
    if(currentDate.getDay() !== 0){
        currentDate = new Date(year, month - 2, prevDayOfMonth - currentDate.getDay() + 1);
    }

    let nextMonth = new Date(year, month, 1).getMonth();
    let prevMonth = new Date(year, month - 2, 1).getMonth();
    for (let i = 0; i < 42; i++) {

        if(currentDate.getDay() === 0){
            html += "  <tr>";
        }

        if(currentDate.getMonth() === prevMonth){
            html += `<td class="prev-month">${currentDate.getDate()}</td>`;
        }else if(currentDate.getMonth() === nextMonth){
            html += `<td class="next-month">${currentDate.getDate()}</td>`;
        }else if(currentDate.getDate() === day){
            html += `<td class="today">${currentDate.getDate()}</td>`;
        }else{
            html += `<td>${currentDate.getDate()}</td>`;
        }

        if(currentDate.getDay() === 6){
            html += "</tr>\n";
        }
        
        currentDate.setDate(currentDate.getDate() + 1);
        if(currentDate.getMonth() === nextMonth && currentDate.getDay() === 0){
            break;
        }
    }

    html += "</table>\n";
    return html;
}

console.log(monthlyCalendar(['24', '12', '2012']));