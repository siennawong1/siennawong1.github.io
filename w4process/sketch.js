let trail = []; // Array to store the position of the circles

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER, CENTER); // Centers the text horizontally and vertically
}

function draw() {
  // Remove the background so the trail remains on the canvas
  background(204, 255, 204); // pastel green background (remove this)

  // Add the current mouse position to the trail array
  trail.push({ x: mouseX, y: mouseY });

  // Limit the trail length to avoid performance issues
  if (trail.length > 10000) { // Increase the limit to allow more trail points
    trail.shift(); // Remove the oldest trail element
  }

  // Draw the trail effect (smaller orange circles)
  fill(255, 165, 0); // Orange color
  for (let i = 0; i < trail.length; i++) {
    let alpha = map(i, 0, trail.length, 50, 255); // Make older circles more transparent
    fill(255, 165, 0, alpha);
    ellipse(trail[i].x, trail[i].y, 50); // Smaller circle size
  }

  // Green title and description text across the page
  fill(204, 255, 204); // Dark green text
  textSize(64);

  // Define spacing for rows and columns
  let cols = 5; // Number of columns
  let rows = 5; // Number of rows

  // Calculate the width and height between text instances
  let spacingX = width / cols;
  let spacingY = height / rows;

  // Loop through the rows and columns to display "Workshop" text
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      text("Process", spacingX * i + spacingX / 2, spacingY * j + spacingY / 2); // Position each "Workshop"
    }
  }


}