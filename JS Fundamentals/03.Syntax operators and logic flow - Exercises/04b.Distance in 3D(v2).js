function distanceIn3D(array) {
    let[x1,y1,z1,x2,y2,z2] = array;
    //Pythagoras theorem in 3D: d = sqrt(x - x1)^ + (y - y1)^ + (z - z1)^;
    class Point{
        constructor(x, y, z){
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }

    let point1 = new Point(x1, y1, z1);
    let point2 = new Point(x2, y2, z2);

    class Distance{
        constructor(point1, point2){
            this.point1 = point1;
            this.point2 = point2;
        }

        calcDistance() {
            return Math.sqrt(Math.pow(this.point1.x - this.point2.x, 2) + Math.pow(this.point1.y - this.point2.y, 2) + Math.pow(this.point1.z - this.point2.z, 2));
        }
    }

    console.log(new Distance(point1, point2).calcDistance());
}

distanceIn3D([3.5, 0, 1, 0, 2, -1]);