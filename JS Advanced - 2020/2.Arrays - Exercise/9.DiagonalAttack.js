function solve(inputMatrix) {
	let matrix = inputMatrix.map(arr => arr = arr.split(' ').map(Number));
	let leftDiagonalSum = 0;
	let rightDiagonalSum = 0;
	getSumDiagonals();

	function getSumDiagonals() {
		let leftIndex = matrix.length - 1;
		let rightIndex = 0;
		matrix.forEach(el => {
			rightDiagonalSum += el[rightIndex++];
			leftDiagonalSum += el[leftIndex--];
		});
	}
	
	function ifBothDiagonalsIsEqual() {
		for (let row = 0; row < matrix.length; row++) {
			for (let col = 0; col < matrix[row].length; col++) {
				// check rightDiagonal is row !== col
				// check leftDiagonal is col !== matrix.length - 1 - row
				if(row !== col && col !== matrix.length - 1 - row) 
					matrix[row][col] = leftDiagonalSum;
			}
		}
	}

	if(leftDiagonalSum === rightDiagonalSum) 
		ifBothDiagonalsIsEqual();

	return matrix.map(e => e.join(' ')).join('\n');
}

console.log(solve([
	'1 1 1',
	'1 1 1',
	'1 1 0'
]));

console.log(solve([
	'5 3 12 3 1',
	'11 4 23 2 5',
	'101 12 3 21 10',
	'1 4 5 2 2',
	'5 22 33 11 1'
]));