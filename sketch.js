var a;

function preload() {
  a = loadFont("ALGER.TTF");
}

function setup() {
  createCanvas(2480,3508);
}

function draw() {
  background(255,255,191);
  
  textAlign(CENTER);
  textFont(a);
  textSize(20);
  noStroke();
  fill(0);
  text("GREEN VALLEY",width/2,100);
  text("PUBLIC SCHOOL",width/2,150);
}
