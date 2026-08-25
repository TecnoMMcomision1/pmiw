let arreglo2D= []; //Forma 2
let cant=10;
let tam;
function setup() {
  createCanvas(500, 500);
  tam=width/cant;
  for (let i =0; i<10; i++) {
    arreglo2D[i]=[];
    for (let j =0; j<10; j++) {
      arreglo2D[i][j]=0;
    }
  }
}


function draw() {
  background(0);

  for (let i=0; i<arreglo2D.length; i++) {
    for (let j=0; j<arreglo2D[i].length; j ++) {
      noFill();
      stroke(255);
      rect(i*tam, j*tam, tam, tam);
      textSize(32);
      fill(255);
      textAlign(CENTER,CENTER);
      text(arreglo2D[j][i], i*50+tam/2, j*50+tam/2);
    }
  }
}
