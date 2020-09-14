var currscreen;
var playbutton,playbuttonimg;

function preload () {
 playbuttonimg  = loadImage("./Images/playbutton2x.png")   

}
function setup(){
createCanvas(windowWidth,windowHeight);
    currscreen = "home"
    playbutton = createSprite(windowWidth/2,windowHeight/2,50,50)
  // playbutton.addImage(playbuttonimg);

}

function draw(){
background(0,0,0)

drawSprites();
}
