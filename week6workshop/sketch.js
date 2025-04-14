let mic;
let angleOffsets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Arial');
  noStroke();

  mic = new p5.AudioIn();
  mic.start();

  // Random spin offsets for small Ws
  for (let i = 0; i < 10; i++) {
    angleOffsets.push(random(TWO_PI));
  }
}

function draw() {
  background(255); // white background

  let vol = mic.getLevel();
  let amplifiedVol = constrain(vol * 10, 0, 2); // MUCH more sensitive now
  let threshold = 0.2; // Lower threshold

  fill(0, 180, 0); // bright green

  // Big rotating W when sound detected
  if (amplifiedVol > threshold) {
    push();
    translate(130, 130); // move pivot to center of W
    rotate(frameCount * 0.05);
    textSize(265);
    textAlign(CENTER, CENTER);
    text('W', 0, 0);
    pop();

    // Column of spinning small Ws
    textSize(30);
    for (let i = 0; i < 10; i++) {
      let x = 100;
      let y = 300 + i * 40;

      push();
      translate(x, y);
      rotate(frameCount * 0.05 + angleOffsets[i]);
      textAlign(CENTER, CENTER);
      text('W', 0, 0);
      pop();
    }
  } else {
    // Static big W
    textSize(265);
    textAlign(LEFT, TOP);
    text('W', 0, 0);
  }

  // Static "workshop" label
  fill(0, 180, 0);
  textSize(50);
  textAlign(LEFT, TOP);
  text('workshop', 20, 230);

  // Instructions
  fill(0, 180, 0);
  textSize(12);
  textAlign(LEFT, TOP);
  text('Please say ahhh and make some noise \nto see the end result. If it does not work \nplease go back to Week 6 then enter \nthe file again.', 20, 290);
}