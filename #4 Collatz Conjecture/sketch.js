let x, y;
let num = 7;

function setup() {
  createCanvas(400, 400);
  background(0);
  x = width / 2;
  y = height / 2;
  frameRate(1);
  console.log("Inicial", num)
}

function draw() {
  fill(255);
  textSize(15);
  textAlign(CENTER);
  if (num % 2 == 0) {
    num = num / 2;
    console.log("Par", num);
  } else
  {
    num = (num * 3) + 1;
    console.log("Impar", num);
  }  
}
