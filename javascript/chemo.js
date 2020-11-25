var b_array;
var startx, starty;
function setup() {
    initializeFields();
    var cnv=createCanvas(500, 500);
    cnv.parent('sketchholder');
    background(255, 255, 255);
    strokeWeight(3);
    // initialize bacteria variables here
    for (var i = 0; i < b_array.length; i++) {
        var c1 = color(int((Math.random() * 255)) + 1, int((Math.random() * 255)) + 1, int((Math.random() * 255)) + 1);
        b_array[i] = new Bacteria(startx, starty, c1);
    }
    fill(0);
    color(0);
    //textSize(20);
    text("Click mouse anywhere to start a new bacteria", 100, 50);
    frameRate(5);
}
function draw() {
  console.log("draw", b_array.length);
    // move and show the bacteria
    for (var j = 0; j < b_array.length; j++) {
      console.log("drawwww", j);
      b = b_array[j];
      b.move();
      b.show();
    }
}
function mouseClicked() {
    // add a new bacteria
    b_array.push(new Bacteria(mouseX, mouseY, color(int((Math.random() * 255)) + 1, int((Math.random() * 255)) + 1, int((Math.random() * 255)) + 1)));
}
class Bacteria
{
  constructor(x, y, c) {
    this.posx = x;
    this.posy = y;
    this.clr = c;
    // draw the initial dot
    fill(this.clr);
    stroke(this.clr);
    circle(this.posx, this.posy, 10);
  }
  // moves the bacteria in a random walk pattern
  move() {
      var dirx = Math.random() > 0.5 ? 1 : -1;
      var diry = Math.random() > 0.5 ? 1 : -1;
      var L = int((Math.random() * 20));
      var L2 = int((Math.random() * 20));
      this.endx = this.posx + (L * dirx);
      this.endy = this.posy + (L2 * diry);
  }
  // draws the bacteria in the correct position and color
  show() {
      strokeWeight(3);
      stroke(this.clr);
      line(this.posx, this.posy, this.endx, this.endy);
      this.posx = this.endx;
      this.posy = this.endy;
  }
}
function initializeFields() {
    b_array = new Array(3);
    startx = 250;
    starty = 250;
}