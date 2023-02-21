function setup() {
  createCanvas(400, 400);
}

function draw() {
  //Background Bubblegum Pink
  background("#E7A2FC");
  
  //Color of Star
fill("goldenrod");
  
  //Draws Star and Allows Transformation of Star
  //HAd to use negatives because of how I used vertexes
  drawStar(-120, -120, 1.6);
}

function drawStar(x, y, starShape){
  //Draw Star
  push();
  translate(x, y);
  scale(starShape);
  beginShape();
  vertex(200, 75);
  vertex(250, 150);
  vertex(325, 200);
  vertex(250, 250);
  vertex(200, 325);
  vertex(150, 250);
  vertex(75, 200);
  vertex(150, 150);
  endShape(CLOSE);
  pop();
}


