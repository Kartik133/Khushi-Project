var a,b,c;

function preload() {
  a = loadFont("ALGER.TTF");
  b = loadFont("LHANDW.ttf");
  c = loadFont("BRLNSDB.TTF");
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
  textSize(90);
  textFont(c);
  text("CERTIFICATE",width/2,300);
  text("This is to certify that on",width/2,600);
  text("SPECTROSCOPY submitted by KHUSHI",width/2,800);
  text("AGARWAL OF CLASS XII of GREENVALLEY PUBLIC",width/2,1000);
  text("SCHOOL submitted to Mr. PANKAJ during",width/2,1200);
  text("academic session as per guidelines issued by",width/2,1400);
  text("CBSE. All the investigation work and the",width/2,1600);
  text("related data collection has been completed",width/2,1800);
  text("soley, sincerely and satisfactory. I certify",width/2,2000);
  text("that this project is upto my expectations and",width/2,2200);
  text("completed satisfactorily by me.",width/2,2400);
  textSize(150);
  text("Principal sign:                                      ",width/2,2700);
  text("Internal examinar:                              ",width/2,2950);
  text("External examinar:                             ",width/2,3200);
}
