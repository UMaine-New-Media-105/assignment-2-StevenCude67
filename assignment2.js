function setup() {
  createCanvas(400, 400);
}

function draw() {
  //Background Bubblegum Pink
  background("#E7A2FC");
  
  //Color of Star
fill("goldenrod");
  
  //Draw Star
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
}
