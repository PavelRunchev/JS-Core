function move(direction) {
    let selectTown = $('#towns').find(':selected');

    // move Town -1 == Up
    //move Town +1 == Down
    direction === -1 ? selectTown.first().prev().before(selectTown)
        : selectTown.last().next().after(selectTown);
}