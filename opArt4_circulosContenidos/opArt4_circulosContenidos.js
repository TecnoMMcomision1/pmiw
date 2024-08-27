function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(200);

  //circulos(width/2, height/2, 200, 10);
  let cant = 3;
  let tam = width/cant;
  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
      circulos(i*tam+tam/2, j*tam+tam/2, tam, 10);
    }
  }
}
function circulos(x, y, t, c) {
  for (let i=0; i<c; i++) {
    noStroke();
    let diam = map(i, 0, c, t, t/c);
    let tono = map(i, 0, c, 30, 255);
    if (i%2===0) {
      fill(250, 0, 0, tono);
    } else {
      fill(0, tono);
    }
    let x2 = map(diam, t, t/c, x, mouseX);
    let y2 = map(diam, t, t/c, y, mouseY);
    //constrain( variable, minimo, maximo )  ********************
    
    circle(constrain(x2, x-t/2, x+t/2), y2, diam);
    
    //circle(mouseX, mouseY, diam);
    //ellipse(x,y,t,t);
  }
}
