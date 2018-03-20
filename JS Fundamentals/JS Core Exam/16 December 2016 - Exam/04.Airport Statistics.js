function airportStatistics(input){
    let planes = new Map();
    let airport = new Map();
    let towns = new Map();
    for(let statistic of input){
        let [id, town, passengers, action] = statistic.split(" ");
        passengers = Number(passengers);
        if(action === "land"){
            if(airport.has(id)){
                continue;
            }else{
                airport.set(id, 'land');
            }

            if(!towns.has(town)){
                towns.set(town, [0, 0]);
            }

            if(!planes.has(town)){
                planes.set(town, new Set());
            }
            towns.get(town)[0] += passengers;
            planes.get(town).add(id);
        }else if(action === "depart"){
            if(airport.has(id)){
                airport.delete(id);
            }else{
                continue;
            }

            if(!towns.has(town)){
                towns.set(town, [0, 0]);
            }

            if(!planes.has(town)){
                planes.set(town, new Set());
            }
            towns.get(town)[1] += passengers;
            planes.get(town).add(id);
        }
    }

    let sortedPLanesLeft = Array.from(airport.keys()).sort((a, b) => a.localeCompare(b));
    let sortedTowns = [...towns.entries()].sort(sortedTown);

    console.log("Planes left:");
    for(let plane of sortedPLanesLeft){
        console.log(`- ${plane}`);
    }
    for(let [town, stats] of sortedTowns){
        console.log(`${town}`);
        console.log(`Arrivals: ${stats[0]}`);
        console.log(`Departures: ${stats[1]}`);
        console.log("Planes:");
        for(let plane of [...planes.get(town)].sort((a,b) => a.localeCompare(b))){
            console.log(`-- ${plane}`);
        }
    }

    function sortedTown(a, b){
        let arrivalA = a[1][0];
        let arrivalB = b[1][0];
        let firstSort = arrivalB - arrivalA;
        if(firstSort !== 0){
            return firstSort;
        }else{
            return a[0].localeCompare(b[0]);
        }
    }
}

airportStatistics(['Airbus1 London1 100 land',
    'Airbus2 Paris 200 land',
    'Airbus3 Madrid 300 land',
    'Airbus4 Lisbon 400 land',
    'Airbus5 Moscow 500 land',
    'Airbus6 Sofia 600 land',
    'Airbus7 Belgrad 700 land',
    'Airbus8 Athenes 800 land',
    'Airbus9 Rabat 900 land',
    'Airbus10 Aljir 1000 land']);