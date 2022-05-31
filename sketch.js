var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("card img.jpg");
  bg2 = loadImage("congrats.jpeg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
 //textSize(20);
 // fill("Black");
 // text("Score: " + score, 450, 50);

  if(score === 2) {
    clear()
    background(bg2)
  }

  drawSprites()
}