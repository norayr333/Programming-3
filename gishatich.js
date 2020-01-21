class Gishatich {


    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
    }


    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    yntrelVandak1(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] < ch ) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    sharjvel() {
        this.energy-=2;
        var patahakanVandak = random(this.yntrelVandak1(2));
            
       
        if( matrix[patahakanVandak[1]][patahakanVandak[0]]==1){
             matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    matrix[this.y][this.x] = 3;
                    break;
                }
            }
        }
         else {    
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 3;
        }
        
    }




    bazmanal() {

        var norVandak = random(this.yntrelVandak(0));
        if (this.energy == 15 && norVandak) {
            var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
            gishatichArr.push(norGishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.energy = 10;
        }
    }



    utel1() {

        var patahakanVandak = random(this.yntrelVandak(2));
        // var patahakanVandakDatark = random(this.yntrelVandak(0));
        if (patahakanVandak) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 3;
            // console.log(grassArr);
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    this.energy + 2;
                    break;
                }
            }
        }


        else {
            this.sharjvel();
        }

    }



    mahanal() {
        var patahakanVandak = random(this.yntrelVandak(0));
        if (patahakanVandak && this.energy <= 0) {
           

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    return true;
                }
            }
        }
        else return false;
    }
}