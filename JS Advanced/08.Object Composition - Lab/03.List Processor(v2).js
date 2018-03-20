function processor(arr) {
    let executor = (function () {
        let array = [];
        return {
            add: (value) => array.push(value),
            remove: (value) => array = array.filter(w => w !== value),
            print:() => console.log(array.join(","))
        }
    })();

    for(let element of arr){
        let [command, value] = element.split(" ");
        executor[command](value);
    }
}


processor(['add hello', 'add again', 'remove hello', 'add again', 'print']);