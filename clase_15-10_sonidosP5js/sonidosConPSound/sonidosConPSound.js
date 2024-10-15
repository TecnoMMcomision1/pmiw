// leer instrucciones p5.sound adjuntas en la carpeta clase_15-10
let sonido;

function preload() {
  sonido = loadSound("data/noise.mp3");
}
function setup() {
  createCanvas(400, 300);
}


function draw() {
  background(200);
}
function mousePressed() {
 // obviamente esto lo van a limitar a un botón, no suelto en cualquier parte de la pantalla.
 
  if (!sonido.isPlaying()) { // el sonido se reproduce solo si NO está sonando. 
    sonido.play();
  } else { // de lo contrario, se detiene
    sonido.stop();
  }
}
