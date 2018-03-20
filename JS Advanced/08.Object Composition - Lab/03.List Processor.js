function processorList(input) {

    let executor = (function () {
        let arr = [];
        function add(str) {
            arr.push(str);
        }
        function remove(str) {
            arr = arr.filter(w => w !== str);
        }
        function print() {
            console.log(arr.join(","));
        }

        return {add, remove, print};
    })();

    for(let element of input){
        let [command, value] = element.split(" ");
        executor[command](value);
    }
}

processorList(['add hello', 'add again', 'remove hello', 'add again', 'print']);