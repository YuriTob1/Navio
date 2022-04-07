var navio, navioImage;
var mar, marImage;

function preload() 
{
  navioImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  marImage = loadImage("sea.png");
}

function setup() 
{
createCanvas(600, 300);

mar = createSprite(30,190,600,200);
mar.addImage(marImage);
mar.x = mar.width /2;
mar.velocityX = -4;
mar.scale = 0.3;

navio = createSprite(60, 200, 30, 30);
navio.addAnimation("navio", navioImage);
navio.scale = 0.2;


}

function draw() 
{
background("blue");

if(mar.x<0)
{
  mar.x = mar.width /12;
}



drawSprites();
}