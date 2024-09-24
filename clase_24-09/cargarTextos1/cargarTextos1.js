let textos = [];

let num = 0;


function preload() {
  textos = loadStrings("data/cuento.txt");
}


function setup() {
  createCanvas(640, 480);
  textSize(18);
}


function draw() {
  background(0);

  fill(255);
  //text(textos[4], 50, 50, /*ancho*/ 500);
  
  if(frameCount%120===0){
    num++;
  }
  text(textos[num], 50, 50, /*ancho*/ 500);
}
