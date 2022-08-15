
let x,y;

let grid;
let espacio = 20;
let cols, rows;

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;

}

function setup() {
  createCanvas(400, 400);

  cols = floor(width / espacio);
  rows = floor(height / espacio);
  
  x = cols / 2;
  y = rows / 2;


  background(0);
  grid = make2DArray(cols, rows); 

}

function draw() {
  
  stroke(255, 100);
  strokeWeight(espacio * 0.5);
  point (x * espacio,y * espacio);

  let opcion = floor (random(4))

  switch (opcion) {
    case 0:
      x += 1;
      break;
    case 1:
      y -= 1;
      break;
    case 2:
      x -= 1;
      break;
    case 3:
      y += 1;
      break;  
  }
  console.log(opcion)
}