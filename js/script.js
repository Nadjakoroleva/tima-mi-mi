let clr = 0;
let cat;

function setup() {
  createCanvas(1000, 1000);
}

function preload() {
  // preload() runs once
  cat = loadImage("cat.jpg");
}

function draw() {
  background("#581BCB");
  fill("#A612C4");
  rect(150, 150, 250, 250);
  fill("#00FFF0");
  text("кликни там котик", 200, 250);
  textSize(20);
}

function mouseClicked() {
  if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400) {
    image(cat, 50, 50);
  }
}
