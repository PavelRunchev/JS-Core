function solve() {
  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let sections = document.querySelectorAll('#quizzie section');
  let answers = 0;
  let index = 0;

  for (let s of sections) {
      let answersParagreph = s.querySelectorAll('ul li p');
      for (let a of answersParagreph) {
          a.addEventListener('click', rightAnswer);
      }
  }

  function rightAnswer(e) {
    e.preventDefault();
    if(rightAnswers.includes(this.textContent)) answers++;
    this.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
    index++;
    if(sections.length > index) {
      sections[index].className = '';
      sections[index].style.display = 'block';
    }

    if(index === sections.length) {
      const output = answers === 3 ? 'You are recognized as top JavaScript fan!'
        : `You have ${answers} right answers`;
      showResult(output);
    }
  }

  function showResult(text) {
    let results = document.querySelector('#results');
    results.querySelector('.results-inner h1').innerHTML = text;
    results.style.display = 'block';
  }
}
