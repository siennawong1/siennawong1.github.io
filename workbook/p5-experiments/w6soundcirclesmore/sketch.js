let input;
let bg;

function setup() {
  createCanvas(800, 600);

  // Create Audio Input
  input = new p5.AudioIn();
  input.start();

  // Set bright green background
  bg = color(0, 180, 0);
  background(bg);
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  let volume = input.getLevel();

  // Increased sensitivity
  let threshold = 0.02;

  if (volume > threshold) {
    drawCircleCluster(volume);
  }
}

function drawCircleCluster(volume) {
  noStroke();

  // Lighter orange for larger circles
  let largerCircleColor = color(255, 165, 0); // Light Orange
  fill(largerCircleColor);

  // Choose a central point
  let cx = random(width);
  let cy = random(height);

  // Draw 5-10 circles in a cluster
  let numCircles = int(random(5, 10));
  for (let i = 0; i < numCircles; i++) {
    let angle = random(TWO_PI);
    let radius = random(10, 80); // Cluster radius
    let x = cx + cos(angle) * radius;
    let y = cy + sin(angle) * radius;

    // Adjust circle sizes based on the volume level with more sensitivity for larger circles
    let size = map(volume, 0, 1, 5, 150); // Increase sensitivity for larger circles
    size = constrain(size, 5, 150); // Constrain the size to a reasonable range

    circle(x, y, size);
  }
}

function keyPressed() {
  if (key === 'C' || key === 'c') {
    background(bg);
  }
}