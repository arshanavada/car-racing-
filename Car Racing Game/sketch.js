var gmstate="main",blackcarside,blackcarrace,orangecarside,orangecarrace,redcarside,redcarrace;
var sedancarside,sedancarrace,silvercarside,silvercarrace,smallcarside,smallcarrace;
var smalfastcarside,smallfastcarrace,firstcarside,firstcarrace,policecarside,policecarrace;
var player,play,background,mainscreen;

function preload()
{
  smalfastcarside=loadImage("Small fast car side.png");
 smallfastcarrace=loadImage("Small fast car race.png");
blackcarside=loadImage("Black car side.png");
blackcarrace=loadImage("Black car race.png");
orangecarside=loadImage("Orange car side.png");
orangecarrace=loadImage("Orange car race .png");
redcarside=loadImage("Red car side.png");
  redcarrace=loadImage("Red car race.png");
sedancarside=loadImage("Sedan car Side.png");
sedancarrace=loadImage("Sedan car race.png");
silvercarside=loadImage("Silver car side.png");
silvercarrace=loadImage("Silver car race.png");
smallcarside=loadImage("Small car side.png ");
smallcarrace=loadImage("Small car race.png");
firstcarrace=loadImage("first car race.png");
firstcarside=loadImage("first car side.png");
policecarrace=loadImage("police car race.png")
policecarside=loadImage("police car side.png")
 play=loadImage("play.png");
 mainscreen=loadImage("main screen pic.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw()
 {
  background(255,255,255);  
  if(gmstate==="main")
  {
   background=createSprite(900,700);
   background.addImage("main screen",mainscreen);

    //play = createSprite(width-70, height-70, 20, 20);
    //play.addImage("play.png",play);
    if(MousePressedOver(play))
    {
      gmstate="chooseplay";
    }
    if(gmstate==="chooseplay")
    {
      
    }


  }
  drawSprites();
 }
