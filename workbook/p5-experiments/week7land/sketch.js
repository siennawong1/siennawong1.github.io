let path = [];
let bendStrength = 5; // How much the wire bends when clicked
let pulseSpeed = 0.02; // Speed of the pulsing effect
let pulseFactor = 0; // Factor to control the pulse

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(211, 211, 211); // Pale grey background (solid)
  noFill();
  
  // Initialize the path with the current mouse position when the page first loads
  path.push(createVector(mouseX, mouseY));
}

function draw() {
  // Create a point that is a little bit random around the mouse position for smooth "bending" effect
  let mousePos = createVector(mouseX, mouseY);
  
  if (mouseIsPressed) {
    // Apply some random bend when the mouse is pressed
    mousePos.x += random(-bendStrength, bendStrength);
    mousePos.y += random(-bendStrength, bendStrength);
  }

  // Add the new point to the path
  path.push(mousePos);

  // Calculate pulsing effect (sinusoidal wave to create smooth pulsing)
  pulseFactor = sin(frameCount * pulseSpeed) * 0.5 + 0.5; // Oscillates between 0 and 1

  // Calculate pulse size and transparency
  let glowAlpha = max(150, 255 * pulseFactor); // Ensure alpha never goes too low
  let glowWeight = 20 + pulseFactor * 30; // Pulse the thickness of the wire, increased size

  // Draw the glowing pastel green wire with an orange outer glow
  for (let i = 0; i < 3; i++) {
    // Make the glowing effect by layering the wire with slight offsets
    let offset = i * 2;
    
    // Pastel green inner color for the wire
    if (i === 0) {
      stroke(150, 255, 150, glowAlpha); // Pastel green inner color
    } 
    // Pastel orange outer glow with pulsing effect
    else {
      stroke(255, 185, 100, glowAlpha - i * 50); // Pastel orange color with pulsing transparency
    }
    
    strokeWeight(glowWeight + i * 2);  // Gradually increase stroke weight for glow effect
    beginShape();
    for (let j = 0; j < path.length; j++) {
      let p = path[j];
      curveVertex(p.x + offset, p.y + offset); // Slightly offset each layer
    }
    endShape();
  }
}

// To prevent the wire from becoming too long, you can clear the path after a certain number of points
function mousePressed() {
  path = []; // clear path on click to restart the wire
}
