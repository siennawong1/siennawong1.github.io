let circleSize;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
  background(200);
}

function draw() {

  circleSize = random(100, 300);
  

  let r = random(100, 255); 
  let g = random(150, 255);  
  let b = random(0, 100);    

  fill(r, g, b, 30); 
  square(mouseX, mouseY, circleSize);  
  
 
  let x = width / 2 + cos(angle) * 200;  
  let y = height / 2 + sin(angle) * 200; 
  
  fill(0); 
  textSize(48);  
  textAlign(CENTER, CENTER);  
  text("Week 4", x, y); 

  
  angle += 0.05; 
}