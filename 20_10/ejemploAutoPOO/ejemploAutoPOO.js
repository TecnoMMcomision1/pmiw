let auto, auto2, auto3;
let rueda;
let tamAuto=80;
function setup() {
  createCanvas(640, 480);
  auto=new Auto(tamAuto);
  auto2=new Auto(40);
  auto3=new Auto(120);
  rueda= new Rueda(80);
}


function draw() {
  background(120);
  auto.dibujarAuto();
  auto.moverAuto();
  auto2.dibujarAuto();
  auto2.moverAuto();
  auto3.dibujarAuto();
  auto3.moverAuto();
  rueda.dibujarRueda();
}
