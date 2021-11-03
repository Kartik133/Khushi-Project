var a,b;

function preload() {
  a = loadFont("ALGER.TTF");
  b = loadImage("image-removebg-preview.png");  
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
  text("GREEN VALLEY",width/2,300);
  text("PUBLIC SCHOOL",width/2,550);
  text("SPECTROSCOPY",width/2,height/2+400);
  textSize(150);
  text("SUBMITTED TO:",width/2-600,height/2+1000);
  text("SUBMITTED BY:",width/2-600,height/2+1300);
  text("PANAKJ SIR",width/2+600,height/2+1000);
  text("KHUSHI KHAITAN",width/2+600,height/2+1300);
  
  imageMode(CENTER);
  image(b,width/2+25,(((height/2+200)-550)/2)+600,1100,1100);
}
