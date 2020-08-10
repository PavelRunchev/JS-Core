function solution() {
    let data = '';
    function append(string) { data += string; }
    function removeStart(n) { data = data.substring(n); }
    function removeEnd(n) { data = data.substring(0, data.length - n); }
    function print() { console.log(data); }

    return { append, removeStart, removeEnd, print }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print(); //loa


let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print(); //34

