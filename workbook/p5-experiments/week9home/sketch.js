let anchorX, anchorY;
let startTime;
let topCircleX, topCircleY;

function setup() {
  createCanvas(windowWidth, windowHeight);  // Canvas covers the full window
  anchorX = width - 200;
  anchorY = height - 200;
  startTime = millis();
  
  // Set top center circle position
  topCircleX = width / 2;
  topCircleY = 50;  // Near the top of the screen
}

function draw() {
  background (180, 170, 160); // warm grey background
  const green = color(0, 100, 0);
  const white = color(255);  // White for the new line

  // Draw line from anchor to mouse cursor
  stroke(green);
  strokeWeight(1.5);
  line(anchorX, anchorY, mouseX, mouseY);

  // Draw new white line from top center circle to the mouse cursor
  stroke(white);
  strokeWeight(1.5);
  line(topCircleX, topCircleY, mouseX, mouseY);

  // Draw anchor dot
  fill(green);
  noStroke();
  ellipse(anchorX, anchorY, 20, 20);

  // Draw circle at mouse end (cursor dot)
  fill(green);
  ellipse(mouseX, mouseY, 10, 10);

  // Draw top center circle
  fill(white);
  noStroke();
  ellipse(topCircleX, topCircleY, 20, 20);

  // Info values
  let coords = `(${mouseX}, ${mouseY})`;
  let angleRad = atan2(mouseY - anchorY, mouseX - anchorX);
  let angleDeg = degrees(angleRad).toFixed(1);
  let elapsed = ((millis() - startTime) / 1000).toFixed(1);
  let info = `${coords} | ${angleDeg}° | ${elapsed}s`;

  // Adjust angle to keep text upright
  let displayAngle = angleRad;
  if (cos(angleRad) < 0) {
    displayAngle += PI;
  }

  // Offset text perpendicular to the line to sit above it
  let offsetDistance = -15; // negative to go above
  let offsetX = offsetDistance * sin(angleRad);
  let offsetY = -offsetDistance * cos(angleRad);

  // Display text offset from line
  push();
  translate(mouseX + offsetX, mouseY + offsetY);
  rotate(displayAngle);
  fill(green);
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  text(info, 10, 0);
  pop();
}

// Resize canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas to the new window size
}
