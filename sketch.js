var bg,bg1,bg2;
var playButton;
var hero,heroImg;
var villian,villianImg;
function preload(){
  bg1 = loadImage("img.jpg");
 // bg2 = loadImage("3e34241216a5d7004a5ea03d91b44a97.jpg");
 // playButton = loadImage("ba29806ff4cb7ad225a05293c8cc97e9.jpg");
  //heroImg = loadImage("747f27dedf152653f422a765442fbdbe.jpg")
  //villianImg = loadImage("4054066102775dba826c2a5ffe85da9e.jpg")
}
function setup(){
  createCanvas(windowWidth,windowHeight-20);
bg = createSprite(200,200);
bg.addImage(bg1);
bg.scale = 0.5;
play = createSprite(200,300,10,5);
//play.addImage(playButton);
play.scale = 0.25;
hero = createSprite(200,150)
//hero.addImage(heroImg)
hero.scale = 0.5;

}
function draw(){
  background("white");
  textFont("Arial");
  textSize(24);
  strokeWeight(3);
  stroke("white");
  fill("blue");
  var c = text("SAVE THE VICTIM", 100, 25);
  c.depth = bg.depth
  c.depth += 2
  
  
  if (mousePressedOver(play)){
  // bg.addImage(bg2)
   //bg.scale = 2.5
   hero.remove(heroImg)
   play.remove(playButton)
   villian = createSprite(215,250)
   //villian.addImage(villianImg)
   villian.scale = 0.5
   
  }
  drawSprites();
}
