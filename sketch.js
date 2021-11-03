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
  textSize(200);
  noStroke();
  fill(0);
  text("GREEN VALLEY",width/2,100);
  text("PUBLIC SCHOOL",width/2,200);
  text("SPECTROSCOPY",width/2,height/2+100);
  text("SUBMITTED TO:      PANAKJ SIR",width/2,height/2+600);
  text("SUBMITTED BY:    KHUSHI KHAITAN",width/2,height/2+700);
}
