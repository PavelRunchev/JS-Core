function listProcessor(inputArr) {
    let data = [];
    inputArr.forEach(e => {
        let [command, value] = e.split(' ');
        if(command === 'add') data.push(value); 
        else if(command === 'remove') data = data.filter(e => e !== value);
        else if(command === 'print') console.log(data.join(','));
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);