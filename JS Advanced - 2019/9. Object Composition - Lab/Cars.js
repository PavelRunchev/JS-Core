function getCars(arr) {
    let cars = {};

    for (let item of arr) {
        let commands = item.split(' ');
        let command = commands[0];
        let name = commands[1];
        if(command === 'create' && commands.length === 2) {
            cars[name] = { };
        }
        else if(command === 'create' && commands.length === 4) {
            let inherit = commands[2];
            let inheritName = commands[3];

            if(inherit === 'inherit') {
                cars[name] = Object.create(cars[inheritName]);
            }
        }
        else if(command === 'set') {
            let key = commands[2];
            let value = commands[3];
            cars[name][key] = value;
        }
        else if(command === 'print') {
            let result = [];
            for (let key in cars[name]) {
                result.push(`${key}:${cars[name][key]}`);
            }     
            
            console.log(result.join(', '));
        }
    }
}

getCars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c2']
);

