
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustBin1, dustBin2, dustBin3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustBin1 = new dustbin(600,670,200,20);
	dustBin2 = new dustbin(690,620,20,80);
	dustBin3 = new dustbin(510, 620, 20, 80);
	dustBin1.image = loadImage('bin.png');

	paper = new Paper(200,450,40);

	ground = new Ground(401, 700, 800, 40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1000);

  dustBin1.display();
  dust1Position = dustBin1.body.position;
  image(dustBin1.image, dust1Position.x-100, dust1Position.y-100, 200, 100);
  dustBin2.display();
  dustBin3.display();
  paper.display();
  ground.display();
  
  drawSprites();
}
  function keyPressed(){
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(paper.body, paper.body.position,{x:53, y: -53})
	  }
  }
