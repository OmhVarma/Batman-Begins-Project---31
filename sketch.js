const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drops = []
var man1,man;
var maxDrops = 100;

function preload(){
    
//man1 = loadImage("sprites/walking_1.png");

}

function setup(){
   createCanvas(650,1200);
   engine = Engine.create;
   world = engine.world;

   for (var i=0; i<maxDrops; i++){
    drops.push(new Drop(random(0,650), random(0,1200)));
   }
}

function draw(){
    background(0);
    Engine.update(engine);
    light();
    drawSprites();

    for (var i=0; i<maxDrops; i++){
         drops[i].display();
    }
}   

function light(){
rand = Math.round(random(1,4));

if(frameCount%80 === 0){
   lightFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);
   switch(rand){
       case 1:thunder.addImage("sprites/1.png")
       break;
       case 2:thunder.addImage("sprites/2.png")
       break;
       case 3:thunder.addImage("sprites/3.png")
       break;
       case 4:thunder.addImage("sprites/4.png")
       break;
       default: break;
   }
   thunder.scale = random(0.3,0.6);
}
}






