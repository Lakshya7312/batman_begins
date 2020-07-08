const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas;
var engine, world;

var umbrella;

var drop;
var drops = [];

var thunderImage1, thunderImage2;
var thunder1, thunder2, thunder3;

function preload(){
    thunderImage1 = loadImage("thun1.png");
    thunderImage2 = loadImage("thun2.png");
}

function setup(){
   canvas = createCanvas(800, 600);

   engine = Engine.create();
   world = engine.world;

   thunder1 = createSprite(100, 65, 10, 40);
   thunder2 = createSprite(400, 65, 10, 40);
   thunder3 = createSprite(700, 65, 10, 40);

   umbrella = new Umbrella(400, 486);
}

function draw(){
    background(0, 8, 7);
    
    Engine.update(engine);

    umbrella.display();

    if(frameCount % 1 === 0){
        drop = new Drops(random(0, 800), random(0, 600));
        drops.push(drop);
    }

    for(var i = 0; i < drops.length; i++) {
        drops[i].fall(10);
        drops[i].display();
    }

    if(frameCount % 10 === 0) {
        var rand = Math.round(random(1, 2));
         switch(rand) {
           case 1: thunder1.addImage(thunderImage1);
                break;
           case 2: thunder1.addImage(thunderImage2);
                break;
           default: break;
         }
    }

    if(frameCount % 10 === 0) {
        var rand = Math.round(random(1, 2));
         switch(rand) {
           case 1: thunder2.addImage(thunderImage1);
                break;
           case 2: thunder2.addImage(thunderImage2);
                break;
           default: break;
         }
    }

    if(frameCount % 10 === 0) {
        var rand = Math.round(random(1, 2));
         switch(rand) {
           case 1: thunder3.addImage(thunderImage1);
                break;
           case 2: thunder3.addImage(thunderImage2);
                break;
           default: break;
         }
    }

drawSprites();

}   

