function solve(){
   let allnames = document.querySelectorAll('.minimalistBlack > tbody > tr');
   for (let tr of allnames) {
      tr.addEventListener('click', changeColor);
   }

   function changeColor(e) {
      e.preventDefault();
      if(this.style.backgroundColor === 'rgb(65, 63, 94)') {
         this.style.removeProperty('background-color');
      } else {
         removeAllColor();
         this.style.backgroundColor = 'rgb(65, 63, 94)';
      }
   }

   function removeAllColor() {
      for (let tr of allnames) {
         tr.style.removeProperty('background-color');
      }
   }
}
