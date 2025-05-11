let anchorX, anchorY;
let points = [];
let lineColor;
let textColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  anchorX = windowWidth - 200;
  anchorY = windowHeight / 2;

  // Set the line and text color to white
  lineColor = color(255); // white
  textColor = lineColor;  // Match text color to line color

  background(240); // Set initial background
}

function draw() {
  background(240);

  // Draw the anchor point (dot)
  fill(lineColor);
  noStroke();
  ellipse(anchorX, anchorY, 15, 15);

  // Only draw if we have points
  if (points.length > 0) {
    // Display coordinates
    fill(textColor);
    noStroke();
    textSize(14);
    textAlign(CENTER, CENTER);
    text(`x: ${mouseX}, y: ${mouseY}`, mouseX, mouseY - 20);

    // Draw the line
    stroke(lineColor);
    strokeWeight(2);
    noFill();
    beginShape();
    vertex(anchorX, anchorY);
    for (let pt of points) {
      vertex(pt.x, pt.y);
    }
    endShape();
  }
}

function mouseMoved() {
  // Only start collecting points when the user moves the mouse
  points.push({ x: mouseX, y: mouseY });
}

function mousePressed() {
  // Set the line and text color to white on click
  lineColor = color(255);
  textColor = lineColor;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  anchorX = windowWidth - 200;
  anchorY = windowHeight / 2;
}
