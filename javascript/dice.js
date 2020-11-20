//this need to be converted to JS
int total=0;
String rollss="";
void setup() {
  size(500, 500);
  background(0);
  frameRate(1);
  //noLoop();
}
void draw() {
  dice run=new dice();
  run.frame();
  for (int i=0; i<=400; i+=200) {
    //System.out.println("i"+i);
    for (int j=0; j<=400; j+=200) {
      //System.out.println("j"+j);
      int d=run.roll();
      if (d==1) {
        run.rollOne(j, i);
        total+=1;
      }
      if (d==2) {
        run.rollTwo(j, i);
        total+=2;
      }
      if (d==3) {
        run.rollThree(j, i);
        total+=3;
      }
      if (d==4) {
        run.rollFour(j, i);
        total+=4;
      }
      if (d==5) {
        run.rollFive(j, i);
        total+=5;
      }
      if (d==6) {
        run.rollSix(j, i);
        total+=6;
      }
    }
  }
  textSize(20);
  text("Total: " + total,200,370);
  text("current rolls:", 90, 140);
  total=total/9;
  text("Average: " + total,200,350);
}
class dice {
  String rolls="";
  dice() {
  }
  void frame() {
    strokeWeight(3);
    fill(100);
    rect(0, 0, 500, 500);//clear screen rect
    fill(255);//white
    //all the background dice squares
    rect(0, 0, 100, 100, 30);//tl
    rect(200, 0, 100, 100, 30);//tm
    rect(400, 0, 100, 100, 30);//tr
    rect(0, 200, 100, 100, 30);//ml
    rect(200, 200, 100, 100, 30);//mm
    rect(400, 200, 100, 100, 30);//mr
    rect(0, 400, 100, 100, 30);//bl
    rect(200, 400, 100, 100, 30);//bm
    rect(400, 400, 100, 100, 30);//br
  }
  int roll() {
    int roll=(int)(Math.random()*6)+1;
    //System.out.println(roll);
    rolls=rolls+" "+ roll;
    System.out.print(rolls);
    textSize(20);
    text(rolls, 210, 140);
    rollss=rolls;
    return roll;
  }
  void rollOne(int x, int y) {
    fill(0);
    ellipse(x+50, y+50, 10, 10);
  }
  void rollTwo(int x, int y) {
    fill(0);
    ellipse(x+25, y+25, 10, 10);
    ellipse(x+75, y+75, 10, 10);
  }
  void rollThree(int x, int y) {
    fill(0);
    ellipse(x+50, y+50, 10, 10);
    ellipse(x+25, y+25, 10, 10);
    ellipse(x+75, y+75, 10, 10);
  }
  void rollFour(int x, int y) {
    fill(0);
    ellipse(x+25, y+25, 10, 10);
    ellipse(x+75, y+75, 10, 10);
    ellipse(x+75, y+25, 10, 10);
    ellipse(x+25, y+75, 10, 10);
  }
  void rollFive(int x, int y) {
    fill(0);
    ellipse(x+25, y+25, 10, 10);
    ellipse(x+75, y+75, 10, 10);
    ellipse(x+75, y+25, 10, 10);
    ellipse(x+25, y+75, 10, 10);
    ellipse(x+50, y+50, 10, 10);
  } 
  void rollSix(int x, int y) {
    fill(0);
    ellipse(x+25, y+25, 10, 10);
    ellipse(x+75, y+75, 10, 10);
    ellipse(x+75, y+25, 10, 10);
    ellipse(x+25, y+75, 10, 10);
    ellipse(x+25, y+50, 10, 10);
    ellipse(x+75, y+50, 10, 10);
  }
}