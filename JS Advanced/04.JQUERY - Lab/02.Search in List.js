function search() {
    let searchText = $('#searchText').val();
    let countMatch = 0;
    $('#towns li').each((index, item) => {
        "use strict";
        if(item.textContent.includes(searchText)){
            $(item).css("font-weight", "bold");
            countMatch++;
        }else{
            $(item).css("font-weight", "");
        }
    });
    $('#result').text(countMatch + " matches found.");
}