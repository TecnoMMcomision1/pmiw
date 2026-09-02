let cantC;
let tamC;
let juga1;
let juga2;
function setup() {
  juga1=[];
  juga2=[];
  createCanvas(450, 450);
  cantC=3;

  for (let i=0; i<cantC; i++) {
    juga1[i]=[];
    juga2[i]=[];
    for (let j=0; j<cantC; j++) {
      juga1[i][j]=false;
      juga2[i][j]=false;
    }
  }
  tamC=width/cantC;
}


function draw() {
  background(0);
  estilo(true, 200, color(200, 200, 0), 2);
  tablero(cantC, tamC);



  for (let i=0; i<cantC; i++) {

    for (let j=0; j<cantC; j++) {

      if (juga1[i][j]==true) {
        estilo(true, color(255, 0, 0), 100, 4);
        ficha1(i*tamC+tamC/2, j*tamC+tamC/2, tamC/2);
      }
      if (juga2[i][j]==true) {
        estilo(false, 0, color(0, 0, 255), 6);
        ficha2(i*tamC, j*tamC, tamC);
      }
    }
  }
}
