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
  let amplifiedVol = vol * 4; // moderate sensitivity

  // Ignore quiet sounds below threshold
  let threshold = 0.05;
  if (amplifiedVol < threshold) {
    amplifiedVol = 0;
  } else {
    amplifiedVol = constrain(map(amplifiedVol, threshold, 1, 0, 1), 0, 1);
  }

  // Interpolate from dark mint green to white based on volume
  let darkMintGreen = color('#3EB489'); // darker mint green
  let white = color(255);
  let pColor = lerpColor(darkMintGreen, white, amplifiedVol);
  fill(pColor);

  // Big sliding 'P'
  let xPos = map(amplifiedVol, 0, 1, 0, width - 200);
  textSize(305);
  textAlign(LEFT, TOP);
  text('P', xPos, 0);

  // Static "process" label
  fill('#3EB489');
  textSize(50);
  text('process', 20, 250);

  // Instructions
  textSize(12);
  text('Please say ahhh and make some \nnoise to see the end result. If it \ndoes not work please go back to \nWeek 6 then enter the file again.', 20, 310);
}