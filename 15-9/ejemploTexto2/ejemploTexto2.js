let texto=[];
let miFuente;
function preload(){
miFuente=loadFont("data/BounceDash.otf");

}
function setup() {
createCanvas(500,500);
texto[0]="Hola"
texto[1]="Comi 1"
texto[2]="bienvenidos"
texto[3]="a la clase"
texto[4]="Sobre texto"

textFont(miFuente);
}


function draw() {
background(0);
fill(255);
for(let i=0; i<texto.length; i++)
text(texto[i],100,50*i+100);
}
