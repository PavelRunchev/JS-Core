function cone(r, h){
    "use strict";
    //Formula Cone Volume: V = 1/3 * Pi * r^ * h;
    let volume = (Math.PI * Math.pow(r, 2) * h) / 3;

    //Base surface area: B = PI * r^;
    let baseSurface = Math.PI * Math.pow(r, 2);

    //Lateral surface area of cone: L = Pi * r * sqrt(r^ + h^);
    let lateralSurface = Math.PI * r * Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));

    //Total surface area of cone: A = L + B;
    let surfaceArea = baseSurface + lateralSurface;

    console.log(volume.toFixed(4));
    console.log(surfaceArea.toFixed(4));

}

cone(3.3, 7.8);