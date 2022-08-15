let x,y;
let len, angle, ratio;
let slider1, slider2, slider3;
let i;

function setup() {
  createCanvas(500, 500);
  slider1 = createSlider(0, height, 100, 0.001);
  slider2 = createSlider(0, TWO_PI, PI/4, 0.001);
  slider3 = createSlider(0, 0.75, 0.67, 0.001);
  // i = random(0, 1);
}

function draw() {
  background(0);
  stroke(255);
  fill(255);

  len = slider1.value();
  angle = slider2.value();
  ratio = slider3.value();

  textAlign(TOP, LEFT);
  textSize(20);
  text("Distancia: " + len + "px", 10, 40);
  text("Angulo: " + angle + "π", 10, 80);
  text("Ratio: " + ratio, 10, 120);

  translate(width/2, height);
  branch(len);
}

function branch(len){
  // colorMode(HSB);
  // stroke(i*360, 255, 255);
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4){
    push();    
    stroke(255, 0, 0);
    rotate(angle);
    branch(len * ratio);
    pop();
    push();
    stroke(0, 255, 0);
    rotate(-angle);
    branch(len * ratio);
    pop();
  }
}