let font;

function preload() {
  font = loadFont('./data/Bytesized-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(133, 133, 150); // Cool grey background

  // Square properties
  let squareX = 500;
  let squareY = height / 2;
  let squareSize = 25; // Size equivalent to circle diameter

  let numWires = 5;

  // Wire anchors
  let anchors = [];
  for (let i = 0; i < numWires; i++) {
    let angle = map(i, 0, numWires - 1, -PI / 4, PI / 4);
    let anchorX = squareX + cos(angle) * (squareSize / 2);
    let anchorY = squareY + sin(angle) * (squareSize / 2);
    anchors.push(createVector(anchorX, anchorY));
  }

  // Draw wires
  stroke(94, 255, 61); // Green wires
  noFill();

  for (let i = 0; i < anchors.length; i++) {
    let anchor = anchors[i];

    beginShape();
    curveVertex(anchor.x, anchor.y);
    curveVertex(anchor.x, anchor.y); // Fixed end

    for (let j = 1; j <= 6; j++) {
      let t = j / 6;
      let targetX = lerp(anchor.x, mouseX, t);
      let targetY = lerp(anchor.y, mouseY + 10, t);
      let wave = sin(t * TWO_PI * 2 + frameCount * 0.05 + i) * 20;
      curveVertex(targetX, targetY + wave);
    }

    curveVertex(mouseX, mouseY + 10);
    endShape();
  }

  // Draw square (instead of circle)
  fill(94, 255, 61);
  noStroke();
  rectMode(CENTER);
  rect(squareX, squareY, squareSize, squareSize);

  // Draw "2c", "Week", and "7" in green
  fill(94, 255, 61);
  noStroke();
  textSize(372);
  text("2c", squareX - 180, squareY - 310); // Position "2c" above "Week"
  textSize(200);
  text("Week", squareX - 180, squareY - 100);
  textSize(150);
  text("7-9", squareX - 100, squareY + 20);
}
