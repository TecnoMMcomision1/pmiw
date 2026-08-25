let posX=[];
let posY=[];
let tam=[];
let tamIn=[];
let cant=100;
function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  for (let i=0; i<cant; i++) {
    tamIn[i]=random(30, 60);
    tam[i]=tamIn[i];
    posX[i]=random(tam[i]/2, width-tam[i]/2);
    posY[i]=random(tam[i]/2, height-tam[i]/2);
  }
}

function draw() {
  background(0);
  let agrandan=false;
  for (let i=cant-1; i>0; i--) {
    if (detectar(posX[i], posY[i], tam[i]) && agrandan===false) {
      tam[i]++;
      agrandan=true;
    }
  }
  for (let i=0; i<cant; i++) {

    let opaco= map(i, 0, 99, 255, 50);
    fill(0, 255, 255, opaco);
    rect(posX[i], posY[i], tam[i], tam[i]);
  }
}
function mousePressed() {
  for (let i=0; i<cant; i++) {
    tam[i]=tamIn[i];
  }
}
function detectar(x, y, tama) {
  if (mouseX>x-tama/2 && mouseX<x+tama/2 && mouseY>y-tama/2 && mouseY<y+tama/2) {
    return true;
  } else {
    return false;
  }
}
