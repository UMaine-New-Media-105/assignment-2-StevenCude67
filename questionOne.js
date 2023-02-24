function setup() {
  createCanvas(400, 400);
}
//background and color
function draw() {
  background(220);
  fill("blue");

  //places each row of blue squares
  newRow(0);
  newRow(80);
  newRow(160);
  newRow(240);
  newRow(320);

  // Draws Initial Squares
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

//creates a row of blue squares
function newRow(rowY) {
  push();
  rect(0, rowY, 80);
  rect(80, rowY, 80);
  rect(160, rowY, 80);
  rect(240, rowY, 80);
  rect(320, rowY, 80);
  pop();
}
