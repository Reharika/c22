const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var con1;

var ball2;
var con2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var options = {//JSON-javascript object notation
    restitution : 0.8
  }
  ball = Bodies.circle(200,50,20,options)
  World.add(world,ball);

  ball2 = Bodies.circle(200,200,15,options)
  World.add(world,ball2);

  con1 = Matter.Constraint.create({
    length:100,
    stiffness:0.1,
    pointA:{x:200,y:20},
    bodyB:ball,
  })
  World.add(world,con1)
  con2 = Matter.Constraint.create({
    length:100,
    stiffness:0.1,
    bodyA: ball,
    bodyB: ball2,
  })
  World.add(world,con2)


}

function draw() 
{
  background(51);
  Engine.update(engine);


  ellipse(ball.position.x,ball.position.y,20);

  ellipse(ball2.position.x,ball2.position.y,15);


push()
  stroke("blue")//color to the line
  strokeWeight(4)//thickness to the border or line
  line(con1.pointA.x,con1.pointA.y,ball.position.x,ball.position.y)
  pop()

  push()
  stroke("red")//color to the line
  strokeWeight(4)
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y)
  pop()
}


function keyPressed(){//this function gets called automatically when u press any key in the keyboard i.e event
    if(keyCode === RIGHT_ARROW){
      
        Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
    }

}



