function growingWord() {
  let paragraph = document.querySelector('#exercise p');
  let currentPixel = Number(paragraph.style.fontSize.split('px')[0]);
  currentPixel = currentPixel < 1 ? 1 : currentPixel;

  paragraph.style.display = 'block';
  if(paragraph.style.color === 'blue') paragraph.style.color = "green";
  else if(paragraph.style.color === 'green') paragraph.style.color = "red";
  else paragraph.style.color = "blue";

  paragraph.style.fontSize = `${+currentPixel * 2}px`;
}