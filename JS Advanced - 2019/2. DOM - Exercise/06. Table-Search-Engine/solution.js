function solve() {
   let data = document.querySelectorAll('.container tbody tr');

   document.querySelector('#searchBtn').addEventListener('click', function() {
      let inputSearch = document.querySelector('#searchField');
      if(!inputSearch.value) return;

      for (let row of data) {
         row.className = '';
         let student = row.querySelectorAll('tr td');
         for (let td of student) {
            const regex = RegExp(inputSearch.value, 'gm');
            if(regex.test(td.textContent)) {
               row.className = 'select';
               break;
            }
         }
      }

      inputSearch.value = '';
   });
}