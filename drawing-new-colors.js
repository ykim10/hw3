function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
}
function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'A') {
    fill('orange');
  } else if (key == 'S') {
    fill('pink');
  } else if (key == 'D') {
    fill('yellow'); 
  } else if (key == 'F') {
    fill('aqua');
  } else if (key == 'G') {
    fill(129, 22, 160);
	} else if (key == 'H') {
    fill(52, 73, 94);
	}
}
// the lettering was for my own convenience
