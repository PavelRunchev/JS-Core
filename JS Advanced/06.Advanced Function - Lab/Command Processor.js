function commandProcessor(array) {
    let str = "";
    let closure = (function () {

        return {
            append: (s) => str += s,
            removeStart: (n) => str = str.substring(n),
            removeEnd: (n) => str = str.substring(0, str.length - n),
            print: () => console.log(str)
        };
    })();

    for(let element of array){
        let [command, value] = element.split(' ');
        closure[command](value);
    }
    return str;
}

commandProcessor(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']);

commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);

