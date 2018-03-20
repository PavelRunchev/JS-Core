function restHouse(rooms, guests){
    "use strict";
    let dataRooms = new Map();
    let guestWithOutRooms = 0;
    for(let room of rooms){
        let roomSpace = room.type === "triple" ? 3 : 2;
        dataRooms.set(room.number, {type: room.type, emptyBeds: roomSpace});
    }

    for(let currentPair of guests){
        let roomFound = false;
        if(currentPair.first.gender !== currentPair.second.gender){
            for(let [key, value] of dataRooms){
                if(value.type === "double-bedded" && value.emptyBeds === 2){
                   value.guest = [];
                   value.guest = [currentPair.first, currentPair.second];
                   value.emptyBeds = 0;
                   roomFound = true;
                   break;
                }
            }
        }else if(currentPair.first.gender === currentPair.second.gender){
            for(let [key, value] of dataRooms){
                if(value.type === "triple" && value.emptyBeds > 1){
                    if(value.guest === undefined){
                        value.guest = [];
                    }else if(value.guest[0].gender !== currentPair.second.gender){
                        continue;
                    }
                    if(currentPair.first !== undefined){
                        value.guest.push(currentPair.first);
                        value.emptyBeds -= 1;
                    }
                    if(currentPair.second !== undefined){
                        value.guest.push(currentPair.second);
                        value.emptyBeds -= 1;
                    }
                    roomFound = true;
                    break;
                }else if(value.type === "triple" && value.emptyBeds === 1){
                    if(value.guest[0].gender === currentPair.second.gender){
                        value.guest.push(currentPair.first === undefined ? currentPair.second : currentPair.first);
                        value.emptyBeds -= 1;
                        currentPair.first = undefined;
                    }
                }
            }
        }
        if(!roomFound){
            guestWithOutRooms += currentPair.first === undefined ? 1 : 2;
        }
    }

    for(let [room, value] of [...dataRooms].sort()){
        console.log(`Room number: ${room}`);
        if(value.guest !== undefined){
            for(let guest of value.guest.sort(function (a, b) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())})){
                console.log(`--Guest Name: ${guest.name}`);
                console.log(`--Guest Age: ${guest.age}`);
            }
        }
        console.log(`Empty beds in the room: ${value.emptyBeds}`);
    }
    console.log(`Guests moved to the tea house: ${guestWithOutRooms}`);
}

restHouse([ { number: '101A', type: 'double-bedded' },
        { number: '104', type: 'triple' },
        { number: '101B', type: 'double-bedded' },
        { number: '102', type: 'triple' } ],
    [ { first: { name: 'Sushi & Chicken', gender: 'female', age: 15 },
        second: { name: 'Salisa Debelisa', gender: 'female', age: 25 } },
        { first: { name: 'Daenerys Targaryen', gender: 'female', age: 20 },
            second: { name: 'Jeko Snejev', gender: 'male', age: 18 } },
        { first: { name: 'Pesho Goshov', gender: 'male', age: 20 },
            second: { name: 'Gosho Peshov', gender: 'male', age: 18 } },
        { first: { name: 'Conor McGregor', gender: 'male', age: 29 },
            second: { name: 'Floyd Mayweather', gender: 'male', age: 40 } } ]);