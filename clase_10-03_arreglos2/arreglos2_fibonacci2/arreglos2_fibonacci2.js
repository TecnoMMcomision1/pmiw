// 1,1,2,3,5,8,13,21,34,55,89,144

let fibo = [];
let cant = 10;
let tam;

function setup() {
  createCanvas(500, 500);
  fibo[0] = 1;
  fibo[1] = 2;
  for (let i=2; i<100; i++) {
    fibo[i] = fibo[i-1]+fibo[i-2];
  }
  textSize(20);

  tam = width/cant;
}


function draw() {
  background(0);
  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
      let conteo = j*cant+i;
      let valorFibo = fibo[conteo];
      fill(255);
      text(valorFibo, i*tam+tam/2, j*tam+tam/2);
    }
  }
}
