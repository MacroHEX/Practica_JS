let number = 0;
let n1 = 0;
let n2 = 1;
let x,y;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  x = 0;
  y = 0;
}

function draw() {
  strokeWeight(1);
  angleMode(DEGREES);
  noFill();

  translate(width/2, height/2);
  scale(0.1);
  
  for (let i = 0; i < 40; i++) {
      stroke(255);
      rect(0, 0, n1, n1);   
      stroke(255, 0, 0);   
      arc(n1, 0, 2*n1, 2*n1, 90, 180);
      translate(n1, n1);
      strokeWeight(5);
      rotate(-90);
      console.log(n1);
      number = n1 + n2;
      n1 = n2;
      n2 = number;
  }

  noLoop();
}