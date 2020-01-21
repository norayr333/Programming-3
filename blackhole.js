class Blackhole {


    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
    }


    stanalNorKordinatner() {
        this.directions = [

            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y]
        ];
    }


    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < (matrix[0].length) - 1 && y >= 0 && y < (matrix.length) - 1) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    jnjelZangvacic(x, y) {
        for (var i in grassArr) {
            if (grassArr[i].x == x && grassArr[i].y == y) {
                console.log("jnjel grassArr")
                grassArr.splice(i, 1);
            }
        }
        for (var i in xotakerArr) {
            if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
                xotakerArr.splice(i, 1);
                console.log("jnjel xotakerArr")
            }
        }
        for (var i in mardArr) {
            if (mardArr[i].x == x && mardArr[i].y == y) {
                mardArr.splice(i, 1);
                console.log("jnjel mardArr")
            }
        }
        for (var i in gishatichArr) {
            if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                gishatichArr.splice(i, 1);
                console.log("jnjel gishatichArr")
            }
        }
    }


    sharjvel() {

        var patahakanVandakn = random(this.yntrelVandak(0)) || random(this.yntrelVandak(1)) || random(this.yntrelVandak(2)) || random(this.yntrelVandak(3));
        if (patahakanVandakn) {


            matrix[this.y][this.x] = 0; this.jnjelZangvacic(this.x, this.y);
            matrix[this.y + 1][this.x] = 0; this.jnjelZangvacic(this.x, this.y + 1);
            matrix[this.y][this.x + 1] = 0; this.jnjelZangvacic(this.x + 1, this.y);
            matrix[this.y + 1][this.x + 1] = 0; this.jnjelZangvacic(this.x + 1, this.y + 1);

            this.x = patahakanVandakn[0];
            this.y = patahakanVandakn[1];
            matrix[this.y][this.x] = 6;
            matrix[this.y + 1][this.x] = 6;
            matrix[this.y][this.x + 1] = 6;
            matrix[this.y + 1][this.x + 1] = 6;
            this.energy--;


        }
    }




}