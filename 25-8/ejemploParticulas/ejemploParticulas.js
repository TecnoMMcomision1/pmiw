let posX= [];
let posY= [];
let tam=[];
let dirX=[];
let dirY=[];
let cantidad=1000;
let posXChimenea, posYChimenea;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  posXChimenea=width/2;
  posYChimenea=height-50;
  for (let i=0; i<cantidad; i++) {
    posX[i]=posXChimenea;
    posY[i]=posYChimenea+random(-25, 25);
    tam[i]=20;
    dirX[i]=random(-0.2, 0.2);
    dirY[i]=random(-2, -3);
  }
}


function draw() {
  background(0);
  for (let i=0; i<cantidad; i++) {
    posX[i]+=dirX[i];
    posY[i]+=dirY[i];
    if (posY[i]<0) {
      posY[i]=posYChimenea;
      posX[i]=posXChimenea;
    }
    let opaco= map(posY[i], posYChimenea, 0, 255, 0);
    tam[i]=map(posY[i],posYChimenea,0,20,40);
    noStroke();
    fill(200, opaco);
    circle(posX[i], posY[i], tam[i]);
  }

  fill(255, 0, 0);
  if (keyIsDown(LEFT_ARROW) && posXChimenea>25) {
    posXChimenea--;
  }
  if (keyIsDown(RIGHT_ARROW) && posXChimenea<width-25) {
    posXChimenea++;
  }
  strokeWeight(2);
  stroke(120);
  rect(posXChimenea, posYChimenea, 50, 100);
}
