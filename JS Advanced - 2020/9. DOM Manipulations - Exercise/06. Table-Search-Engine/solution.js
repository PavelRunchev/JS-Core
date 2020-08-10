function solve() {
    let table = document.querySelectorAll('.container tbody tr');
    document.querySelector('#searchBtn').addEventListener('click', search);

    function search(e) {
        clearBeforeSearch();
        let searchesInput = document.querySelector('#searchField');
        findMatchFromTable(searchesInput.value);

        searchesInput.value = '';
    }

    function clearBeforeSearch() {
        for (let tr of table) 
            tr.classList.remove('select');
    }

    function findMatchFromTable(match) {
        for (let tr of table) {
            let [name, email, course] = tr.querySelectorAll('td');
            if(name.textContent.includes(match) 
            || email.textContent.includes(match) 
            || course.textContent.includes(match)) {
                tr.classList.add('select');
            }
        }
    }
}