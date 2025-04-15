let hereX, hereY;
let showHere = false;
let bytesizedFont;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Load the Bytesized font from the local "data" folder
  bytesizedFont = loadFont('data/Bytesized-Regular.ttf'); // Adjust the path if necessary

  textFont(bytesizedFont); // Set the font to Bytesized
  textSize(48);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0); // Black background

  // Draw "workshop" at the mouse position with the Bytesized font, in white
  fill(255); // White color for "workshop"
  text("workshop", mouseX, mouseY);

  // If a key was pressed, draw "here" in a random position with the Bytesized font
  if (showHere) {
    fill(255, 165, 0); // Green color for "here"
    text("here", hereX, hereY);
  }
}

function keyPressed() {
  hereX = random(width);
  hereY = random(height);
  showHere = true;
}