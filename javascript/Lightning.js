var startx=0, starty=150, endx=0, endy=150, width=300;
function setup() {
  var cnv=createCanvas(width, width);
  cnv.parent('sketchholder');
  strokeWeight(2);
  background(0);
}


function draw() {
  var rand = (Math.random() * 255) + 1;
  var rand2 = (Math.random() * 255) + 1;
  var rand3 = (Math.random() * 255) + 1;

  stroke(rand, rand2, rand3);
  while (endx < width)
  {
    var L=(int)(Math.random() * 9 );
    var L2=(int)(Math.random() * 19) -9;
    endx=startx+L;
    endy=starty+L2;
    line(startx, starty, endx, endy);
    startx=endx;
    starty=endy;
  }
}
function mousePressed(){
  startx=0;
  starty=150;
  endx=0;
  endy=150;
  
}