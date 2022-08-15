let espacio = 50;

function setup() {
  createCanvas(800, 800);
  x = width / 2;
  y = height / 2;
  background(0);
}

function draw() {
  
  fill(255, 255, 255, 102);
  let opciones = floor (random(4))

  switch (opciones) {
    case 0:
      x += espacio;
      break;
    case 1:
      y -= espacio;
      break;
    case 2:
      x -= espacio;
      break;
    case 3:
      y += espacio;
      break;
  
  }
  
  circle(x, y, espacio*0.5);

}