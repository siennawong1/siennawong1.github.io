let circleSize, r, g, b, lineWeight;
let xPos, yPos;
let words = ["research", "research", "research", "research"]; // The word to pop up

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2); // Slower frame rate
}

function draw() {
  // Background set to cold grey
  background(169, 169, 169); 

  // Draw the word "research" multiple times in random positions
  for (let i = 0; i < 15; i++) { // Increase the number of words displayed
    let wordX = random(width);
    let wordY = random(height);

    let colorChoice = random() > 0.5 ? color(0, 255, 0) : color(255, 165, 0); // Green or Orange
    
    fill(colorChoice);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("research", wordX, wordY); // Draw the word "research" at random positions
  }

  // Draw lines with random weights
  for (let i = 0; i < 10; i++) {
    let lineWeight = random(2, 20); // Set random line weight
    strokeWeight(lineWeight);
    
    // Random line color between green and orange
    let lineColor = random() > 0.5 ? color(0, 255, 0) : color(255, 165, 0);
    stroke(lineColor);
    
    // Random positions for the lines
    xPos = random(width);
    yPos = random(height);
    
    // Draw the lines
    line(xPos, yPos, random(width), random(height));
  }
}