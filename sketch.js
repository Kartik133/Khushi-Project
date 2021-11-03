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
  text("GREEN VALLEY",width/2,200);
  text("PUBLIC SCHOOL",width/2,450);
  text("SPECTROSCOPY",width/2,height/2+200);
  textSize(150);
  text("SUBMITTED TO:",width/2-200,height/2+800);
  text("SUBMITTED BY:",width/2-200,height/2+1000);
  text("PANAKJ SIR",width/2+300,height/2+800);
  text("KHUSHI KHAITAN",width/2+300,height/2+1000);
}
