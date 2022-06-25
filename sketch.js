const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball;
var b2;
var b1;

let engine;
let world;
var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  b1=createImg("up.png");
  b1.position(20,30);
  b1.size(50,50)
  b1.mouseClicked(hForce);
  b2=createImg("right.png");
  b2.position(220,30);
  b2.size(50,50)
  b2.mouseClicked(vForce)
  var ball_options = {
  restitutition : 0.95,
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}
  function vForce(){
    Matter.Body.applyForce(ball,{
      x:0,y:0
    },{
      x:0.05,y:0
    })
  }
  function draw() 
  {
    background(51);
    ellipse(ball.position.x,ball.position.y,20);
    ground.show();
    top_wall.show();
    left.show();
    right.show();
    Engine.update(engine);
  }
    function hForce(){
      Matter.Body.applyForce(ball,{
        x:0,y:0
      },{
        x:0,y:-0.05
      })
    }