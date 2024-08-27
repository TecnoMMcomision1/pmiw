function elTunel( ubicX,  ubicY,  rot,  alterna) {

  strokeWeight(2);
  for (let i=0; i<200; i++) {
    push(); 
    translate(ubicX, ubicY);
    rotate(radians(rot));
    let y = i;
    let tono = map(i, 0, 200, 20, 255);
    if (i%25==0) {
      alterna = !alterna;
    }
    if (!alterna) {
      stroke(220, tono);
    } else {
      stroke(250, 0, 0, tono);
    }

    let x1 = map(i, 0, 200, 0, -200);
    let x2 = map(i, 0, 200, 0, -200+anchoMax);
    let x3 = map(i, 0, 200, 0, 200- anchoMax);
    let x4 = map(i, 0, 200, 0, 200);
    line(x1, y, x2, y);
    line(x3, y, x4, y);
    if (alterna) {
      stroke(220, tono);
    } else {
      stroke(250, 0, 0, tono);
    }
    line(x2, y, x3, y);
    pop();
  }
}
function bordes() {
  push();
  translate(400, 0);
  strokeWeight(10);
  stroke(0, 255, 0);
  strokeWeight(2);
  let centro = width/4;
  let tercio = (width/2)/3;
  line(0, 400, centro, height/2);
  line(400, 400, centro, height/2);
  line(tercio, 400, centro, height/2);
  line(tercio*2, 400, centro, height/2);
  pop();
}
