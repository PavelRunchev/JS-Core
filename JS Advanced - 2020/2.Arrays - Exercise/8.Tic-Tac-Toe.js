function solve(inputArr) {
	let matrix = [
		[false, false, false],
		[false, false, false],
		[false, false, false]
	];
	
	let countBoardPlace = 0;
	let isFirstPlayer = true;
	for (let g = 0; g < inputArr.length; g++) {
		const [row, col] = inputArr[g].split(' ');
		let player = isFirstPlayer ? 'X' : 'O';
		
		if(matrix[+row][+col] === false) {
			matrix[+row][+col] = player;
			countBoardPlace++;
		} else {
			console.log('This place is already taken. Please choose another!');
			continue;
		}
			
		if(checkForWinner(player)) 
			return output(true, player);

		isFirstPlayer = isFirstPlayer === true ? false : true;
		if(countBoardPlace === 9) break;
	}

	function checkForWinner(pl) {
		const rightDiagonal = matrix[0][0] === pl && matrix[1][1] === pl && matrix[2][2] === pl;
		const leftDiagonal = matrix[0][2] === pl && matrix[1][1] === pl && matrix[2][0] === pl;
		const rows = matrix.some(b => b.every(e => e === pl));
		let columns = false;
		for (let r = 0; r < matrix.length; r++) {
			let arr = [];
			for (let c = 0; c < matrix[r].length; c++) {
				if(matrix[c][r] === pl) arr.push(pl);
			}
			
			if(arr.length === 3) columns = true; break;
		}
		
		if(rows || columns || rightDiagonal || leftDiagonal) 
			return true;
		return false;
	}

	function output(winner, player) {
		const output = winner === true ? `Player ${player} wins!\n`
			: 'The game ended! Nobody wins :(\n';
		return output +	matrix.map(m => m = m.join('\t')).join('\n');
	}
	
	return output(false);
}


// console.log(solve([
// 	"0 1",
// 	"0 0",
// 	"0 2", 
// 	"2 0",
// 	"1 0",
// 	"1 1",
// 	"1 2",
// 	"2 2",
// 	"2 1",
// 	"0 0"
// ]));

console.log(solve([
	"0 1",
	"0 0",
	"0 2",
	"2 0",
	"1 0",
	"1 2",
	"1 1",
	"2 1",
	"2 2",
	"0 0"
]));

// console.log(solve([
// 	"0 0",
// 	"0 0",
// 	"1 1",
// 	"0 1",
// 	"1 2",
// 	"0 2",
// 	"2 2",
// 	"1 2",
// 	"2 2",
// 	"2 1"
// ]));