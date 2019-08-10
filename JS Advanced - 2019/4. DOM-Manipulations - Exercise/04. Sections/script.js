function create(words) {
   let content = document.getElementById('content');

   const displayText = (ev) => {
      let target = ev.target.firstElementChild;
      target.style.display === 'block' ? target.style.display = 'none' : target.style.display = 'block';
   };

   for(let item of words) {
      let div = document.createElement('div');
      div.addEventListener('click', displayText);
      div.style.color = 'blue';
      let paragraph = document.createElement('p');
      paragraph.textContent = item;
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      content.appendChild(div);
   }
}