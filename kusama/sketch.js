let triangleHeight1 = 0;
let triangleHeight2 = 0;
let triangleHeight3 = 0;
let triangleHeight4 = 0;

let circleSize = 40; // Fixed size for all circles
let triangleColor; // Will hold current triangle color

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(15); // Slow down the update rate
  triangleColor = color(random(255), random(255), random(255)); // Initial random color
}

function draw() {
  fill(triangleColor);
  noStroke();

  // Increase each triangle's height at different rates
  triangleHeight1 += 1; 
  triangleHeight2 += 2;
  triangleHeight3 += 1.5;
  triangleHeight4 += 2.5;
  
  // Set maximum height for each triangle
  if (triangleHeight1 > height / 4) triangleHeight1 = height / 4;
  if (triangleHeight2 > height / 3) triangleHeight2 = height / 3;
  if (triangleHeight3 > height / 2) triangleHeight3 = height / 2;
  if (triangleHeight4 > height) triangleHeight4 = height;

  // Bottom triangles
  triangle(10, height, 100, height - triangleHeight3, 200, height);
  triangle(300, height, 400, height - triangleHeight1, 450, height);
  triangle(450, height, 500, height - triangleHeight3, 650, height);
  triangle(600, height, 700, height - triangleHeight2, 750, height);
  triangle(750, height, 900, height - triangleHeight4, 1050, height);
  triangle(1050, height, 1120, height - triangleHeight3, 1200, height);
  triangle(1350, height, 1450, height - triangleHeight3, 1700, height);

  // Top triangles
  triangle(0, 0, 150, 0 + triangleHeight2, 200, 0);
  triangle(200, 0, 270, 0 + triangleHeight4, 420, 0);
  triangle(450, 0, 500, 0 + triangleHeight2, 600, 0);
  triangle(550, 0, 700, 0 + triangleHeight3, 860, 0);
  triangle(950, 0, 1050, 0 + triangleHeight2, 1100, 0);
  triangle(1150, 0, 1200, 0 + triangleHeight3, 1300, 0);
  triangle(1250, 0, 1300, 0 + triangleHeight4, 1500, 0);
  triangle(1550, 0, 1600, 0 + triangleHeight1, 1500, 0);

  // Draw random black circles
  fill(0); // black fill
  noStroke();
  for (let i = 0; i < 60; i++) {
    let xPos = random(width);
    let yPos = random(height);
    ellipse(xPos, yPos, circleSize);
  }
}

// Change triangle color on mouse click
function mousePressed() {
  triangleColor = color(random(255), random(255), random(255));
}



