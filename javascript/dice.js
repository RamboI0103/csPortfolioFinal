function setup() {
  var cnv=createCanvas(500, 500);
  cnv.parent('sketchholder');
  background(0);
  //frameRate(1);
  noLoop();
}
function draw() {
  var rolls="";
  var total=0;
  var r = 0;
  strokeWeight(3);
  fill(100);
  rect(0, 0, 500, 500);//clear screen rect
  var d1 = new Die(0,0);
  r=d1.roll();
  total += r;
  rolls=rolls+" "+ r;
  d1.show();
  var d2 = new Die(200,0);
  r=d2.roll();
  total += r;
  rolls=rolls+" "+ r;
  d2.show();
  var d3 = new Die(400,0);
  r=d3.roll();
  total += r;
  rolls=rolls+" "+ r;
  d3.show();
  var d4 = new Die(0,200);
  r=d4.roll();
  total += r;
  rolls=rolls+" "+ r;
  d4.show();
  var d5 = new Die(200,200);
  r=d5.roll();
  total += r;
  rolls=rolls+" "+ r;
  d5.show();
  var d6 = new Die(400,200);
  r=d6.roll();
  total += r;
  rolls=rolls+" "+ r;
  d6.show();
  var d7 = new Die(0,400);
  r=d7.roll();
  total += r;
  rolls=rolls+" "+ r;
  d7.show();
  var d8 = new Die(200,400);
  r=d8.roll();
  total += r;
  rolls=rolls+" "+ r;
  d8.show();
  var d9 = new Die(400,400);
  r=d9.roll();
  total += r;
  rolls=rolls+" "+ r;
  d9.show();
  textSize(20);
  text("Total: " + total,200,370);
  text("current rolls: " + rolls, 90, 140);
  var average=total/9;
  text("Average: " + average,200,350);
}
function mousePressed()
{
  redraw();
}
class Die //models one single dice cube
{
  constructor(x, y) //constructor
  {
    this.posx = x;
    this.posy = y;
    this.myroll = 0;
  }
  roll()
  {  
    this.myroll=(int)(Math.random()*6)+1;
    return this.myroll;
  }
  show()
  {
    strokeWeight(3);
    fill(100);
    fill(255);//white
    rect(this.posx, this.posy, 100, 100, 30);
    if (this.myroll == 1) {
      this.rollOne(this.posx, this.posy);
    }
    if (this.myroll == 2) {
      this.rollTwo(this.posx, this.posy);
    }
    if (this.myroll == 3) {
      this.rollThree(this.posx, this.posy);
    }
    if (this.myroll == 4) {
      this.rollFour(this.posx, this.posy);
    }
    if (this.myroll == 5) {
      this.rollFive(this.posx, this.posy);
    }
    if (this.myroll == 6) {
      this.rollSix(this.posx, this.posy);
    }
  }
  rollOne( x,  y) {
    fill(0);
    ellipse(x+50, y+50, 10, 10);
  }
  rollTwo( x,  y) {
    fill(0);
    ellipse(x+25, y+25, 10, 10);
    ellipse(x+75, y+75, 10, 10);
  }
  rollThree( x,  y) {
    fill(0);
    ellipse(x+50, y+50, 10, 10);
    ellipse(x+25, y+25, 10, 10);
    ellipse(x+75, y+75, 10, 10);
  }
  rollFour( x,  y) {
    fill(0);
    ellipse(x+25, y+25, 10, 10);
    ellipse(x+75, y+75, 10, 10);
    ellipse(x+75, y+25, 10, 10);
    ellipse(x+25, y+75, 10, 10);
  }
  rollFive( x,  y) {
    fill(0);
    ellipse(x+25, y+25, 10, 10);
    ellipse(x+75, y+75, 10, 10);
    ellipse(x+75, y+25, 10, 10);
    ellipse(x+25, y+75, 10, 10);
    ellipse(x+50, y+50, 10, 10);
  } 
  rollSix( x,  y) {
    fill(0);
    ellipse(x+25, y+25, 10, 10);
    ellipse(x+75, y+75, 10, 10);
    ellipse(x+75, y+25, 10, 10);
    ellipse(x+25, y+75, 10, 10);
    ellipse(x+25, y+50, 10, 10);
    ellipse(x+75, y+50, 10, 10);
  }
}
