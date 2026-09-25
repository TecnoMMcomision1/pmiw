let texto;
let miFuente;
function preload(){
miFuente=loadFont("data/BounceDash.otf");
texto=loadStrings("data/Hola.txt");
}
function setup() {
createCanvas(500,500);


textFont(miFuente);
}


function draw() {
background(0);
fill(255);
for(let i=0; i<texto.length; i++)
text(texto[i],100,50*i+100);
}
