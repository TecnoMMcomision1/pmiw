// agregar la siguiente linea en el html
//<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.js"></script>

let sonidoFondo, tic; // cargamos 2 archivos de sonido
function preload() {
  sonidoFondo = loadSound('data/viento.mp3'); // sonido largo
  tic = loadSound('data/point.mp3'); // sonido corto
}
function setup() {
  createCanvas(400, 300);
}


function draw() {
  background(200);
  rect(50, 50, 100, 50);
  let valorVolumen = map(mouseX, 0, width, 0.1, 1);
  sonidoFondo.amp(valorVolumen);
}
function mousePressed() {
  if (bot(50, 50, 100, 50)) {
    //sonidoFondo.loop(true);
    tic.play();
  }
  if (!sonidoFondo.isPlaying()) { // revisa que NO esté sonando
    sonidoFondo.loop(true); // arranca el sonido contínuo
  }
  // loop() debe recibir estado true o false para funcionar.
}
function bot(x, y, an, al) {
  return mouseX>x && mouseX <x+an && mouseY>y && mouseY<y+al;
}
