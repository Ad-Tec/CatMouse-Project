var cat1,cat2,cat3,cat4,Cat
var mouse1,mouse2,mouse3,mouse4,Mouse
var garden

function preload() {
    //load the images here
    cat1 = loadImage("cat1.png");
    cat2 = loadAnimation("cat2.png","cat3.png");
    cat4 = loadImage("cat4.png");
    garden = loadImage("garden.png");
    mouse1 = loadImage ("mouse1.png");
    mouse2 = loadAnimation ("mouse2.png","mouse3.png");
    mouse4 = loadImage ("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Cat = createSprite(800,600);
    Cat.addAnimation("cat1",cat1);
    Cat.scale=0.3;
    Mouse = createSprite(200,600);
    Mouse.addAnimation("mouse1",mouse1);
    Mouse.scale=0.15;

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(Cat.x-Mouse.x<(Cat.width-Mouse.width)/2){
    Cat.velocityX=0;
    Cat.addAnimation("catsitting",cat4);
    Cat.x=300;
    Cat.changeAnimation("catsitting");
    Mouse.addAnimation("mouselast",mouse4);
    Mouse.changeAnimation("mouselast");
    }
    
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
  Cat.velocityX=-5;
  Cat.addAnimation("catrunning",cat2);
  Cat.changeAnimation("catrunning");
  Mouse.addAnimation("mouseteasing",mouse2);
  Mouse.changeAnimation("mouseteasing");
  }
  
  
  

}
