function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200, 240, 255); 

  noStroke();
  fill(100, 200, 255);
  rect(0, 200, 600, 200); 

  stroke(255, 255, 255, 150);
  strokeWeight(1);
  line(0, 200, 600, 200);

  stroke(255, 255, 200);
  strokeWeight(1.5); 
  point(300, 205); point(290, 203); point(310, 207); point(280, 206);
  point(320, 204); point(270, 208); point(330, 202); point(260, 205);
  point(300, 215); point(285, 213); point(315, 217); point(270, 216);
  point(330, 214); point(255, 218); point(345, 212); point(240, 215);

  noStroke();
  fill(255, 255, 200, 200); 
  ellipse(300, 225, 4, 1); ellipse(280, 223, 3, 1); ellipse(320, 227, 3, 1);
  ellipse(260, 226, 4, 1); ellipse(340, 224, 2, 1); ellipse(240, 228, 3, 1);
  ellipse(300, 240, 5, 1.5); ellipse(270, 238, 4, 1); ellipse(330, 242, 4, 1);
  ellipse(240, 241, 5, 1); ellipse(360, 239, 3, 1); ellipse(210, 243, 4, 1);

  fill(255, 255, 200, 180);
  rect(295, 260, 10, 0.5); rect(275, 258, 8, 0.5); rect(315, 262, 8, 0.5);
  rect(255, 261, 9, 0.5); rect(335, 259, 7, 0.5); rect(235, 263, 8, 0.5);
  rect(280, 290, 40, 0.5); rect(240, 288, 30, 0.5); rect(330, 292, 30, 0.5);
  rect(200, 310, 60, 1); rect(340, 308, 60, 1); rect(100, 360, 150, 1);

  stroke(255, 255, 255);
  strokeWeight(1.5);
  point(300, 195); point(290, 197); point(310, 193); point(280, 194);
  point(320, 196); point(270, 192); point(330, 198); point(260, 195);
  point(300, 185); point(285, 187); point(315, 183); point(270, 184);
  point(330, 186); point(255, 182); point(345, 188); point(240, 185);

  noStroke();
  fill(255, 255, 255, 200);
  ellipse(300, 175, 4, 1); ellipse(280, 177, 3, 1); ellipse(320, 173, 3, 1);
  ellipse(260, 174, 4, 1); ellipse(340, 176, 2, 1); ellipse(240, 172, 3, 1);
  ellipse(300, 160, 5, 1.5); ellipse(270, 162, 4, 1); ellipse(330, 158, 4, 1);
  ellipse(240, 159, 5, 1); ellipse(360, 161, 3, 1); ellipse(210, 157, 4, 1);

  fill(255, 255, 255, 180);
  rect(295, 140, 10, 0.5); rect(275, 142, 8, 0.5); rect(315, 138, 8, 0.5);
  rect(255, 139, 9, 0.5); rect(335, 141, 7, 0.5); rect(235, 137, 8, 0.5);
  rect(280, 110, 40, 0.5); rect(240, 112, 30, 0.5); rect(330, 108, 30, 0.5);
  rect(200, 90, 60, 1); rect(340, 92, 60, 1); rect(100, 40, 150, 1);
}