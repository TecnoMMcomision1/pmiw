// 1,1,2,3,5,8,13,21,34,55,89,144

let fibo = [];
function setup() {
  createCanvas(500, 500);
  fibo[0] = 1;
  fibo[1] = 2;
  for (let i=2; i<100; i++) {
    fibo[i] = fibo[i-1]+fibo[i-2];
  }
  textSize(20);
}


function draw() {
  background(0);
  for (let i=0; i<100; i++) {
    fill(255);
    text(fibo[i], 20+i*40, 100);
  }
  text(fibo[52], 200, 200);
}
