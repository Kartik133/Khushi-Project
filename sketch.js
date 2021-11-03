var a;

function preload() {
  a = loadFont("ALGER.TTF");
}

function setup() {
  createCanvas(2480,3365);
}

function draw() {
  background(255,255,191);
  
  textAlign(CENTER);
  textFont(a);
  textSize(50);
  noStroke();
  fill(0);
  text("GREEN VALLEY",width/2,100);
  text("PUBLIC SCHOOL",width/2,150);
}
