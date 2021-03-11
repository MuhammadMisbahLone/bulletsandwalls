const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var slide1;
var slide2;
var slide3;
var wall1;
var wall2;
var wall3;
var wall4;
var bullet1;
var bullet2;
var bullet3;
var bullet4;
function preload() {
   
} 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    slide1 = createSprite(200,100,400,10);
    slide2 = createSprite(200,200,400,10);
    slide3 = createSprite(200,300,400,10);
    wall1 = createSprite(380,50,10,40);
    wall2 = createSprite(380,150,10,40);
    wall3 = createSprite(380,250,10,40);
    wall4 = createSprite(380,350,10,40);
    bullet1 = createSprite(20,50,10,10);
    bullet2 = createSprite(20,150,10,10);
    bullet3 = createSprite(20,250,10,10);
    bullet4 = createSprite(20,350,10,10);
  }
function draw(){
    background("black");
    Engine.update(engine);
    bullet1.velocityX = 2;
    bullet2.velocityX = 2;
    bullet3.velocityX = 2;
    bullet4.velocityX = 2;
    if(bullet1.isTouching(wall1)){
        bullet1.velocityX = 0;
        bullet1.shapeColor = "white";
    }
    if(bullet2.isTouching(wall2)){
        bullet2.velocityX = 0;
        bullet2.shapeColor = "yellow";
    }
    if(bullet3.isTouching(wall3)){
        bullet3.velocityX = 0;
        bullet3.shapeColor = "red";
    }
    if(bullet4.isTouching(wall4)){
        bullet4.velocityX = 0;
        bullet4.shapeColor = "green";
    }
    drawSprites();
}
