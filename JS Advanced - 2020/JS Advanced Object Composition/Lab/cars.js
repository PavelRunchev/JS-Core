function cars(inputArr) {
    let cars = { };
    inputArr.forEach(e => {
        const [command, name, innerCommand, value] = e.split(' ');
        if(command === 'create') {
            if(innerCommand === 'inherit') 
                cars[name] = Object.create(cars[value]);
            else cars[name] = { };
        } else if(command === 'set') cars[name][innerCommand] = value;
        else if(command === 'print') {
            let output = [];
            for (const key in cars[name]) {
                output.push(`${key}:${cars[name][key]}`);
            }
            console.log(output.join(', '));
        }
    });
}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);
