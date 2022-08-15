let x,y, px, py;
let num = 1;
let salto = 5;
let pasos = 1;
let estado = 0;
let vuelta = 0;

function esPrimo(valor){
  if (valor == 1){
    primo = false;
  }  
  for (let i = 2; i < sqrt(valor); i++){
    if (valor % i == 0){
      return false;
    }
  }
  return true
}

function setup() {
  createCanvas(500, 500);
  // quiero que mi punto inicial sea en el centro entonces
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  background(0);
  //frameRate(1);
}

function draw(){
  fill (255);
  stroke(255);
  rectMode(CENTER);
  
  if (esPrimo(num)){
    circle(x, y, salto*0.5);
  }
    
  //line(x, y, px, py)
  px = x;
  py = y;
  
  switch (estado){
    case 0:      
      x += salto;
      break;
    case 1:
      y -= salto;
      break;
    case 2:      
      x -= salto;
      break;
    case 3:
      y += salto;
      break;
  }
    
  if (num % pasos == 0){
    estado = (estado + 1) % 4;
    vuelta++;
    if (vuelta % 2 == 0){
      pasos++;
    }
  }
    
  num++;
  
}