// I tried to recreate Piet Mondrian's Composition with Yellow, Blue, and Red (1937-1942)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);
  noStroke();
  strokeCap(SQUARE);
  
  fill(255, 255, 0);
  rect(0, 0, 50, 80); // yellow rectangle
  
  fill(0, 100, 255);
  rect(50, 340, 90, 15); // blue rectangle
  
  fill(255, 0, 0);
  rect(220, 270, 60, 60); // red square
  rect(350, 340, 50, 15); // red rectangle
  
  stroke(0);
  strokeWeight(7);
  line(50, 0, 50, 400); // vertical 1
  line(90, 0, 90, 400); // vertical 2
  line(120, 0, 120, 400); // vertical 3
  line(140, 0, 140, 400); // vertical 4
  line(220, 0, 220, 400); // vertical 5
  line(280, 0, 280, 400); // vertical 6
  line(300, 0, 300, 400); // vertical 7
  line(350, 0, 350, 400);
  
  line(0, 80, 400, 80); // horizontal 1
  line(0, 140, 400, 140); // horizontal 2
  line(0, 180, 400, 180); // horizontal 3
  line(0, 240, 400, 240); // horizontal 4
  line(0, 270, 400, 270); // horizontal 5
  line(220, 330, 300, 330); // horizontal 6
  line(220, 390, 300, 390); // horizontal 7
}
