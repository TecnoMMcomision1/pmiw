let ciudades = ["La Plata", "Magdalena", "Madariaga", "Florencio Varela", "Ensenada", "Berisso"];
let num = [];
let orden = 0;
function setup() {
  createCanvas(640, 480);
  textSize(20);
  num [0] = 23;
  num[1] = 17;
  num[2] = 48;
  num[3] = 2;
  num[4] = 100;
  for (let i=0; i<10; i++) {
  }
}


function draw() {
  background(0);
  fill(255);
  text(ciudades[orden], 100, 100);

  for (let i=0; i<num.length; i++) {
    text(num[i], 50+i*40, 300);
  }
  for (let i=0; i<ciudades.length; i++) {
    text(ciudades[i], 300, 200+i*40);
  }
}
function mousePressed() {
  orden++;
}
