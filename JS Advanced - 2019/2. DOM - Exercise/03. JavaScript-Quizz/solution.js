function solve() {
  let result = document.querySelector('#results li.results-inner h1');
  let countQuestion = 0;
  let rightAnswers = 0;
  let isRightFirstQuestion;
  let isRightSecondQueston;
  let isRightThirdQuestion;
  let sections = document.querySelectorAll('#quizzie section');

  function execution() {
    if(countQuestion >= 3) {
      return outputAnswers();
    }
    
    sections[countQuestion].querySelector('ul li.low-value').addEventListener('click', firstAnswer);
    sections[countQuestion].querySelector('ul li.high-value').addEventListener('click', secondAnswer);
  }
 
  function firstAnswer() {
    ++countQuestion;
    if(countQuestion === 1) { isRightFirstQuestion = true; } 
    else if(countQuestion === 2) { isRightSecondQueston = false; }
    else if(countQuestion === 3) { isRightThirdQuestion = true; }
    setClassSection();
    execution();
  }

  function secondAnswer() {
    ++countQuestion;
    if(countQuestion === 1) { isRightFirstQuestion = false; } 
    else if(countQuestion === 2) { isRightSecondQueston = true; }
    else if(countQuestion === 3) { isRightThirdQuestion = false; }
    setClassSection();
    execution();
  }

  function setClassSection() {
    sections[countQuestion - 1].className = 'hidden';
    sections[countQuestion - 1].style.display = 'none';

    if(countQuestion < 3) { 
      sections[countQuestion].className = '';
      sections[countQuestion].style.display = 'block';
    }
  }

  function outputAnswers() {
    if(isRightFirstQuestion && isRightSecondQueston && isRightThirdQuestion) {
      result.textContent = 'You are recognized as top JavaScript fan!';
    } else {
      rightAnswers = isRightFirstQuestion ? rightAnswers + 1 : rightAnswers;
      rightAnswers = isRightSecondQueston ? rightAnswers + 1 : rightAnswers;
      rightAnswers = isRightThirdQuestion ? rightAnswers + 1 : rightAnswers;
      result.textContent = `You have ${rightAnswers} right answers`;
    }

    document.getElementById('results').style.display = 'block';
  }

  execution();
}
