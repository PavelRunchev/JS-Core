function distanceOverTime(arr){
    "use strict";

    class Distance {
        constructor(v1,v2,t){
            this.v1 = v1;
            this.v2 = v2;
            this.t = t;
        }

        //distance between two object V1 and V2;
        calcDistance(){
            return Math.abs(this.v1 - this.v2);
        }

        //Time in hour and km (1 hour = 3600sec and 1km = 1000meters);
        calcTime(){
            return this.t / 3600 * 1000;
        }

        //formula for distance = S = V*T;
        speed(){
            return this.calcDistance() * this.calcTime();
        }
    }

    let d = new Distance(arr[0], arr[1], arr[2]);
    console.log(d.speed());
}

//output: 111.11111111111111
distanceOverTime([5, -5, 40]);