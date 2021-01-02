const Engine=Matter.Engine;
const World=Matter.World;
const Bodies =Matter.Bodies;
var engine,world,ball,ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
 var gp={
   isStatic:true
 }
 ground=Bodies.rectangle(200,390,400,20,gp);
 var bp={restitution:1};
 ball=Bodies.circle(200,200,50,bp);
 World.add(world,ground);
 World.add(world,ball);

}

function draw() {
  background(0); 
  rectMode(CENTER) ;
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);
  
  drawSprites();
}