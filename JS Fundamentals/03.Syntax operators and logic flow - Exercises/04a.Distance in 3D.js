function distanceIn3D(array) {
    //Pythagoras theorem in 3D: d = sqrt(x - x1)^ + (y - y1)^ + (z - z1)^;
    let x = array[0];
    let y = array[1];
    let z = array[2];
    let x1 = array[3];
    let y1 = array[4];
    let z1 = array[5];

    let distance = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2) + Math.pow(z - z1, 2));
    console.log(distance);
}


distanceIn3D([3.5, 0, 1, 0, 2, -1]);