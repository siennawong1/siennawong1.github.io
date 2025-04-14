let points = []; 
let font;
let angle = 0;
let r = 10; // Radius for sine wave distortion
let offsetX = 0;
let offsetY = 0;

function preload() {
  font = loadFont('data/Lobster-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);

  let textStr = "Workshop";
  let textSizeVal = 144;

  // Get points of the text
  let rawPoints = font.textToPoints(textStr, 0, 0, textSizeVal, {
    sampleFactor: 10,
    simplifyThreshold: 0.2
  });

  // Get bounding box for centering
  let bounds = font.textBounds(textStr, 0, 0, textSizeVal);

  // Centering calculation
  offsetX = (width - bounds.w) / 2 - bounds.x;
  offsetY = (height / 2) - (bounds.h / 2) - bounds.y;

  // Apply offset to center the points
  points = rawPoints.map(pt => ({
    x: pt.x + offsetX,
    y: pt.y + offsetY
  }));

  angleMode(DEGREES);
  noStroke();
  fill(0);
}

function draw() {
  background(160);

  // Draw the animated "Workshop" text
  fill(0);
  for (let i = 0; i < points.length; i++) {
    let x = points[i].x + r * sin(angle + i * 10);
    let y = points[i].y;
    ellipse(x, y, 5);
  }

  angle += 5;

  // Draw cursor dot
  fill(0);
  ellipse(mouseX, mouseY, 10);

  // Draw white number 8 in the adjusted position
  fill(255);
  noStroke();
  textSize(100);
  textAlign(LEFT, BOTTOM);
  text("8", 300, height - 130); // Moved up and to the right
}