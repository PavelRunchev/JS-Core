function solve(inputArr) {
	let matrix = [];
	createMatrix(inputArr[0], inputArr[1]);
	filledMatrix(inputArr[2], inputArr[3]);

	function createMatrix(width, height) {
		for (let row = 0; row < width; row++) {
			matrix.push('0'.repeat(height).split('').map(Number));
		}
	}

	function filledMatrix(x, y) {
		let value = 1;
		matrix[x][y] = value;
		let counter = 1;
		let isFilled = true;

		while(isFilled) {
			isFilled = false;
			let startRow = Math.max(0, x - counter);
			let endRow = Math.min(matrix.length - 1, x + counter);
			let startCol = Math.max(0, y - counter);
			let endCol = Math.min(matrix[0].length - 1, y + counter);
			value++;
			counter++;
			for (let row = startRow; row <= endRow; row++) {
				for (let col = startCol; col <= endCol; col++) {
					if(matrix[row][col] === 0) {
						matrix[row][col] = value;
						isFilled = true;
					}
				}
			}
		}
	}

	return matrix.map(e => e = e.join(' ')).join('\n');
}

//console.log(solve([4,4,0,0]));
//console.log(solve([5,5,2,2]));
console.log(solve([3,3,2,2]));