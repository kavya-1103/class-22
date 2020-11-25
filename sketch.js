const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine;
var object;

var options={
  isStatic:true
}
var balloptions={
  restitution:1
}
function setup() {
  createCanvas(400,400);
  engine=Engine.create(); //by default a world is created
  world=engine.world;
  
  object=Bodies.rectangle(200,380,400,30,options);
  World.add(world,object);


ball=Bodies.circle(200,5,10,balloptions)
 World.add(world,ball)
}

function draw() {
  background(0); 
  Engine.update(engine) ;
rectMode(CENTER);
fill("white")
 rect(object.position.x,object.position.y,400,30);

 ellipseMode(RADIUS);
 fill("red")
 ellipse(ball.position.x,ball.position.y,10,10)
}