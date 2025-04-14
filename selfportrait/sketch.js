let circleSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  background(189, 189, 189);
}

function draw() {
  circleSize = random(100, 300);
  let r = random(255);
  let g = random(255);
  let b = random(255);

  fill(r, g, b, 30);

  // Left hair
  circle(200, height / 2 + 100, circleSize);

  // Smaller hair left
  let smallerHairSize = random(200, 50);
  circle(200, 400, smallerHairSize);

  // Smaller hair left left
  let xsmallerHairSize = random(150, 50);
  circle(200, 270, xsmallerHairSize);

  // Left top fringe smallest
  let fringesmallerHairSize = random(100, 50);
  circle(250, 180, fringesmallerHairSize);
  circle(310, 130, fringesmallerHairSize);
  circle(390, 120, fringesmallerHairSize);
  circle(470, 125, fringesmallerHairSize);
  circle(540, 175, fringesmallerHairSize);

  // Right hair
  circle(600, height / 2 + 100, circleSize);

  // Smaller right hair
  circle(600, 400, smallerHairSize);

  // Smaller hair right right
  circle(600, 270, xsmallerHairSize);

  // Body
  fill(11, 67, 33);
  noStroke();
  rect(270, 650, 250, 800, 15);

  // Text: "Click to see my teeth"
  fill(255); // White text color
  textAlign(CENTER);
  textSize(24);
  text("Click to see my teeth", width / 2, 620); // Position it above the body rectangle

  // Face shape (ellipse)
  fill(212, 224, 189);
  noStroke();
  ellipse(400, 400, 400, 500); // center x, center y, width, height

  // Nose
  fill(68, 255, 187);
  stroke(68, 255, 187);
  strokeWeight(8);
  triangle(400, 350, 370, 450, 430, 450);
  fill(8, 25, 187);
  triangle(400, 335, 380, 445, 420, 445);

  // Left eye
  fill(203, 181, 254);
  stroke(231, 221, 255);
  strokeWeight(5);
  circle(320, 300, 65);
  fill(r, g, b);
  stroke(255, 204, 0);
  strokeWeight(0);
  circle(320, 300, 35);

  // Right eye
  fill(203, 181, 254);
  stroke(231, 221, 255);
  strokeWeight(5);
  circle(480, 300, 65);
  fill(r, g, b);
  stroke(255, 204, 0);
  strokeWeight(0);
  circle(480, 300, 35);

  // Eyebrow left
  fill(101, 67, 33);
  rect(270, 250, 100, 10);

  // Eyebrow right
  fill(101, 67, 33);
  rect(430, 250, 100, 10);

  // Mouth
  fill(101, 67, 33);
  stroke(255, 204, 0);
  strokeWeight(5);
  rect(310, 500, 190, 87, 15);

  // Teeth
  if (mouseIsPressed) {
    fill(255); // white teeth
    noStroke();

    // Top teeth
    rect(320, 510, 20, 30);
    rect(350, 510, 20, 30);
    rect(380, 510, 20, 30);
    rect(410, 510, 20, 30);
    rect(440, 510, 20, 30);
    rect(470, 510, 20, 30);

    // Bottom teeth
    rect(320, 545, 20, 30);
    rect(350, 545, 20, 30);
    rect(380, 545, 20, 30);
    rect(410, 545, 20, 30);
    rect(440, 545, 20, 30);
    rect(470, 545, 20, 30);
  }
}