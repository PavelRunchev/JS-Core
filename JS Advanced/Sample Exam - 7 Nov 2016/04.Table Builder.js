function tableBuilder(selector) {

    function deleted() {
        $(this).parent().remove();
    }

    return{

        createTable: function (columnNames){
            let table = $('<table>');
            let row = $('<tr>');
            for(let name of columnNames){
                let header = $('<th>').text(name);
                row.append(header);
            }
            row.append($('<th>Action</th>'));
            table.append(row);
            $(selector).empty();
            $(selector).append(table);
        },

        fillData: function(dataRows) {

            for(let data of dataRows){
                let cell = $('<tr>');

                for(let el of data){
                    cell.append($('<td>').text(el));
                }

                let btnDelete = $('<td><button>Delete</button></td>').click(deleted);
                cell.append(btnDelete);
                $('table').append(cell);
            }
        }
    }
}
