// const getEmail = () => document.querySelector('[name=email');
// const getTable = () => document.getElementsByTagName('tr');
//
// const getRowToDelete = (table, email) => {
//     for(let item of table) {
//         let currentEmail = item.children[1].textContent;
//         if(currentEmail === email) {
//             return item;
//         }
//     }
// };
//
// const deleteRow = (row) => row.remove();
// const clearEmail = () => getEmail().value = '';
//
// function deleteByEmail() {
//     //get values!
//     const email = getEmail().value;
//     const table = getTable();
//
//     //search and get email!
//     const rowToDelete = getRowToDelete(table, email);
//
//     //delete email
//     deleteRow(rowToDelete);
//     //clear input value
//     clearEmail();
// }


//for judge
function deleteByEmail() {
    //get values!
    const email = document.getElementsByName('email')[0];
    const table = document.getElementsByTagName('tr');

    //search and get email!
    for(let item of table) {
        let currentEmail = item.children[1].textContent;

        if(currentEmail === email.value) {
            item.remove();

            //other variant
            //let parent = item.nodeParent;
            //parent.removeChild(item);

            document.getElementById('result').textContent = 'Deleted.';
            email.value = '';
            return;
        }
    }

    document.getElementById('result').textContent = 'Not found.';
    document.getElementsByName('email')[0].textContent = '';
}





