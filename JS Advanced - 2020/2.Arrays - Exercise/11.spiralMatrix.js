function solve(inputRow, inputCol) {
	let matrix = [];
	let value = 1;
	let stepRight = { row: 0, col: 0, length: inputRow - 1 };
	let stepDown = { row: 0, col: inputCol - 1, length: inputRow };
	let stepLeft = { row: inputRow - 1, col: 0, length: inputRow };
	let stepUp = { row: inputRow - 1, col: 0, length: inputRow };
	fillWithInitialValue();

	while(checkIsFullMatrix()) {
		stepsRight();
		if(!checkIsFullMatrix()) break;
		stepsDown();
		if(!checkIsFullMatrix()) break;
		stepsLeft();
		if(!checkIsFullMatrix()) break;
		stepsUp();
	}

	function fillWithInitialValue() {
		for (let r = 0; r < inputRow; r++) {
			matrix[r] = [];
			for (let c = 0; c < inputCol; c++) {
				matrix[r][c] = 0;
			}
		}
	}

	function stepsRight() {
		for (let g = stepRight.col; g < stepRight.length; g++) {
			matrix[stepRight.row][g] = value++;
		}

		if(stepRight.row === stepRight.col && stepRight.row === stepRight.length)
			matrix[stepRight.row][stepRight.col] = value;
		stepRight.row++;
		stepRight.col++;
		stepRight.length--;
	}

	function stepsDown() {
		for (let g = stepDown.row; g < stepDown.length - 1; g++) {
			matrix[g][stepDown.col] = value++;
		}

		if(stepDown.row === stepDown.col && stepDown.row === stepDown.length)
			matrix[stepDown.row][stepDown.col] = value;
		stepDown.row++;
		stepDown.col--;
		stepDown.length--;
	}

	function stepsLeft() {
		for (let g = stepLeft.length - 1; g > stepLeft.col; g--) {
			matrix[stepLeft.row][g] = value++;
		}

		if(stepLeft.row === stepLeft.col && stepLeft.row === stepLeft.length)
			matrix[stepLeft.row][stepLeft.col] = value;
		stepLeft.row--;
		stepLeft.col++;
		stepLeft.length--;
	}

	function stepsUp() {
		for (let g = stepUp.length - 1; g > stepUp.col; g--) {
			matrix[g][stepUp.col] = value++;
		}

		if(stepUp.row === stepUp.col && stepUp.row === stepUp.length)
			matrix[stepUp.row][stepUp.col] = value;
		stepUp.row--;
		stepUp.col++;
		stepUp.length--;
	}

	function checkIsFullMatrix() {
		for (let r = 0; r < matrix.length; r++) {
			for (let c = 0; c < matrix[r].length; c++) {
				if(matrix[r][c] === 0) return true;
			}
			
		}

		return false;
	}

	return matrix.map(arr => arr = arr.join(' ')).join('\n');
}

console.log(solve(5,5));
console.log(solve(3,3));
console.log(solve(2,2));
console.log(solve(4,4));
console.log(solve(6,6));