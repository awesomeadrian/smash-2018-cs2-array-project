// Global Variables
var p5Canvas;
var myName;
var count;
var xvelocity;

// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Adrian");
}

function draw() {
  background(100, 0, 100);
    ellipse( 145, 225, 230, 100);

} 
