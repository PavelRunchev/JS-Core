function dart(){
	let homePlayer = document.querySelector('#Home');
	let awayPlayer = document.querySelector('#Away');
	let turns = document.querySelectorAll('#turns p');
	let playHome = true;
	let playAway = false;
	let homePoints = 0;
	let awayPoints = 0;

	let points = Array.prototype.slice
		.call(document.querySelectorAll('#scoreBoard table tr td'))
		.map(a => a = a.textContent.split(' '))
		.filter(a => a.length === 2)
		.map(a => a = Number(a[0]));
	
	if(playHome || playAway) {
		document.querySelector('#firstLayer').addEventListener('click', handleScore(points[0]));
		document.querySelector('#secondLayer').addEventListener('click', handleScore(points[1]));
		document.querySelector('#thirdLayer').addEventListener('click', handleScore(points[2]));
		document.querySelector('#fourthLayer').addEventListener('click', handleScore(points[3]));
		document.querySelector('#fifthLayer').addEventListener('click', handleScore(points[4]));
		document.querySelector('#sixthLayer').addEventListener('click', handleScore(points[5]));
	}

	function handleScore(score) {
		return (e) => {
			e.stopPropagation();

			if(playHome) {
				turns[0].textContent = 'Turn on Away';
				turns[1].textContent = 'Next is Home';
				playHome = false;
				playAway = true;
				homePoints += score;
				homePlayer.querySelectorAll('p')[0].textContent = homePoints;
			} else if(playAway) {
				turns[0].textContent = 'Turn on Home';
				turns[1].textContent = 'Next is Away';
				playHome = true;
				playAway = false;
				awayPoints += score;
				awayPlayer.querySelectorAll('p')[0].textContent = awayPoints;
			}

			checkForWinner();
		}
	}

	function checkForWinner() {
		if(homePoints >= 100) {
			homePlayer.querySelectorAll('p')[1].style.background = 'green';
			awayPlayer.querySelectorAll('p')[1].style.background = 'red';
			hasWinner();
		} else if(awayPoints >= 100) {
			homePlayer.querySelectorAll('p')[1].style.background = 'red';
			awayPlayer.querySelectorAll('p')[1].style.background = 'green';
			hasWinner();
		}
	}

	function hasWinner() {
		document.querySelector('#firstLayer').removeEventListener('click', {capture: false});
		document.querySelector('#secondLayer').removeEventListener('click', {capture: false});
		document.querySelector('#thirdLayer').removeEventListener('click', {capture: false});
		document.querySelector('#fourthLayer').removeEventListener('click', {capture: false});
		document.querySelector('#fifthLayer').removeEventListener('click', {capture: false});
		document.querySelector('#sixthLayer').removeEventListener('click', {capture: false});
		playHome = false;
		playAway = false;
	}
}