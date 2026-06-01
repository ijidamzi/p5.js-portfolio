let leftArmAngle = 0;
let rightArmAngle = 0;
let leftArmTarget = 0;
let saluteOn = false;
let hatY = -200;
let hatTargetY = -200;
let hatOn = false;
//let gifSaved = false;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  background(212, 232, 194);

  leftArmAngle = lerp(leftArmAngle, leftArmTarget, 0.08);
  hatY = lerp(hatY, hatTargetY, 0.07);
if (frameCount === 60) {
  hatOn = true;
  hatTargetY = 40;
}

if (frameCount === 150) {
  saluteOn = true;
  leftArmTarget = radians(143);
}

if (frameCount === 290) {
  saluteOn = false;
  leftArmTarget = 0;
}

  //오른팔
  push();
  translate(412, 275);
  rotate(rightArmAngle);
  fill(74, 94, 58);
  stroke(46, 61, 34);
  strokeWeight(2);
  rect(0, 0, 58, 105, 22);
  fill(240, 192, 128);
  stroke(200, 149, 74);
  strokeWeight(1.5);
  ellipse(29, 112, 52, 26);
  pop();

  //몸통
  fill(78, 100, 64);
  stroke(46, 61, 34);
  strokeWeight(2.5);
  rect(188, 268, 224, 130, 14);
  fill(58, 77, 44);
  noStroke();
  triangle(268, 268, 300, 314, 300, 268);
  triangle(332, 268, 300, 314, 300, 268);
  fill(92, 114, 69);
  stroke(46, 61, 34);
  strokeWeight(1.5);
  rect(188, 268, 48, 15, 4);
  rect(364, 268, 48, 15, 4);
  fill(58, 77, 44);
  noStroke();
  ellipse(222, 308, 26, 16);
  ellipse(370, 318, 22, 14);
  ellipse(250, 338, 20, 12);
  ellipse(355, 295, 20, 12);
  fill(46, 61, 34);
  ellipse(300, 330, 10, 10);
  ellipse(300, 352, 10, 10);
  fill(34, 85, 187);
  stroke(26, 61, 138);
  strokeWeight(1.5);
  rect(218, 290, 68, 30, 5);

  //얼굴
  fill(240, 192, 128);
  stroke(200, 149, 74);
  strokeWeight(2);
  ellipse(175, 185, 60, 60);
  ellipse(425, 185, 60, 60);
  fill(240, 192, 128);
  stroke(200, 149, 74);
  strokeWeight(2);
  beginShape();
  vertex(300, 82);
  bezierVertex(405, 82, 425, 150, 422, 190);
  bezierVertex(420, 225, 410, 250, 300, 285);
  bezierVertex(190, 250, 180, 225, 178, 190);
  bezierVertex(175, 150, 195, 82, 300, 82);
  endShape(CLOSE);
  fill(42, 26, 10);
  noStroke();
  ellipse(300, 120, 226, 90);
  fill(240, 192, 128);
  ellipse(300, 135, 220, 55);
  fill(42, 26, 10);
  rect(231, 155, 58, 10, 5);
  rect(311, 155, 58, 10, 5);
  fill(255);
  stroke(170);
  strokeWeight(1);
  ellipse(261, 186, 60, 44);
  ellipse(339, 186, 60, 44);
  fill(0);
  noStroke();
  ellipse(261, 186, 32, 32);
  ellipse(339, 186, 32, 32);
  fill(255);
  ellipse(266, 181, 8, 8);
  ellipse(344, 181, 8, 8);
  noFill();
  stroke(34);
  strokeWeight(4);
  rect(224, 166, 64, 42, 11);
  rect(312, 166, 64, 42, 11);
  strokeWeight(3.5);
  line(288, 186, 312, 186);
  strokeWeight(3);
  line(224, 180, 180, 155);
  line(376, 180, 420, 155);
  stroke(200, 149, 74);
  strokeWeight(5);
  line(300, 228, 287, 218);
  line(300, 228, 313, 218);
  fill(42, 26, 10);
  noStroke();
  ellipse(300, 256, 40, 30);
  fill(245, 160, 160, 90);
  noStroke();
  ellipse(222, 218, 40, 26);
  ellipse(378, 218, 40, 26);

  // 모자
  fill(42, 26, 10);
  stroke(20, 10, 0);
  strokeWeight(2);
  rect(220, hatY + 44, 160, 16, 5); // 챙
  rect(234, hatY, 132, 48, 8); // 모자 몸통
  fill(180, 140, 20);
  noStroke();
  ellipse(300, hatY + 10, 30, 12); // 배지
  // 왼팔
  push();
  translate(188, 275);
  if (saluteOn) {
    scale(-1, 1);
    translate(10, 0);
  }
  rotate(leftArmAngle);

  // 팔
  fill(74, 94, 58);
  stroke(46, 61, 34);
  strokeWeight(2);
  rect(-58, 0, 58, 105, 22);

  // 손
  fill(240, 192, 128);
  stroke(200, 149, 74);
  strokeWeight(1.5);
  ellipse(-29, 112, 52, 26);

  pop();
// if (!gifSaved) {
//   saveGif("salute", 10);
//   gifSaved = true;
// }

}
function keyPressed() {
  if (key === "h" || key === "H") {
    hatOn = !hatOn;
    hatTargetY = hatOn ? 40 : -200;
  }
}
function mousePressed() {
  saluteOn = !saluteOn;
  leftArmTarget = saluteOn ? radians(143) : 0;
}

