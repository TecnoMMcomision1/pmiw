let caballo = [];
let numImg, posX;

function preload() {
  //caballo[0] = loadImage("data/horse0.png");
  //caballo[1] = loadImage("data/horse1.png");
  //caballo[2] = loadImage("data/horse2.png");  //me aburrí

  for (let i=0; i<7; i++) {
    caballo[i] = loadImage("data/horse" + i + ".png");
  }
}

function setup() {
  createCanvas(500, 500);

  imageMode(CENTER, CENTER);

  numImg = 0;
  posX = 0;
}


function draw() {
  background(170);

  image(caballo[numImg], posX, height/2);

  if (frameCount%10===0) {
    if (numImg < 6) {
      numImg++;
    } else {
      numImg = 0;
    }
  }

  if (posX > width) {
    posX = 0;
  }
  posX++;
}
