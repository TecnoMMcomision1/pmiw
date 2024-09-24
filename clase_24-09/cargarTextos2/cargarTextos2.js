let frases = [];

let num = 0;

function cargarTexto(){
  frases[0] = "La ciudad esperaba desde hacía veinte mil años. El planeta se movió en el espacio, y las flores del campo crecieron y cayeron, y la ciudad todavía esperaba. Y los ríos del planeta crecieron y se secaron y se convirtieron en polvo, y la ciudad todavía esperaba. Los vientos, que habían sido impetuosos y jóvenes, se hicieron serenos y viejos, y las nubes del cielo, ayer desgarradas y rotas, flotaron libremente en una perezosa blancura.";
  frases[1] = "Y la ciudad todavía esperaba.";
  frases[2] = "Y en la mitad del año veinte mil la ciudad dejó de esperar. Un cohete apareció en el cielo. El cohete pasó rugiendo sobre la ciudad, giró, volvió, y fue a posarse entre los guijarros del campo, a treinta metros de las paredes oscuras. ¿Qué eran?";
}

function setup() {
  createCanvas(640, 480);
  textSize(18);
  
  cargarTexto();
}


function draw() {
  background(0);

  fill(255);
  //text(frases[4], 50, 50, /*ancho*/ 500);
  
  if(frameCount%120===0){
    num++;
  }
  text(frases[num], 50, 50, /*ancho*/ 500);
}
