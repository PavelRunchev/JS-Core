function Tickets(arr, sortCriterion) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for(let item of arr) {
        let tokens = item.split('|');
        let destination = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    tickets.sort((a, b) => {
        if(sortCriterion === 'price')
            return a.price - b.price;

        return a[sortCriterion].localeCompare(b[sortCriterion])
    });
 
    return tickets;
}

console.log(Tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));

console.log();

console.log(Tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|available',
'Philadelphia|132.20|departed',
'Chicago|140.20|available',
'Dallas|144.60|sold',
'New York City|206.20|sold',
'New York City|240.20|departed',
'New York City|305.20|departed'],
'price'
));