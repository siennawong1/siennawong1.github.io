let points = [];
let font;
let trail = [];

function preload() {
  font = loadFont('./data/GloriaHallelujah-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  let fontSize = 144;
  let textStr = "Process";

  // Center text using bounds and update text points
  let bounds = font.textBounds(textStr, 0, 0, fontSize);
  let x = width / 2 - bounds.w / 2;
  let y = height / 2 + bounds.h / 2;

  points = font.textToPoints(textStr, x, y, fontSize, {
    sampleFactor: 0.2,
  });

  background(0, 0); // Start with transparent background
}

function draw() {
  clear(); // Keeps background transparent

  // Pulse effect for text
  let baseSize = 16;
  let pulse = sin(frameCount * 0.05) * 4;

  stroke(0, 255, 0, 150); // Turquoise stroke
  strokeWeight(2);
  noFill();

  for (let p of points) {
    let size = baseSize + pulse;
    let innerSize = size * 0.6;
    ellipse(p.x, p.y, size, size);
    ellipse(p.x, p.y, innerSize, innerSize);
  }

  // Add current mouse position to trail
  trail.push({ x: mouseX, y: mouseY });

  // Draw the continuous line
  stroke(0, 255, 0); // Bright turquoise
  strokeWeight(2);
  noFill();

  beginShape();
  for (let pt of trail) {
    vertex(pt.x, pt.y);
  }
  endShape();
}