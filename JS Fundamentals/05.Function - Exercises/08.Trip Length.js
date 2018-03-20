function tripLength(array){
    "use strict";
    let [x1, y1, x2, y2, x3, y3] = array;
    let distance12 = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
    let distance23 = Math.sqrt(((x2 - x3) ** 2) + ((y2 - y3) ** 2));
    let distance13 = Math.sqrt(((x1 - x3) ** 2) + ((y1 - y3) ** 2));

    if ((distance12 <= distance13) && (distance13 => distance23)) {
        let a = distance12 + distance23;
        console.log('1->2->3: ' + a);
    }
    else if ((distance12 <= distance23) && (distance13 <= distance23)) {
        let b = distance12 + distance13;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance23 + distance13;
        console.log('1->3->2: ' + c);
    }
}

tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);