function move(command) {
    let availableTowns = $('#available-towns');
    let selectedTowns = $('#selected-towns');

    if(command === "right"){
        selectedTowns.append(availableTowns.find(':selected'));
    }else if(command === "left"){
        availableTowns.append(selectedTowns.find(':selected'));
    }else{
        let printDiv = $('#output').empty();
        let print = (selectedTowns.find('option')).toArray().map(el => el.textContent).join("; ");

        printDiv.text(print);
    }
}