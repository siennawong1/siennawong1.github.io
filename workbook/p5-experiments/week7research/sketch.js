let points = [];
let font;

function preload() {
  font = loadFont('./data/PressStart2P-Regular.ttf'); // Techy pixel font
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(1);

  // Smaller text size
  let textSizeValue = 72;
  let bounds = font.textBounds("Research", 0, 0, textSizeValue);
  let x = width / 2 - bounds.w / 2;
  let y = height / 2 + bounds.h / 2;

  points = font.textToPoints("Research", x, y, textSizeValue, {
    sampleFactor: 0.15,
  });
}

function draw() {
  background('#DFDFDF'); // Light gray background

  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    // Simple wire effect using dark green
    stroke(0, 100, 0, 150);  // Dark green with slight transparency
    line(p.x, p.y, mouseX, mouseY);
  }
}
