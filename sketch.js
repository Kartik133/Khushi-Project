var a,b;

function preload() {
  a = loadFont("ALGER.TTF");
  b = loadFont("LHANDW,ttf");
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
  text("ACKNOWLEDGEMENT",width/2,300);
  textSize(90);
  textFont(b);
  text("It would be my atmost pleasure to express my",width/2,550);
  text("sincere thanks to the honourable director sir Mr.",width/2,800);
  text("G.S.BHATIYA, principal maam Mrs. RAVINDRA",width/2,1050); 
  text("KAUR and to our chemistry teacher Mr.PANKAJ",width/2,1300);
  text("in providing a helpful hand in this project. Their",width/2,1550);
  text("valuable guidance, support, motivation and",width/2,1800);
  text("supervision all through this project are responsible",width/2,2050);
  text("for attaining its present form. So, i would like to",width/2,2300);
  text("convey my deep gratitude to all of them for giving",width/2,2550);
  text("me such a great opportunity and also providing",width/2,2800);
  text("me with all necessary and usefull guidelines. I",width/2,3050);
  text("would also like to thanks my parents and friends",width/2,3300);
  text("for extending their full support and for helping",width/2,3550);
  text("me in this project.",width/2,3800);
}
