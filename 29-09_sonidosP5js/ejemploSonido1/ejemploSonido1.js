/*Este es un ejemplo de uso de sonido. Hay un sonido de fondo, que se activa una sola vez y un sonido corto
que suena cada vez que cliqueamos el botón */

/*asegurarse de incorporar la librería a la carpeta libraries. La copian de esta carpeta y la pegan
 en su carpeta libraries*/

// agregar la siguiente línea (sin el comientario, obvio) en su html, justo arriba del nombre de su sketch

// <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/addons/p5.sound.min.js"></script>

let bang; // un sonido corto
let fondo; // sonido fondo
let sonando = false; // variable para activar el sonido de fondo.

function preload() {
  fondo = loadSound('data/suspenso.mp3'); // archivos de sonido en el preload()
  bang = loadSound('data/Disparo.mp3');
}

function setup() {
  createCanvas(500, 500);
}


function draw() {
  background(0);
  fill(255);
  textSize(30);
  text("sonando es " + sonando, 150, 80); // control para ver si activamos. No va en el trabajo.

  /*acá un pequeño efecto: mapeamos la posición de mouseX para alterar el volúmen */
  let valor = map(mouseX, 0, width, 0.2, 1);
  fondo.setVolume(valor);
  rect(50, 50, 80, 40); //
}
function mouseClicked() {
  if (activar(50, 50, 80, 40)) {
    bang.play();
    if (!sonando) {
      fondo.play();
      sonando=true;
    }
  }
}
function activar(x, y, an, alt) {
  let apretando = mouseX > x && mouseX<x+an && mouseY>y && mouseY<y+alt;
  return apretando;
}
