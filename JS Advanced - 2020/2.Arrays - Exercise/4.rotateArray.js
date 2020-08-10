function solve(inputArr) {
    //optimization rotations and that biggest number!!!
    const rotate = Number(inputArr.pop()) % inputArr.length;
    for (let i = 0; i < rotate; i++) {
        const lastElement = inputArr.pop();
        inputArr.unshift(lastElement);
    }
	
    return inputArr.join(' ');
}

console.log(solve(['1', '2', '3', '4', '2']));
console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple', '15003']));