let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);

  let volume = mic.getLevel();
  let circleSize = map(volume, 0, 1, 50, height);
  let r = map(volume, 0, 1, 0, 255);
  let g = map(volume, 0, 1, 0, 255);
  let b = map(volume, 0, 1, 0, 255);

  // Main colored circle
  fill(r, g, b);
  circle(width / 2, height / 2, circleSize);

  // Additional black circles
  fill(0); // black color
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 10);
    circle(x, y, size);
  }

  

  print("volume", volume);
}