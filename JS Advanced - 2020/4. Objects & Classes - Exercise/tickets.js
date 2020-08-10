function tickets(inputArr, criterion) {
    let tickets = [];
    inputArr.forEach(el => {
        const [destinationName, price, status] = el.split('|');
        tickets.push({ destination: destinationName, price: Number(price), status });
    });
    function sortTickets(a, b) {
        const result = criterion === 'price' 
            ? a[criterion] - b[criterion] 
            : a[criterion].localeCompare(b[criterion]);
        if(result === 0)
            return criterion === 'price' 
                ? b[criterion] - a[criterion]  
                : b[criterion].localeCompare(a[criterion]);
        return result;
    }

    return tickets.sort(sortTickets);
}

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'destination'
));

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'status'
));