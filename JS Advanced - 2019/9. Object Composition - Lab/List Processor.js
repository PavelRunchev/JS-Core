function Processor (arr) {   
    collection = [];

    for (const item of arr) {
        let commands = item.split(' ');
        let command = commands[0];
        if(command === 'add')
            add(commands[1]);
        else if(command === 'remove')
            remove(commands[1]);
        else if(command === 'print')
            print();
    }

    function add(str) { collection.push(str); }
    function remove(str) { collection = collection.filter(s => s !== str); }
    function print() { console.log(collection.join(',')); }
}

Processor(['add pesho', 'add george', 'add peter', 'remove peter','print']);