var posX=200, posY=300, rate=5, delay=0;
function setup () {
  var cnv=createCanvas(500,500);
  cnv.parent('sketchholder');
  background(255);
  frameRate(30);
}
function draw() {
  var run=new thing();
  //fill(255);
  //rect(0,0,500,500);
  delay+=1;
  if (delay < 50 ){
     run.warningScreen();
  }
  else {
     run.clearStuff();
     run.calc();
     run.show(posX,posY);
  }
  //System.out.println("Delay: " + delay);
}

//just move a text item up and down
class thing {
  constructor() {
  }
  clearStuff(){
    fill((int)(Math.random()*255)+1,(int)(Math.random()*255)+1, (int)(Math.random()*255)+1);
    rect(0,0,500,500);
}
  calc() {
    //have this method calculate the next pos of the text obj 
    var a=((int) (Math.random()*5)+1);
    var b=((int) (Math.random()*10)-5);
    //System.out.println("a: " + a);
    //System.out.println("b " + b);
    if(posY > 20 && posY < 480){
      posY+=rate;
    }
    else if (posY <= 20){
      posY+=2;
      rate=a;
      
    }
    else if (posY >= 480){
      posY+= -2;
      rate= -(a);
    }
    //System.out.println("posY: " + posY);
    if(posX > 20 && posX < 340){
      posX=posX+b;
    }
    else if (posX <= 20){
      posX+=2;
      
    }
    else if (posX >= 340){
      posX+= -2;
      
    }
    
  }
  show(x,y) {
    //have this take variables x,y to draw the text from/
    fill(0);
    textSize(30);
    text("Hello World", x, y);
  }
  warningScreen(){
    fill(0);
    rect(0,0,500,500);
    fill(255);
    text("WARNING: Flashing screen",50,450);
    
  }
}