function dart(){
	let finishGame = false;
	let homePlayer = document.querySelectorAll('#Home > p')[0];
	let awayPlayer = document.querySelectorAll('#Away > p')[0];

	let homePlayerPoints = Number(homePlayer.textContent);
	let awayPlayerPoints = Number(awayPlayer.textContent);
	let firstPlayer = true;
	let secondPlayer = false;

	const handleScore = function (score) {
		return (ev) => {
			ev.stopPropagation();

			if(finishGame) {
 				firstPlayer = false;
				secondPlayer = false;
				
			}

			if(firstPlayer) {
				homePlayerPoints += score;
				homePlayer.textContent = homePlayerPoints;
				document.querySelectorAll('#turns > p')[0].textContent = 'Turn on Home';
				document.querySelectorAll('#turns > p')[1].textContent = 'Next is Away';
			}
			
			if(secondPlayer) {
				awayPlayerPoints += score;
				awayPlayer.textContent = awayPlayerPoints;
				document.querySelectorAll('#turns > p')[0].textContent = 'Turn on Away';
				document.querySelectorAll('#turns > p')[1].textContent = 'Next is Home';
			}
				
			if(firstPlayer) {
				firstPlayer = false;
				secondPlayer = true;
			}
			else {
				firstPlayer = true;
				secondPlayer = false;
			}

			winnerOrLoser(homePlayerPoints, awayPlayerPoints);
		}
	}

	//this is NodeList (query slelector All) convert to normal Array!
	//now filter and map methods works!
	let points = Array.prototype
		.slice
		.call(document.querySelectorAll('#scoreBoard table tr td'))
		.map(e => e = e.textContent.split(' '))
		.filter(e => e.length > 1)
		.map(e => Number(e[0]));
	
	if(points.length === 6) {
		document.querySelector('#firstLayer').addEventListener('click', handleScore(points[0]));
		document.querySelector('#secondLayer').addEventListener('click', handleScore(points[1]));
		document.querySelector('#thirdLayer').addEventListener('click', handleScore(points[2]));
		document.querySelector('#fourthLayer').addEventListener('click', handleScore(points[3]));
		document.querySelector('#fifthLayer').addEventListener('click', handleScore(points[4]));
		document.querySelector('#sixthLayer').addEventListener('click', handleScore(points[5]));
	}
	
	function winnerOrLoser(firstPlayerPoints, secondPlayerPoints) {
		if(firstPlayerPoints >= 100) {
			document.querySelectorAll('#Home > p')[1].style.background = 'green';
			document.querySelectorAll('#Away > p')[1].style.background = 'red';
			finishGame = true;
			return;
		}

		if(Number(secondPlayerPoints) >= 100) {
			document.querySelectorAll('#Home > p')[1].style.background = 'red';
			document.querySelectorAll('#Away > p')[1].style.background = 'green';
			finishGame = true;
			return;
		}
	}
}


// function dart() {
// 	let $firstLayer = $('#firstLayer');
// 	let $secondLayer = $('#secondLayer');
// 	let $thirdLayer = $('#thirdLayer');
// 	let $fourthLayer = $('#fourthLayer');
// 	let $fifthLayer = $('#fifthLayer');
// 	let $sixthLayer = $('#sixthLayer');

// 	let $homePoints = $('#Home p:first');
// 	let $awayPoints = $('#Away p:first');
// 	let isHome = true;
// 	let isWinner = false;

// 	if (isWinner) {
// 		$firstLayer.off('click');
// 		$secondLayer.off('click');
// 		$thirdLayer.off('click');
// 		$fourthLayer.off('click');
// 		$fifthLayer.off('click');
// 		$sixthLayer.off('click');
// 	}

// 	let points = $('#scoreBoard tbody td')
// 		.filter(x => x % 2 !== 0)
// 		.text()
// 		.split(' points')
// 		.filter(x => x)
// 		.map(x => Number(x));

// 	$firstLayer.on('click', function (e) {
// 		if (e.target === e.currentTarget) {
// 			getPoints(points[0]);
// 			hasWinner();
// 		}
// 	});

// 	$secondLayer.on('click', function (e) {
// 		if (e.target === e.currentTarget) {
// 			getPoints(points[1]);
// 			hasWinner();
// 		}
// 	});

// 	$thirdLayer.on('click', function (e) {
// 		if (e.target === e.currentTarget) {
// 			getPoints(points[2]);
// 			hasWinner();
// 		}
// 	});

// 	$fourthLayer.on('click', function (e) {
// 		if (e.target === e.currentTarget) {
// 			getPoints(points[3]);
// 			hasWinner();
// 		}
// 	});

// 	$fifthLayer.on('click', function (e) {
// 		if (e.target === e.currentTarget) {
// 			getPoints(points[4]);
// 			hasWinner();
// 		}
// 	});

// 	$sixthLayer.on('click', function (e) {
// 		if (e.target === e.currentTarget) {
// 			getPoints(points[5]);
// 			hasWinner();
// 		}
// 	});

// 	function getPoints(point) {
// 		if (isHome) {
// 			let totalPoints = Number($homePoints.text());
// 			totalPoints += point;
// 			$homePoints.text(totalPoints);
// 			isHome = false;
// 			changeTurn();
// 			if (totalPoints >= 100) {
// 				isWinner = true;
// 				$('#Home p:last').css('background-color', 'green');
// 				$('#Away p:last').css('background-color', 'red');
// 			}
// 		} else {
// 			let totalPoints = Number($awayPoints.text());
// 			totalPoints += point;
// 			$awayPoints.text(totalPoints);
// 			isHome = true;
// 			changeTurn();
// 			if (totalPoints >= 100) {
// 				isWinner = true;
// 				$('#Home p:last').css('background-color', 'red');
// 				$('#Away p:last').css('background-color', 'green');
// 			}
// 		}
// 	}

// 	function changeTurn() {
// 		if (isHome) {
// 			$('#turns p:first').text('Turn on Home');
// 			$('#turns p:last').text('Next is Away');
// 		} else {
// 			$('#turns p:first').text('Turn on Away');
// 			$('#turns p:last').text('Next is Home');
// 		}
// 	}

// 	function hasWinner(){
// 		if (isWinner) {
// 			$firstLayer.off('click');
// 			$secondLayer.off('click');
// 			$thirdLayer.off('click');
// 			$fourthLayer.off('click');
// 			$fifthLayer.off('click');
// 			$sixthLayer.off('click');
// 		}
// 	}
// }