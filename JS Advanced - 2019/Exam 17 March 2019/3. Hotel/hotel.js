class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.rooms = { 
            single: Math.floor(this.capacity * 0.5), 
            double: Math.floor(this.capacity * 0.3), 
            maisonette: Math.floor(this.capacity * 0.2) 
        };
        this.roomsPricing = { single: 50, double: 90, maisonette: 135 };
        this.servicesPricing = { food: 10, drink: 15, housekeeping: 25 };
    }

    rentARoom(clientName, roomType, nights) {
        let output = [];
        if(this.rooms[roomType] <= 0) {
            output.push(`No ${roomType} rooms available!`);

            let roomKeys = Object.keys(this.rooms);
            for (let room of roomKeys) {
                if(this.rooms[room] > 0) {
                    output.push(`Available ${room} rooms: ${this.rooms[room]}.`);
                }
            }

            return output.join(' ');
        }
            

        let newclient = { 
            clientName, 
            roomType, 
            nights, 
            currentBookingNumber: this.currentBookingNumber
        };

       
        const result = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;
        this.bookings.push(newclient);
        this.rooms[roomType]--;
        this.currentBookingNumber++;
        return result;
    }

    roomService(currentBookingNumber, serviceType) {
        if(!this.bookings.some(b => b.currentBookingNumber === currentBookingNumber)) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        if(!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }

        for (let room of this.bookings) {
            if(room.currentBookingNumber === currentBookingNumber) {
                if(!room.hasOwnProperty('services'))
                    room['services'] = [];

                room['services'].push(serviceType);
                return `Mr./Mrs. ${room.clientName}, Your order for ${serviceType} service has been successful.`
            }
        }
    }

    checkOut(currentBookingNumber) {
        if(!this.bookings.some(b => b.currentBookingNumber === currentBookingNumber)) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        //get current room
        let checkOutBooking = this.bookings.find(b => b.currentBookingNumber === currentBookingNumber);

        let totalMoney = +checkOutBooking.nights * this.roomsPricing[checkOutBooking.roomType];

        //increase room because ii's free!
        this.rooms[checkOutBooking.roomType]++;
        //remove currentBookingNumber from bookings!!! /test 16
        this.bookings = this.bookings.filter(b => b.currentBookingNumber !== currentBookingNumber);

        if(checkOutBooking.hasOwnProperty('services')) {
            let totalServiceMoney = 0;
            for (let food of checkOutBooking.services) {
                totalServiceMoney += this.servicesPricing[food];
            }
            return `We hope you enjoyed your time here, Mr./Mrs. ${checkOutBooking.clientName}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
        }
        else {
            return `We hope you enjoyed your time here, Mr./Mrs. ${checkOutBooking.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;
        }
    }

    report() {
        let output = `${this.name.toUpperCase()} DATABASE:\n${'-'.repeat(20)}`;
        if(this.bookings.length === 0) {
            return output += `\nThere are currently no bookings.`;
        }

        for (let i = 0; i < this.bookings.length; i++) {
            output += `\nbookingNumber - ${this.bookings[i].currentBookingNumber}`;
            output += `\nclientName - ${this.bookings[i].clientName}`;
            output += `\nroomType - ${this.bookings[i].roomType}`;
            output += `\nnights - ${this.bookings[i].nights}`;
            if(this.bookings[i].services !== undefined)
                output += `\nservices: ${this.bookings[i].services.join(', ')}`;

            if(i == this.bookings.length - 1) continue;

            output += `\n${'-'.repeat(10)}`;
        }

        return output;
    }
}

let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');
console.log(hotel.checkOut(3));
console.log(hotel.checkOut(2));
console.log(hotel.checkOut(1));
console.log(hotel.report());


