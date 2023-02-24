function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  background("white");
  
  //draw top and bottom blue triangles
  push();
  fill("blue")
  triangle(70, 400, 300, 240, 530, 400)
  triangle(70, 0, 300, 160, 530, 0)
  pop();
  
  //draw left and right red triangles
  push();
  fill("red");
  triangle(0, 50, 205, 200, 0, 350);
  triangle(600, 50, 395, 200, 600, 350);
  pop();
  
  //draw various stars
  drawStar(60, 200, 1.1, 180);
  drawStar(520, 145, 0.35, 200);
  drawStar(560, 175, 0.35, 225);
  drawStar(560, 225, 0.35, 250);
  drawStar(520, 255, 0.35, 200);
  
  
}

function drawStar(starX, starY, starSize, starRotate) {
  //Function that creates a yellow star
  fill("#FFDE00");
  noStroke();
  push();
  //Changes Size and Position of star
  translate(starX, starY);
  scale(starSize);

  //Rotates Star
  rotate(starRotate);

  //Point One
  triangle(0, 50, 20, 0, -20, 0);
  rotate(-72);
  //Point Two
  triangle(0, 50, 20, 0, -20, 0);
  //Point Three
  rotate(-72);
  triangle(0, 50, 20, 0, -20, 0);
  //Point Four
  rotate(-72);
  triangle(0, 50, 20, 0, -20, 0);
  //Point Five
  rotate(-72);
  triangle(0, 50, 20, 0, -20, 0);
  pop();
}
