function cone(r, h){
    "use strict";
    class Cone{
        constructor(r, h){
            this.r = r;
            this.height = h;
        }

        get volume(){
            return this.calcVolume();
        }

        //Formula Cone Volume: V = 1/3 * Pi * r^ * h;
        //Method
        calcVolume(){
            return (Math.PI * Math.pow(this.r, 2) * this.height) / 3;
        }

        get surfaceArea(){
            return this.calcSurfaceArea();
        }

        //Base surface area: B = PI * r^;
        //Method
        basesurface(){
            return Math.PI * Math.pow(this.r, 2);
        }

        //Lateral surface area of cone: L = Pi * r * sqrt(r^ + h^);
        //Method
        lateralSurface(){
            return Math.PI * this.r * Math.sqrt(Math.pow(this.r, 2) + Math.pow(this.height, 2));
        }

        //Total surface area of cone: A = L + B;
        //Method
        calcSurfaceArea(){
            return this.basesurface() + this.lateralSurface();
        }
    }

    const volumeCone = new Cone(r, h);
    const surfaceCone = new Cone(r, h);
    console.log(volumeCone.volume.toFixed(4));
    console.log(surfaceCone.surfaceArea.toFixed(4));
}

cone(3, 5);
cone(3.3, 7.8);