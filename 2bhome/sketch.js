let textX, textY; // Position of the text
let isFalling = false; // Whether the text is falling
let fallSpeed = 0; // Speed of falling
let randomSize; // Random text size
let fallenText = []; // Array to store fallen texts

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 165, 0);  // Set initial background color to orange
  fill(98);  // Set default text color
  textSize(40);  // Set default text size
}

function draw() {
  // Draw a big static "2B" in the center of the page
  textFont('Baby Doll');
  textSize(200); // Large size for center text
  fill(0, 255, 0); // Green color
  textAlign(CENTER, CENTER);
  text('2B', width / 2, height / 2);

  // Draw the text "Click anywhere" at the current mouse position
  textFont('Baby Doll');
  textSize(20);  // Reduced size for the "Click anywhere" text
  fill(0, 255, 0); // Set color of the text to green
  textAlign(LEFT, BASELINE); // Reset alignment
  text('Click anywhere', mouseX, mouseY);

  // If the text is falling, update its position
  if (isFalling) {
    textY += fallSpeed; // Move the text down by the fall speed
    fallSpeed += 1; // Gravity effect

    if (textY > height - 50) {
      textY = height - 50;
      isFalling = false;
      fallenText.push({ text: '2B', x: textX, y: textY, size: randomSize });
    }
  }

  // Draw fallen texts
  fill(0, 255, 0);
  for (let ft of fallenText) {
    textFont('Baby Doll');
    textSize(ft.size);
    text(ft.text, ft.x, ft.y);
  }

  // Draw the falling "2B"
  textSize(randomSize);
  text('2B', textX, textY);

  // Draw line trail
  stroke(0, 255, 0);
  strokeWeight(2);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
  textX = mouseX;
  textY = mouseY;
  randomSize = random(20, 100);
  isFalling = true;
  fallSpeed = 0;

  // Random orange background
  let randomOrange = random(150, 255);
  background(randomOrange, 165, 0);
}

function keyTyped() {
  textFont('Starborn');
  textSize(25);
  fill(255, 160, 0);
  text(key, mouseX, mouseY);
}