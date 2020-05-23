function solve() {
  let output = document.getElementById('output');
  let text = document.getElementById('input');

  let splitText = text.textContent.split('.').filter(s => s !== '').map(s => s = s + '.');

  while(splitText.length > 0) {
    let paragraph = document.createElement('p');
    splitText.splice(0, 3).map(sentence => paragraph.textContent += sentence);
    output.appendChild(paragraph);
  }
}