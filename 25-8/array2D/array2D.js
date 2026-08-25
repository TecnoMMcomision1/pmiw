let arreglo2D= [[1,2,3],[4,5,6],[7,8,9]]; //Forma 1

function setup() {
createCanvas(500,500);

}


function draw() {
background(0);

for(let i=0; i<arreglo2D.length; i++){
for(let j=0; j<arreglo2D[i].length; j ++){
  fill(255);
  textSize(32);
text(arreglo2D[j][i],50+i*50,50+j*50);
}}

}
