let circleMove = 40;
let colorCurrent = 220;
let colorChange = 20;
let backgroundColor = 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("blue");
  stroke("black");
  newRow();
  newRow(0, 80);
  newRow();
  newRow();
  newRow();
  
  letterSquare();
}
function newRow(y) {
  rect(0, 0, 80);
  rect(80, 0, 80);
  rect(160, 0, 80);
  rect(240, 0, 80);
  rect(320, 0, 80);
}
function letterSquare() {
  fill("orange");
  rect(80, 0, 80);
  rect(160, 0, 80);
  rect(240, 0, 80);
  rect(80, 80, 80);
  rect(80, 160, 80);
  rect(160, 160, 80);
  rect(240, 160, 80);
  rect(240, 240, 80);
  rect(240, 320, 80);
  rect(160, 320, 80);
  rect(80, 320, 80);
}
