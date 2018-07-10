// Global Variables
var p5Canvas;
var myName;
var count;
var x=40;
var y=40;
var a=40;
var b=40;


// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Adrian");
}

function draw(){
    background(100, 0, 100);
    draw10circles();
}
            
function draw10circles(){
    var count= 0;
    while(count<=5){
        fill("gold");
        ellipse(x+50, y+50, a, b);
        ellipse(x+100, y+100, a, b);
        ellipse(x+150, y+150, a, b);
        ellipse(x+200, y+200, a, b);
        ellipse(x+250, y+250, a, b);
        ellipse(x+300, y+300, a, b);
        ellipse(x+350, y+350, a, b);
        ellipse(x+400, y+400, a, b);
        ellipse(x+450, y+450, a, b);
        ellipse(x+500, y+500, a, b);
        count+=1;
        x+=.2;
        y-=.2;
    }
}