let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Arial');
  noStroke();

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255); // white background

  let vol = mic.getLevel();
  let amplifiedVol = constrain(vol * 10, 0, 2); // increased sensitivity for medium sounds
  let threshold = 0.5; // smaller threshold to trigger the 'little Rs' at a lower volume

  // Set color (orange to green based on volume)
  let r = map(amplifiedVol, 0, 1, 255, 0);
  let g = map(amplifiedVol, 0, 1, 165, 255);
  fill(r, g, 0);

  if (amplifiedVol > threshold) {
    // Break into little Rs for medium sounds
    textSize(30);
    for (let i = 0; i < 50; i++) {
      let x = random(width);
      let y = random(height);
      text('R', x, y);
    }
  } else {
    // Normal big R that reacts to sound (but not too much at low volume)
    let rSize = map(amplifiedVol, 0, 1, 300, 220); // less movement at low volume
    textSize(rSize);
    textAlign(LEFT, TOP);
    text('R', 0, 0);
  }

  // Static "research" label
  fill(255, 165, 0);
  textSize(50);
  textAlign(LEFT, TOP);
  text('research', 20, 250);

  // Additional instructions
  fill(255, 165, 0); // Same orange color
  textSize(12); // Smaller text for the instruction
  textAlign(LEFT, TOP);
  text('Please click or clap or make some \nnoise to see the end result. If it does \nnot work please go back to Week 6 \nthen enter the file again.', 20, 310);
}