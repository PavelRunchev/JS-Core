function sort(colIndex, descending) {
    let products = $('tbody > tr');

    //sorted by products
    if(colIndex === 0){

        if(!descending){
            //sorted by ascendig order
            //sorted in jquery tree
            products.sort((a, b) => $($(a).children()[0]).text()
                .localeCompare($($(b).children()[0]).text()));
        }else{
            //sorted by ascendig order
            //sorted in jquery tree
            products.sort((a, b) => $($(b).children()[0]).text()
                .localeCompare($($(a).children()[0]).text()));
        }
        //sorted by price
    }else{
        if(!descending){
            //sorted by ascendig order
            //sorted in jquery tree
            products.sort((a, b) => $($(a).children()[1]).text()
                 - ($($(b).children()[1]).text()));
        }else{
            //sorted by ascendig order
            //sorted in jquery tree
            products.sort((a, b) => $($(b).children()[1]).text()
                - ($($(a).children()[1]).text()));
        }
    }

    //append to tbody sorted jquery array
    $('tbody').append(products);
}

