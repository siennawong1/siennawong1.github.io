let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Arial');
  textSize(1500);
  fill('#227a3b'); // darker green

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255);

  // Draw the "w" at the bottom left corner
  fill('#227a3b');
  textAlign(LEFT, BOTTOM); 
  textSize(1500);
  text('w', -200, height - 10); 

  // Draw the "6" in the center
  textSize(300);
  textAlign(CENTER, CENTER);
  text('6', width / 2, height / 2);

  // Microphone volume-based circle
  let volume = mic.getLevel();
  let amplified = constrain(volume * 3, 0, 1);
  let circleSize = map(amplified, 0, 1, 50, height);

  fill('#227a3b'); // darker green
  noStroke();

  // Moved circle to the right and down
  circle(width - 700, height - 425, circleSize);

  // Debug volume in console
  print("volume", volume);
}