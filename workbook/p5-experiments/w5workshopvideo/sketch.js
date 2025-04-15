let video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(160);

  let gridSize = int(map(mouseX, 0, width, 15, 50));

  video.loadPixels();
  for (let y = 0; y < video.height; y += gridSize) {
    for (let x = 0; x < video.width; x += gridSize) {
      let index = (y * video.width + x) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let brightness = (r + g + b) / 3;

      // Lighter green and strong orange
      let lightGreen = color(180, 255, 180); // soft minty green
      let orange = color(255, 140, 0);       // vivid orange

      // Shift blend more toward orange (e.g., 70% orange, 30% green)
      let mixFactor = map(brightness, 0, 255, 0.3, 1.0);
      let mixed = lerpColor(lightGreen, orange, mixFactor);

      let dia = map(brightness, 0, 255, gridSize, 2);

      fill(mixed);
      noStroke();
      circle(x + gridSize / 2, y + gridSize / 2, dia);
    }
  }
}