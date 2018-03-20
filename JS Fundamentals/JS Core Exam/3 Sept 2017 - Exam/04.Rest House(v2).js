function restHouse(rooms, guests){
    "use strict";
    let dataRooms = [];
    let teaHouseCount = 0;

    for(let obj of rooms){
    let number = obj['number'];
    let type = obj['type'];
        let object = {};
        object['number'] = number;
        object['type'] = type;
        object['beds'] = type === "triple" ? 3 : 2;
        object['guest'] = [];
        dataRooms.push(object);
    }

    for(let guest of guests){
        let first = guest['first'];
        let second = guest['second'];
        if(first.gender !== second.gender){
            for(let room of dataRooms){
                if(room.type === "double-bedded" && room.beds === 2){
                    room['guest'].push(first);
                    room['guest'].push(second);
                    room.beds = 0;
                    first = undefined;
                    second = undefined;
                    break;
                }
            }
        }else{
            for(let room of dataRooms){
                if(room.type === "triple" && room.beds === 1){
                    if(first !== undefined && room.guest[0].gender === first.gender){
                        room['guest'].push(first);
                        room.beds -= 1;
                        first = undefined;
                    }else if(second !== undefined && room.guest[0].gender === second.gender){
                        room['guest'].push(second);
                        room.beds -= 1;
                        second = undefined;
                    }

                    if(first === undefined && second === undefined) break;

                }else if(room.type === "triple" && room.beds > 1){
                    if(room.guest.length === 0){
                        if(first !== undefined){
                            room['guest'].push(first);
                            room.beds -= 1;
                            first = undefined;
                        }
                        if(second !== undefined){
                            room['guest'].push(second);
                            room.beds -= 1;
                            second = undefined;
                        }
                        break;
                    }else{
                        if(first !== undefined && room.guest[0].gender === first.gender) {
                            room['guest'].push(first);
                            room.beds -= 1;
                            first = undefined;
                        }
                        if(second !== undefined && room.guest[0].gender === second.gender){
                            room['guest'].push(second);
                            room.beds -= 1;
                            second = undefined;
                        }
                    }

                    if(first === undefined && second === undefined) break;
                }

            }
        }
        if(first !== undefined){
            teaHouseCount++;
        }
        if(second !== undefined){
            teaHouseCount++;
        }
    }

    let sortedRooms = dataRooms.sort((a,b) => a.number.localeCompare(b.number));

    for(let object of sortedRooms){
        console.log(`Room number: ${object.number}`);
        for(let guest of [...object.guest].sort((a,b) => a.name.localeCompare(b.name))){
            console.log(`--Guest Name: ${guest.name}`);
            console.log(`--Guest Age: ${guest.age}`);
        }
        console.log(`Empty beds in the room: ${object.beds}`);
    }
    console.log(`Guests moved to the tea house: ${teaHouseCount}`);
}

restHouse([{"number":"481","type":"triple"},
{"number":"115A","type":"triple"},
{"number":"A621","type":"triple"}],
[{"first":{"name":"Ora Wilkerson","gender":"female","age":5},"second":{"name":"Lynette Pena","gender":"female","age":28}},
{"first":{"name":"Jimmy Jimenez","gender":"male","age":33},"second":{"name":"Troy Payne","gender":"male","age":64}},
{"first":{"name":"Salvatore Carroll","gender":"male","age":26},"second":{"name":"Clinton Santiago","gender":"male","age":63}},
{"first":{"name":"Tyrone Hogan","gender":"male","age":59},"second":{"name":"Jim Graham","gender":"male","age":6}},
{"first":{"name":"Katie Fisher","gender":"female","age":69},"second":{"name":"Erin Moreno","gender":"female","age":33}}]);