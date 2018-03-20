function matchTheDates(array) {
        let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
        let validDate = regex.exec(array);
        while(validDate !== null){
            let [date, day, month, year] = validDate;
            console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
            validDate = regex.exec(array);
        }
}

matchTheDates(`I am born on 30-Dec-1994.
This is not date: 512-Jan-1996.
My father is born on the 29-Jul-1955.
`);

matchTheDates(`1-Jan-1999 is a valid date.
So is 01-July-2000.
I am an awful liar, by the way – Ivo, 28-Sep-2016.
`);