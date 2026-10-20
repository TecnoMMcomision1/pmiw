let nave=[];
let cant=5;
function setup() {
  rectMode(CENTER);
  createCanvas(640, 480);
  for (let i=0; i<cant; i++) {
    nave[i]= new Nave();
  }
}


function draw() {
  background(0);
  for (let i=0; i<cant; i++) {
    nave[i].dibujarNave();
    nave[i].moverNave();
  }
}
