let texto;
let miFuente;

function preload() {
  miFuente = loadFont("data/BounceDash.otf");
  texto = loadStrings("data/Hola.txt");
}

function setup() {
  createCanvas(500, 500);
  textFont(miFuente);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  for (let i = 0; i < texto.length; i++) {

    let y = 100 + i * 50;
    let distancia = dist(mouseX, mouseY, width/2, y);

    let deformacion = map(distancia, 0, 300, 40, 0);

    textSize(30 + deformacion);

    fill(255);
    text(texto[i], width/2, y);
  }
}
