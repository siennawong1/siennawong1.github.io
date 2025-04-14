let points = [];
let font;
let prevMouseX, prevMouseY;

function preload() {
  font = loadFont('./data/RubikMonoOne-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(0, 50, 0, 150); // dark orange
  strokeWeight(1);

  // Get bounding box to center the text
  let bounds = font.textBounds("Research", 0, 0, 144);
  let x = width / 2 - bounds.w / 2;
  let y = height / 2 + bounds.h / 2;

  // Generate points for "Research" centered
  points = font.textToPoints("Research", x, y, 144, {
    sampleFactor: 0.1,
  });

  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

function draw() {
  // No background — persistent trails

  // Get mouse direction
  let dx = mouseX - prevMouseX;
  let dy = mouseY - prevMouseY;
  let angle = atan2(dy, dx);

  // Draw wavy lines from each point in the direction of the mouse
  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    let wave = sin(frameCount * 0.1 + i * 0.5) * 10;
    let len = 20 + wave;

    let x2 = p.x + cos(angle) * len;
    let y2 = p.y + sin(angle) * len;

    line(p.x, p.y, x2, y2);
  }

  prevMouseX = mouseX;
  prevMouseY = mouseY;
}


