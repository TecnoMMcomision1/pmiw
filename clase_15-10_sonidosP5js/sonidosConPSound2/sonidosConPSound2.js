// leer instrucciones p5.sound adjuntas en la carpeta clase_15-10
let sonido, sonidoIntro;
let estado;
function preload() {
  sonido = loadSound("data/noise.mp3");
  sonidoIntro = loadSound("data/bata.mp3");
  estado = "";
}
function setup() {
  createCanvas(400, 300);
}


function draw() {
  background(200);
  if (estado==="unaPantalla") {
    // dibujamos el fondo
    // cargamos los textos
    // dibujamos los botones
    if (!sonidoIntro.isPlaying()) { // el sonido se reproduce solo si NO está sonando.
      sonidoIntro.play(); // este archivo se reproduce mientras estado sea "unaPantalla"
    }
  }
}
function mousePressed() {
  // obviamente esto lo van a limitar a un botón, no suelto en cualquier parte de la pantalla.

  if (!sonido.isPlaying()) { // el sonido se reproduce solo si NO está sonando.
    sonido.play();
  } else { // de lo contrario, se detiene
    sonido.stop();
  }
  estado = "unaPantalla";
}
function keyPressed() {
  estado ="otraCosa";
}
