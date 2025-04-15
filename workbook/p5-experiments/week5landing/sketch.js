let points = [];
let font;
let allPoints = [];

function preload() {
  font = loadFont('./data/Moms_typewriter.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0, 50, 0); // dark green background

  let baseY = height / 2;
  let spacing = 160;
  let fontSize = 144;

  for (let i = -2; i <= 4; i++) {
    let yOffset = baseY + i * spacing;
    let linePoints = font.textToPoints("Week 5",
      width / 2 - 100,
      yOffset,
      fontSize, {
        sampleFactor: 0.2,
      }
    );
    allPoints.push(...linePoints);
  }
}

function draw() {
  background(0, 30, 0); // dark green background

  let xMappedSize = map(mouseX, 0, width, 1, 2.5);

  fill(255, 200, 0);
  noStroke();
  for (let p of allPoints) {
    ellipse(p.x, p.y, xMappedSize, xMappedSize);
  }

  // Solid orange circle as cursor
  fill(255, 200, 0);
  ellipse(mouseX, mouseY, 120);
}