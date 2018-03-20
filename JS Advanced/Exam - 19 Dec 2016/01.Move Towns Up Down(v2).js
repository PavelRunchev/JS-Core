function move(direction) {
    let selectTown = $('#towns').find(':selected');
    if(direction === 1){
        //move town down
        selectTown.last().next().after(selectTown);
    }else{
        //move town up
        selectTown.first().prev().before(selectTown);
    }
}