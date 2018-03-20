function tickets(arr, dest) {
    let sortedDest = dest;
    let result = [];
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for(let el of arr){
        let [destination, price, status] = el.split("|");
        let ticket = new Ticket(destination, Number(price), status);
        result.push(ticket);
    }

    return result.sort((a,b) => {
        if(dest === "status" || dest === "destination"){
            return a[dest].localeCompare(b[dest])
        }else{
            return a[dest] - b[dest];
        }
    });
}

/*console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));*/

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'));