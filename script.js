var matrix = [];

for (var i = 0; i < 35; i++) {
	matrix[i] = [];
	for (var j = 0; j < 35; j++) {
		matrix[i][j] = 0;
		if (j % 3 == Math.round(Math.random() * 2))
			matrix[i][j] = Math.round(Math.random() * 3);
	}
}



matrix[20][14] = 4;
matrix[10][32] = 4;
matrix[19][25] = 4;
matrix[4][27] = 4;
matrix[12][7] = 4;
matrix[20][15]=4;
matrix[30][13]=4;
matrix[27][16]=4;
matrix[12][8]=4;
matrix[16][9]=4;
matrix[24][28]=4;
matrix[18][31]=4;
matrix[13][2]=4;
matrix[32][7]=4;
matrix[12][14] = 4;
matrix[15][15] = 6;
matrix[33][2] = 6;



var side = 25;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var blackholeArr = [];



   //MARD AND XOTAKER//
   /*
 var matrix = [
	[3,2,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,2,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,2,1,1,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	];


*/

 //GISHATICH AND MARD//
 
//  var matrix = [
//      [0,3,0,0,0],
//      [3,4,3,0,0],
//      [3,3,3,4,0],
//      [0,3,3,0,0],
//      [0,0,3,0,0]
//  ];
 


 //gishatich and xotaker//
 
// var matrix = [
//   [3,2,2,0,2],
//     [2,2,2,0,0],
//     [3,2,2,0,0],
//     [2,2,0,0,2],
//     [2,2,2,2,0]
//  ];


//Xot and and xotaker and mart

// var matrix = [
//      [3,1,1,1,1],
//      [1,1,2,1,1],
//      [2,2,4,2,2],
//      [0,0,1,0,0],
//      [0,0,0,0,0]
//  ];

function setup() {
	frameRate(4);
	createCanvas(matrix[0].length * side, matrix.length * side);
	background("#767676");

	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				var xot = new Grass(x, y);
				grassArr.push(xot);
			} else if (matrix[y][x] == 2) {
				var xotaker = new Xotaker(x, y);
				xotakerArr.push(xotaker);
			} else if (matrix[y][x] == 3) {
				var gishatich = new Gishatich(x, y);
				gishatichArr.push(gishatich);
			} else if (matrix[y][x] == 4) {
				var mard = new Mard(x, y);
				mardArr.push(mard);
			} else if (matrix[y][x] == 6) {
				var blackhole = new Blackhole(x, y);
				blackholeArr.push(blackhole);
			}
		}
	}
}



function draw() {
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				fill("#33D81F");
				// stroke(10);
				 
				rect(x * side, y * side, side, side);
			} else if (matrix[y][x] == 0) {
				fill("#767676");
				
				// noStroke();
				rect(x * side, y * side, side, side);
			} else if (matrix[y][x] == 2) {
				fill("#B6D81F");
				
				// stroke(10);
				rect(x * side, y * side, side, side);
			} else if (matrix[y][x] == 3) {
				fill("#EA5E5E");
				
				// stroke(10);
				rect(x * side, y * side, side, side);
			} else if (matrix[y][x] == 4) {
				fill("#4D4C29");
				
				rect(x * side, y * side, side, side);
			} 
			else if (matrix[y][x] == 6) {
				fill("black");
				
				// stroke(10);
				rect(x * side, y * side, side, side);
			}
		}
	}

	for (var i in grassArr) {
		grassArr[i].bazmanal();
	}
	for (var i in xotakerArr) {
		xotakerArr[i].utel();
		xotakerArr[i].bazmanal();
		xotakerArr[i].mahanal();
	}
	
	for (var i in gishatichArr) {

		gishatichArr[i].utel1();
		gishatichArr[i].bazmanal();
		gishatichArr[i].mahanal();
	}
	
	
	


	for (var i in mardArr) {
		mardArr[i].utel();
		mardArr[i].utel1();

		mardArr[i].bazmanal();
		mardArr[i].mahanal();
		
     
    }
    
	for (var j in blackholeArr) {
		blackholeArr[j].sharjvel();
	}

}